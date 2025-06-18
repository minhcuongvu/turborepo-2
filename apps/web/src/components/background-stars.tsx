"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type Star = { x: number; y: number };

function generateStarCoordinates(count: number): Star[] {
    const coords = [];
    for (let i = 0; i < count; i++) {
        coords.push({
            x: Math.floor(Math.random() * 2000),
            y: Math.floor(Math.random() * 2000),
        });
    }
    return coords;
}

function starsToBoxShadow(stars: Star[], color: string): string {
    return stars.map(({ x, y }) => `${x}px ${y}px ${color}`).join(", ");
}

export default function BackgroundStars() {
    const [isDark, setIsDark] = useState(false);
    const theme = useTheme();

    useEffect(() => {
        setIsDark(theme.theme === "dark" || theme.theme === "system");
    }, [theme.theme]);

    const [starCoords, setStarCoords] = useState<null | {
        small: Star[];
        medium: Star[];
        large: Star[];
    }>(null);

    useEffect(() => {
        // Safe to run on client only
        setStarCoords({
            small: generateStarCoordinates(700),
            medium: generateStarCoordinates(200),
            large: generateStarCoordinates(100),
        });
    }, []);

    const color = isDark ? "#FFF" : "#000";

    const commonStarStyle = (
        size: number,
        stars: Star[],
        duration: number
    ): React.CSSProperties => ({
        width: `${size}px`,
        height: `${size}px`,
        background: "transparent",
        boxShadow: starsToBoxShadow(stars, color),
        animation: `animStar ${duration}s linear infinite`,
        position: "absolute",
    });

    if (!starCoords) return null; // Wait until client has generated coordinates

    return (
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
            <div style={commonStarStyle(1, starCoords.small, 50)} />
            <div style={commonStarStyle(2, starCoords.medium, 100)} />
            <div style={commonStarStyle(3, starCoords.large, 150)} />

            <style>{`
        @keyframes animStar {
          from { transform: translateY(0px); }
          to { transform: translateY(-2000px); }
        }
      `}</style>
        </div>
    );
}
