import { useTheme } from "@/app/context/ThemeContext";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    tags: string[];
    icon: string;
    code: string;
    image: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { theme } = useTheme(); // ✅ Get current theme

  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item.link}
          key={item.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className={cn(
                  "absolute inset-0 h-full w-full block rounded-3xl",
                  isDark ? "bg-zinc-800" : "bg-neutral-200"
                )}
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>

          <Card isDark={isDark}>
            <Image src={item.image} width={48} height={48} alt={item.title} />
            <CardTitle isDark={isDark}>{item.title}</CardTitle>
            <CardDescription isDark={isDark}>
              {item.description}
            </CardDescription>

            <div className="flex flex-wrap gap-2 mt-4">
              {item.tags.map((tag, i) => (
                <span
                  key={i}
                  className={cn(
                    "text-xs px-2 py-1 rounded-full",
                    isDark
                      ? "bg-zinc-700 text-white"
                      : "bg-zinc-200 text-zinc-700"
                  )}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-4 flex gap-4">
              <a
                href={item.link}
                target="_blank"
                className="text-sm bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-200"
              >
                Live
              </a>
              <a
                href={item.code}
                target="_blank"
                className="text-sm bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600 transition duration-200"
              >
                Code
              </a>
            </div>
          </Card>
        </a>
      ))}
    </div>
  );
};

// ✅ Modified Card component to accept isDark prop
export const Card = ({
  className,
  children,
  isDark,
}: {
  className?: string;
  children: React.ReactNode;
  isDark: boolean;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden border group-hover:border-slate-300 relative z-20",
        isDark
          ? "bg-zinc-800 border-white/10 group-hover:border-slate-700"
          : "bg-white border-zinc-200 group-hover:border-slate-300",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-2">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
  isDark,
}: {
  className?: string;
  children: React.ReactNode;
  isDark: boolean;
}) => {
  return (
    <h4
      className={cn(
        "font-bold tracking-wide mt-4",
        isDark ? "text-zinc-100" : "text-zinc-800",
        className
      )}
    >
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
  isDark,
}: {
  className?: string;
  children: React.ReactNode;
  isDark: boolean;
}) => {
  return (
    <p
      className={cn(
        "mt-4 tracking-wide leading-relaxed text-sm",
        isDark ? "text-zinc-400" : "text-zinc-600",
        className
      )}
    >
      {children}
    </p>
  );
};