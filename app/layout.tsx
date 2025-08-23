import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; // ✅ Using Montserrat instead of Inter
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";

// ✅ Font config
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // commonly used font weights
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sagar Bisht",
  description: "Personal portfolio showcasing my work and skills",
  icons: {
    icon: "/weather.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}> {/* ✅ Applying the font */}
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
