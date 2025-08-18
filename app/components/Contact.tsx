import { useTheme } from "../context/ThemeContext";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import { SiLeetcode } from "react-icons/si"; 

export default function Contact() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className="mt-18 pb-20 px-4 md:px-0" id="contact">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-8 text-left leading-tight">
          Let’s Connect
        </h2>

        <div
          className={`rounded-2xl p-8 border ${
            isDark
              ? "bg-[#1a1a1a] border-zinc-700 text-[#e5e5e5]"
              : "bg-white border-zinc-200 text-zinc-800 shadow-md"
          } transition-colors space-y-6`}
        >
          <ContactRow
            icon={<Mail size={22} />}
            label="Email"
            href="mailto:sagarbishtz589@gmail.com"
            text="sagarbishtz589@gmail.com"
            isDark={isDark}
          />

          <ContactRow
            icon={<Linkedin size={22} />}
            label="LinkedIn"
            href="https://www.linkedin.com/in/sagar-bisht-b13840316/"
            text="linkedin.com/in/sagar-bisht-b13840316/"
            isDark={isDark}
          />

          <ContactRow
            icon={<SiLeetcode size={22} />}
            label="LeetCode"
            href="https://leetcode.com/u/Sagar_89/"
            text="Sagar_89"
            isDark={isDark}
          />

          <ContactRow
            icon={<Twitter size={22} />}
            label="X (Twitter)"
            href="https://x.com/LegasPole"
            text="twitter.com/LegasPole"
            isDark={isDark}
          />

          <ContactRow
            icon={<Github size={22} />}
            label="GitHub"
            href="https://github.com/Sagarbisht99"
            text="github.com/Sagarbisht99"
            isDark={isDark}
          />
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  href,
  text,
  isDark,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
  text: string;
  isDark: boolean;
}) {
  const linkColor = isDark ? "text-indigo-300" : "text-indigo-600";

  return (
    <div className="flex items-center gap-4">
      <div className="text-indigo-400">{icon}</div>
      <div className="flex flex-col">
        <span className="text-sm font-medium text-zinc-500">{label}</span>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${linkColor} hover:underline font-semibold break-all`}
        >
          {text}
        </a>
      </div>
    </div>
  );
}
