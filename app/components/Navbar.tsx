"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(
    null
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Scroll logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide on scroll down
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);

      // Show when scrolling stops
      if (scrollTimeout) clearTimeout(scrollTimeout);
      const timeout = setTimeout(() => setShowNavbar(true), 200);
      setScrollTimeout(timeout);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [lastScrollY, scrollTimeout]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } ${
        theme === "dark"
          ? pathname === "/" ? "bg-[#1a1a1a]/80 backdrop-blur-sm" : "bg-[#1a1a1a]"
          : pathname === "/" ? "bg-white/80 backdrop-blur-sm" : "bg-white"
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-xl transition-all duration-200 ${
              theme === "dark"
                ? "bg-[#2a2a2a] hover:bg-[#3a3a3a]"
                : "bg-[#f5f5f5] hover:bg-[#eaeaea]"
            }`}
          >
            {theme === "dark" ? (
              <MdOutlineDarkMode size={20} />
            ) : (
              <MdOutlineLightMode size={20} />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-xl transition-all duration-200"
          >
            {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>

          {/* Navigation Links - Desktop */}
          <div
            className={`hidden md:flex gap-8 border-1 border-zinc-500 rounded-full shadow-2xs px-4 py-2 ${
              theme === "dark" ? "text-white" : "text-[#1a1a1a]"
            }`}
          >
            <a
              href="#experience"
              className="text-sm font-medium hover:text-blue-400 transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-sm font-medium hover:text-blue-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#stacks"
              className="text-sm font-medium hover:text-blue-400 transition-colors"
            >
              Stacks
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Mobile Navigation Links */}
        <div
          className={`md:hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="flex flex-col gap-4 py-4">
            <a
              href="#experience"
              className="text-sm font-medium hover:text-blue-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-sm font-medium hover:text-blue-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#stacks"
              className="text-sm font-medium hover:text-blue-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Stacks
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-blue-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
