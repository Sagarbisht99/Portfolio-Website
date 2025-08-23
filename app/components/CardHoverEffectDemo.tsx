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
    title: "Password Manager",
    description:
      "Secure and customizable password manager with encryption and local storage support.",
    tags: ["React", "TailwindCSS", "LocalStorage", "JavaScript"],
    icon: "/next.svg",
    link: "https://password-manager-eight-inky.vercel.app/",
    code: "https://github.com/Sagarbisht99/Password-Manager",
    image: "/dummy-logo-3.svg",
  },
  {
    title: "Mausam Dashboard",
    description:
      "A modern weather app providing real-time forecasts, temperature, and city-based search with a clean UI.",
    tags: ["Next.js", "OpenAI", "TypeScript", "TailwindCSS"],
    icon: "/weather.svg",
    link: "https://weather-app-next-js-ashen.vercel.app/",
    code: "https://github.com/Sagarbisht99/weather-app-next-js",
    image: "/weather.svg",
  },
  {
    title: "Fizzi Drink (Product Showcase)",
    description:
      "Interactive product showcase website for a fizzy drink brand with animations and smooth UI.",
    tags: ["Next.js", "React", "TailwindCSS", "Framer Motion"],
    icon: "/next.svg",
    link: "https://fizzi-animinated-project.vercel.app/", // change if you deploy
    code: "https://github.com/Sagarbisht99/fizzi-animinated-project", // change if repo ready
    image: "/product.svg",
  },
  {
    title: "Crypto Tracker",
    description:
      "Live cryptocurrency tracker displaying real-time market prices, charts, and percentage changes.",
    tags: ["React", "Chart.js", "API", "TailwindCSS"],
    icon: "/next.svg",
    link: "https://crypto-currency-green-mu.vercel.app/",
    code: "https://github.com/Sagarbisht99/Crypto-currency-/tree/main/Crypto%20Currency",
    image: "/dummy-logo-4.svg",
  },
];
