import Image from "next/image";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";

export default function About() {
  const { theme } = useTheme();
  return (
    <section className="mt-10 mb-12" id="about">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="flex-1 text-center md:text-left">
          <div className="mb-2">
            <h1 className="text-3xl md:text-4xl font-extrabold">Sagar Bisht</h1>
          </div>
          <div className="mb-2">
            <span className="text-base md:text-lg font-semibold text-indigo-400">
              Full Stack Developer | Tech Enthusiast
            </span>
          </div>
          <p
            className={`max-w-xl mx-auto md:mx-0 ${
              theme === "dark" ? "text-[#cccccc]" : "text-zinc-700"
            } text-slate-400 text-sm md:text-base`}
          >
            Passionate developer building modern web applications and tools.
            Always learning, always building. Find me on{" "}
            <Link
              href="https://www.linkedin.com/in/sagarbisht"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 hover:text-indigo-400 transition"
            >
              LinkedIn
            </Link>{" "}
            or reach out directly at{" "}
            <a
              href="mailto:sagarbishtdev@gmail.com"
              className="text-indigo-500 hover:text-indigo-400 transition font-medium"
            >
              sagarbishtz589@gmail.com
            </a>
            .
          </p>
        </div>
        <div className="relative flex-shrink-0">
          <Image
            src="/profile.jpg"
            height={80}
            width={80}
            className="rounded-md border-2 object-cover"
            alt="Sagar Bisht profile image"
            priority
          />
        </div>
      </div>
    </section>
  );
}
