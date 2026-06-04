"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { ReactTyped } from "react-typed";

export default function Header() {
  return (
    <section id="top" className="min-h-[calc(100vh-5rem)] lg:min-h-screen flex items-center px-6 sm:px-12 xl:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center py-16 lg:py-0">

        {/* ── Left — text ── */}
        <div className="flex flex-col">

          {/* Profile photo — mobile only */}
          <div className="flex lg:hidden mb-6">
            <Image
              src={assets.profile_img}
              alt="Jacob Barcelona"
              className="w-20 h-20 rounded-full object-cover border-2 border-border"
            />
          </div>

          <p className="text-accent text-sm tracking-[0.2em] uppercase font-semibold mb-4">
            Hi, I&apos;m
          </p>

          <h1 className="font-bold leading-[0.95] tracking-tight text-text mb-1"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5.25rem)" }}>
            Jacob
          </h1>
          <h1 className="font-bold leading-[0.95] tracking-tight mb-6"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5.25rem)" }}>
            Barcelona
          </h1>

          <p className="text-base sm:text-lg text-muted mb-5">
            I build with{" "}
            <ReactTyped
              strings={[
                "React Native",
                "Expo",
                "Supabase",
                "HTML, CSS, JS",
                "Django",
                "PostgreSQL",
                "Python",
                "Computer Vision",
              ]}
              typeSpeed={50}
              backSpeed={15}
              backDelay={1800}
              loop
              className="font-semibold text-text"
            />
          </p>

          <p className="text-muted max-w-md mb-8 leading-relaxed text-sm sm:text-base">
            Software Engineer from Manila, Philippines. I turn ideas into
            production-ready mobile apps, web platforms, and ML systems.
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#contact"
              className="px-8 py-3 bg-accent text-white rounded-full font-medium hover:bg-red-600 transition-colors duration-200">
              Contact Me
            </a>
            <a href="/Barcelona-Resume.pdf" download
              className="px-8 py-3 border border-border text-text rounded-full font-medium hover:border-accent hover:text-accent transition-colors duration-200">
              Resume ↓
            </a>
          </div>
        </div>

        {/* ── Right — contained portrait card ── */}
        <div className="hidden lg:flex items-center justify-end">
          <div className="relative w-72 xl:w-80 aspect-[3/4] rounded-3xl overflow-hidden border border-border shadow-xl">
            <Image
              src={assets.user_image}
              alt="Jacob Barcelona"
              fill
              className="object-cover"
              sizes="320px"
              priority
            />
            <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-accent/0 hover:ring-accent/30 transition-all duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
}
