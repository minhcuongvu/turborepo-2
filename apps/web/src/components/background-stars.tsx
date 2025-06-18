"use client";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

type Star = { x: number; y: number };
const TILE_HEIGHT = 2_000;          // how far we scroll per loop
const FIELD_HEIGHT = TILE_HEIGHT * 2; // cover two tiles so start- & end-frames match

/** Generate stars anywhere between y = 0 … FIELD_HEIGHT */
const genStars = (n: number): Star[] =>
    Array.from({ length: n }, () => ({
        x: Math.floor(Math.random() * 2_000),
        y: Math.floor(Math.random() * FIELD_HEIGHT),
    }));

const toShadow = (stars: Star[], c: string) =>
    stars.map(s => `${s.x}px ${s.y}px ${c}`).join(",");

export default function BackgroundStars() {
    const { theme } = useTheme();
    const color = theme === "dark" || theme === "system" ? "#fff" : "#000";

    /** Stable star field – created once, stays in a ref. */
    const stars = useRef<{
        small: Star[];
        medium: Star[];
        large: Star[];
    }>(null);

    /** Only render on the client; avoid hydration mismatch. */
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        stars.current ??= {
            small: genStars(350),   // ✨ smaller numbers  →  sparser sky
            medium: genStars(100),
            large: genStars(50),
        };
        setMounted(true);
    }, []);

    if (!mounted || !stars.current) return null;

    const layer = (
        size: number,
        starsArr: Star[],
        duration: number
    ): React.CSSProperties => ({
        width: `${size}px`,         // keep “px” strings for server/client parity
        height: `${size}px`,
        position: "absolute",
        inset: 0,
        background: "transparent",
        boxShadow: toShadow(starsArr, color),
        animation: `starScroll ${duration}s linear infinite`,
        willChange: "transform",
    });

    return (
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
            {/* one layer each — no duplicates */}
            <div style={layer(1, stars.current.small, 100)} />
            <div style={layer(2, stars.current.medium, 200)} />
            <div style={layer(3, stars.current.large, 300)} />

            <style jsx>{`
        @keyframes starScroll {
          from {
            transform: translateY(0);
          }
          to {
            /* move exactly one tile; frame at 100 % matches frame at 0 % */
            transform: translateY(-${TILE_HEIGHT}px);
          }
        }
      `}</style>
        </div>
    );
}
