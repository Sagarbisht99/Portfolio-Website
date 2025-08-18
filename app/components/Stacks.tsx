import { useTheme } from "../context/ThemeContext";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Javascript (ES6+)",
  "Redux",
  "TailwindCSS",
  "Node.js",
  "Expressjs",
  "Mongo DB",
  "MySQL",
  "PostgreSQL",
  "Mongoose",
  "Drizzle",
  "Docker",
  "Kubernetes",
  "Git & Github",
  "Data Structure and Algorithm",
  "System Design"
];

export default function Stacks() {
  const { theme } = useTheme();

  return (
    <section className="mt-20" id="stacks">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-left">Stacks</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className={`${
              theme === "dark" ? "bg-[#2a2a2a]" : "bg-zinc-200"
            } px-3 py-1 rounded text-xs md:text-sm font-semibold transition-colors`}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
