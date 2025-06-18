'use client';

import { useEffect, useState } from "react";
import NavComponent from "../navbar";

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 10); // add backdrop if not at top
    };

    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 w-full z-50 transition-all duration-300
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
