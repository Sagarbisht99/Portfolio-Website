"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";

interface ExperienceItem {
  role: string;
  company: string;
  date: string;
  link: string;
  logo: string;
  tags: string[];
  points: string[];
}

const experience: ExperienceItem[] = [
  {
    role: "Freelance Full Stack Developer",
    company: "Self-employed",
    date: "Apr 2025 – Present",
    link: "https://sagarbisht.dev",
    logo: "/freelance.png",
    tags: ["Next.js", "MongoDB", "TailwindCSS", "Stripe", "GSAP"],
    points: [
      "Delivered custom full-stack web applications for startups and local businesses.",
      "Built dynamic UIs, admin dashboards, and integrated secure payment flows using Stripe.",
      "Implemented fast, SEO-optimized Next.js apps with animations powered by GSAP and Framer Motion.",
      "Collaborated with clients to turn wireframes into responsive, high-performing websites.",
    ],
  },
  {
    role: "Open Source Contributor",
    company: "Supabase",
    date: "May 2025 – Present",
    link: "https://supabase.com/",
    logo: "/superbase.svg",
    tags: ["TypeScript", "PostgreSQL", "Next.js", "Open Source"],
    points: [
      "Contributed to Supabase’s open-source repositories by resolving 7+ issues.",
      "Improved developer experience through documentation and minor UI fixes.",
      "Collaborated with the community and maintainers to review and test PRs.",
      "Gained deep understanding of backend infrastructure and edge functions.",
    ],
  },
  {
    role: "Junior Software Engineer",
    company: "ThePrint",
    date: "Jan 2025 – Mar 2025",
    link: "https://theprint.in/",
    logo: "/theprint.png",
    tags: ["CSS", "Git", "GSAP", "WordPress"],
    points: [
      "Built mobile-first layouts for editorial content.",
      "Reduced load time by 30% with image optimization & code refactor.",
      "Worked directly with stakeholders to ship features fast.",
      "Maintained consistent UI across articles and categories.",
    ],
  },
  {
    role: "Junior Software Engineer",
    company: "ThePrint Store",
    date: "Jan 2025 – Mar 2025",
    link: "https://store.theprint.in/",
    logo: "/theprintstore.avif",
    tags: ["CSS", "Tailwind CSS", "Docker", "Git"],
    points: [
      "Led a full redesign of the store frontend for desktop and mobile.",
      "Translated Figma wireframes into performant components.",
      "Refactored legacy code, improving consistency & UX.",
      "Boosted user engagement with smoother navigation and support.",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
};

export default function Experience(){
  const { theme } = useTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="experience" className="mt-20">
      <h2 className="text-4xl font-bold mb-8">Work Experience</h2>
      <div className="space-y-8">
        {experience.map((exp, index) => (
          <div key={index} className="border-l-1 pl-6 relative">
            <div
              className="cursor-pointer flex items-center gap-4"
              onClick={() => toggleDropdown(index)}
            >
              <Image
                src={exp.logo}
                alt={`${exp.company} logo`}
                width={40}
                height={40}
                className="rounded bg-white p-1 object-contain aspect-square"
              />
              <div className="flex flex-col">
                <span className="text-lg font-semibold">{exp.role}</span>
                <Link
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-shadow-zinc-700"
                >
                  {exp.company}
                </Link>
              </div>
              <span className="ml-auto text-sm text-gray-400">{exp.date}</span>
            </div>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="dropdown"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={containerVariants}
                  className={`mt-4 ml-12 text-sm ${
                    theme === "dark" ? "text-gray-300" : "text-gray-800"
                  }`}
                >
                  <motion.ul className="ml-1 space-y-3">
                    {exp.points.map((point, i) => (
                      <motion.li
                        key={i}
                        variants={itemVariants}
                        className="flex items-start gap-2 text-sm leading-relaxed"
                      >
                        <Check
                          size={18}
                          className="text-cyan-400 mt-1 flex-shrink-0"
                        />
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                  <div className="flex flex-wrap mt-3 gap-2">
                    {exp.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-gray-700 text-white px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
