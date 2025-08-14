import Image from "next/image";
import { useTheme } from "../context/ThemeContext";;

export default function About() {
  const { theme } = useTheme();

  return (
    <section className="mt-10 mb-16" id="about">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Trust me, I{"'"}m a{" "}
            <span className="text-cyan-400">Software Engineer.</span>
          </h1>

          <p
            className={`max-w-xl text-sm md:text-base ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            } mb-4`}
          >
            Meet <strong>Sagar Bisht</strong>, a passionate developer building modern web apps and tools.
            A full-stack enthusiast exploring scalable architectures and delightful UI. Focused on building real-world products and helping others through tech.
          </p>

          <p className="text-sm md:text-base text-gray-400 mb-4">
            Building{" "}
            <span className={`font-semibold ${ theme === "dark" ? "text-white" : "text-black"}`}>your next-gen product</span> ✨
          </p>

         
       
        </div>

        {/* Profile Image */}
        <div className="relative flex-shrink-0">
          <Image
            src="/profile.jpg" // Make sure you add this image in public folder
            alt="Sagar Bisht"
            width={260}
            height={260}
            className="rounded-xl object-cover shadow-lg border-2 border-gray-600"
            priority
          />
        </div>
      </div>
    </section>
  );
}
