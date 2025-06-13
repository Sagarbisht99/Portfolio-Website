import Link from "next/link";
import { useTheme } from "../context/ThemeContext";

const experience = [
  {
    role: "Front developer Intern",
    company: "ThePrint",
    companyUrl: "#",
    date: "Jan 2025 – Mar 2025",
    tags: ["CSS", "Git", "GSAP", "Wordpress"],
    points: [
      "Built mobile-first layouts for editorial content.",
      "Reduced load time by 30% with image optimization & code refactor.",
      "Worked directly with stakeholders to ship features fast.",
      "Maintained consistent UI across articles and categories.",
    ],
    link: "https://theprint.in/",
  },
  {
    role: "Front developer Intern",
    company: "ThePrint Store",
    companyUrl: "#",
    date: "Jan 2025 – Mar 2025",
    tags: ["CSS", "Tailwind CSS", "Docker", "Git"],
    points: [
      "Led a full redesign of the store frontend for desktop and mobile.",
      "Translated Figma wireframes into performant components.",
      "Refactored legacy code, improving consistency & UX.",
      "Boosted user engagement with smoother navigation and support.",
    ],
    link: "https://store.theprint.in/",
  },
];

export default function Experience() {
  const { theme } = useTheme();
  return (
    <section className="mt-16" id="experience">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-left">
        Experience
      </h2>
      <div className="space-y-6">
        {experience.map((exp, idx) => (
          <div key={idx}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <span className="font-bold text-base md:text-lg">
                <span>
                  <Link
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                  >
                    <span>{exp.role}</span>
                {" "}at {exp.company}
                  </Link>
                </span>{" "}
              </span>
              <span
                className={`text-gray-400 ${
                  theme === "dark" ? "text-gray-300" : "text-zinc-700"
                } text-sm whitespace-nowrap`}
              >
                {exp.date}
              </span>
            </div>
            <div
              className={`ml-1 mt-1 ${
                theme === "dark" ? "text-gray-300" : "text-zinc-700"
              } text-sm`}
            >
              {exp.points.join(" ")}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
