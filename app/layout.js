import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata = {
  title: "Jacob Barcelona | Software Engineer",
  description: "Software Engineer from Manila, Philippines specializing in Web Development, Mobile Development, and Machine Learning. Building scalable solutions with React, Next.js, React Native, Django, and Python.",
  keywords: ["Software Engineer", "Web Developer", "Mobile Developer", "React", "Next.js", "React Native", "Django", "Python", "Manila", "Philippines"],
  authors: [{ name: "Jacob Barcelona" }],
  openGraph: {
    title: "Jacob Barcelona | Software Engineer",
    description: "Software Engineer from Manila specializing in Web, Mobile, and Machine Learning. Explore my projects and get in touch.",
    url: "https://jacobbarcelona.dev",
    siteName: "Jacob Barcelona Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jacob Barcelona | Software Engineer",
    description: "Software Engineer from Manila specializing in Web, Mobile, and Machine Learning.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
