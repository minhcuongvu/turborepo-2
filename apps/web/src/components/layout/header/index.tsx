'use client';

import { useEffect, useState } from "react";
import NavComponent from "../navbar";

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    setScrolled(window.scrollY > 10);
    const updateScroll = () => {
      const currentY = window.scrollY;
      setHidden(currentY > lastScrollY && currentY > 50);
      setScrolled(currentY > 10); // add backdrop if not at top
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`
        fixed top-0 w-full z-50 transition-all duration-300
        ${hidden ? "-translate-y-full" : "translate-y-0"}
        ${scrolled
          ? "backdrop-blur bg-white/90 dark:bg-black/10"
          : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-xl font-bold">Logo</span>
        <nav className="space-x-6 hidden md:flex">
          <a href="#features" className="text-gray-700 dark:text-gray-300">Features</a>
          <a href="#pricing" className="text-gray-700 dark:text-gray-300">Pricing</a>
          <NavComponent />
        </nav>
      </div>
    </header>
  );
}

export function Header2() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  /* ── header blur on scroll ───────────────────── */
  useEffect(() => {
    setScrolled(window.scrollY > 10);
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── lock body scroll when drawer open ───────── */
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", menuOpen);
  }, [menuOpen]);

  /* ── burger lines (pure CSS) ─────────────────── */
  const line =
    "block h-0.5 w-6 origin-center bg-current transition-all duration-300";

  useEffect(() => {
    const updateScroll = () => {
      const currentY = window.scrollY;
      setHidden(currentY > lastScrollY && currentY > 50);
      setScrolled(currentY > 10); // add backdrop if not at top
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* header bar */}
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 
          ${scrolled
            ? "backdrop-blur bg-white/90 dark:bg-black/10"
            : "bg-transparent"}`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Logo
          </span>

          {/* desktop nav */}
          <nav className="hidden items-center space-x-8 md:flex">
            <a href="#features" className="nav-link">
              Features
            </a>
            <a href="#pricing" className="nav-link">
              Pricing
            </a>
            <NavComponent />
          </nav>

          {/* burger (mobile) */}
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition"
          >
            <span
              className={`${line} ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}
            />
            <span
              className={`${line} ${menuOpen ? "opacity-0" : "my-1"}`}
            />
            <span
              className={`${line} ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            />
          </button>
        </div>
      </header>

      {/* sliding drawer */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-64 bg-white/95 dark:bg-black/95 backdrop-blur-lg shadow-lg
          transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <nav className="mt-20 flex flex-col space-y-6 px-6">
          <a href="#features" onClick={() => setMenuOpen(false)} className="nav-link-mobile">
            Features
          </a>
          <a href="#pricing" onClick={() => setMenuOpen(false)} className="nav-link-mobile">
            Pricing
          </a>
          <NavComponent mobile />
        </nav>
      </aside>

      {/* backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* helper styles (Tailwind @apply) */}
      <style jsx>{`
        .nav-link {
          @apply font-medium text-gray-600 dark:text-gray-300 transition-colors duration-200 hover:text-gray-900 dark:hover:text-white;
        }
        .nav-link-mobile {
          @apply text-lg font-semibold text-gray-800 dark:text-gray-100;
        }
      `}</style>
    </>
  );
}