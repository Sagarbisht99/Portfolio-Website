"use client";
import { useTheme } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Stacks from "./components/Stacks";
import Contact from "./components/Contact";

export default function Home() {
  const { theme } = useTheme();

  // Choose grid color based on theme
  const gridColor = theme === "dark" ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)";

  return (
    <div
      className={`min-h-screen relative overflow-hidden ${
        theme === "dark" ? "bg-[#000000] text-white" : "bg-[#fafafa] text-[#1a1a1a]"
      } transition-colors duration-200`}
    >
      {/* Squares background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(${gridColor} 1px, transparent 1px),
            linear-gradient(90deg, ${gridColor} 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          zIndex: 0,
        }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 pt-5">
        <Navbar />
        <About />
        <Experience />
        <Projects />
        <Stacks />
        <Contact />
      </div>
    </div>
  );
}
