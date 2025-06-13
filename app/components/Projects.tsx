import Image from "next/image";
import { useTheme } from "../context/ThemeContext";
import Link from "next/link";

const projects = [
  {
    title: "Drive Clone",
    description:
      "Google Drive clone to upload, organize, and manage files securely.",
    tags: ["Next.js", "ImageKit", "React", "TailwindCSS"],
    icon: "/next.svg",
    link: "https://drive-tutorial-lyart.vercel.app/",
    code: "https://github.com/Sagarbisht99/drive-tutorial",
    image: "/dummy-logo-1.svg",
  },
  {
    title: "SAAS AI Supernova",
    description: "AI-powered SaaS platform integrating smart ML features.",
    tags: ["Next.js", "OpenAI", "TypeScript", "TailwindCSS"],
    icon: "/next.svg",
    link: "https://saas-ai-msxz.vercel.app/",
    code: "https://github.com/Sagarbisht99/Saas-AI",
    image: "/dummy-logo-2.svg",
  },
  {
    title: "Password Manager",
    description: "Secure and customizable password generator tool.",
    tags: ["React", "TailwindCSS", "LocalStorage", "JavaScript"],
    icon: "/next.svg",
    link: "https://password-manager-eight-inky.vercel.app/",
    code: "https://github.com/Sagarbisht99/Password-Manager",
    image: "/dummy-logo-3.svg",
  },
  {
    title: "Crypto Tracker",
    description: "Live cryptocurrency tracker with real-time data and charts.",
    tags: ["React", "Chart.js", "API", "TailwindCSS"],
    icon: "/next.svg",
    link: "https://crypto-currency-green-mu.vercel.app/",
    code: "https://github.com/Sagarbisht99/Crypto-currency-",
    image: "/dummy-logo-4.svg",
  },
  {
    title: "Rejouice Clone",
    description: "Visually stunning food delivery clone inspired by Rejouice.",
    tags: ["GSAP", "Framer Motion", "Next.js", "TailwindCSS"],
    icon: "/next.svg",
    link: "https://rejouice-clone-flame.vercel.app/",
    code: "https://github.com/Sagarbisht99/Rejouice-Clone",
    image: "/dummy-logo-5.svg",
  },
  {
    title: "Outfit.in (E-Commerce)",
    description:
      "Full-stack e-commerce app with cart, checkout, and admin panel.",
    tags: ["Next.js", "MongoDB", "TailwindCSS", "Stripe"],
    icon: "/next.svg",
    link: "https://outfit-in.vercel.app/",
    code: "https://github.com/Sagarbisht99/outfit.in-",
    image: "/dummy-logo-6.svg",
  },
  {
    title: "Chess.com Clone",
    description:
      "Multiplayer chess game with real-time gameplay and smooth UI.",
    tags: ["React", "Socket.io", "Express", "MongoDB"],
    icon: "/next.svg",
    link: "https://chess-com-clone-j4a6.onrender.com/",
    code: "https://github.com/Sagarbisht99/chess.com-clone",
    image: "/dummy-logo-7.svg",
  },
  {
    title: "Khata Book",
    description:
      "Digital ledger app for managing personal and business accounts.",
    tags: ["Next.js", "MongoDB", "TailwindCSS", "Context API"],
    icon: "/next.svg",
    link: "https://khata-book.vercel.app/",
    code: "https://github.com/Sagarbisht99/khata-book",
    image: "/dummy-logo-8.svg",
  },
];

export default function Projects() {
  const { theme } = useTheme();

  return (
    <section className="mt-20" id="projects">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-left">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project) => (
          <Link
            href={project.code}
            target="_blank"
            key={project.title}
            className={`card-spotlight ${
              theme === "dark"
                ? "bg-[#2a2a2a] border-[#3a3a3a]"
                : "bg-white border-[#eaeaea]"
            } rounded-lg p-4 border cursor-pointer transition-all min-h-[200px] flex flex-col`}
            onMouseMove={(e) => {
              const card = e.currentTarget;
              const rect = card.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              card.style.setProperty("--x", `${x}px`);
              card.style.setProperty("--y", `${y}px`);
            }}
            onMouseLeave={(e) => {
              const card = e.currentTarget;
              card.style.setProperty("--x", `50%`);
              card.style.setProperty("--y", `50%`);
            }}
          >
            <div className="flex flex-col gap-3 mb-2">
              <Image src={project.image} alt="icon" width={24} height={24} />
              <h3
                className={`text-base md:text-lg font-semibold truncate ${
                  theme === "dark" ? "text-white" : "text-[#171717]"
                }`}
              >
                {project.title}
              </h3>
            </div>
            <p className="text-sm md:text-base mb-3 line-clamp-3 flex-grow">
              {project.description}
            </p>
            <div className="flex flex-wrap font-sans gap-1.5 mt-auto">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`${
                    theme === "dark"
                      ? "bg-[#2a2a2a] border-[#3a3a3a]"
                      : "bg-zinc-200 border-[#eaeaea]"
                  } border rounded px-2 py-0.5 text-xs`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
