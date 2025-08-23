"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "../context/ThemeContext";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const navItems: { label: string; href: string }[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Fix hydration mismatch for theme icons
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="inset-x-0 my-6 z-50 flex justify-between items-center">
      {/* Left: Logo + Links */}
      <div
        className={`flex items-center gap-8 px-6 py-5 rounded-2xl shadow-md border transition-colors duration-300 ${
          theme === "dark"
            ? "bg-zinc-700 border-neutral-800"
            : "bg-white border-neutral-300"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/profile.jpg"
            alt="Sagar Bisht profile"
            className="rounded-full"
            width={30}
            height={30}
          />
          <Link
            href="/"
            className={`font-bold text-sm px-3 py-1 rounded-full ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            Sagar Bisht
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-7">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium hover:text-blue-500 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* Right: Theme toggle */}
      {mounted && (
        <button
          onClick={toggleTheme}
          className="rounded-full p-3 border transition"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <MdOutlineLightMode size={18} />
          ) : (
            <MdOutlineDarkMode size={18} />
          )}
        </button>
      )}
    </nav>
  );
}