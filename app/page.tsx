"use client";

import { useTheme } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects"
import Stacks from "./components/Stacks";
import Contact from "./components/Contact";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "bg-[#1a1a1a] text-white" : "bg-[#fafafa] text-[#1a1a1a]"
      } font-sans transition-colors duration-200`}
    >
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 pt-24">
        <About />
        <Experience />
        <Projects />
        <Stacks />
        <Contact />
      </div>
    </div>
  );
}
