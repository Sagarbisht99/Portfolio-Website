import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-7xl mx-auto">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
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
