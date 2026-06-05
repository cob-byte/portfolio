"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home",    href: "#top" },
  { label: "About",   href: "#about" },
  { label: "Services",href: "#services" },
  { label: "Work",    href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive]         = useState("top");

  useEffect(() => {
    const onScroll = () => {
      const ids = ["contact", "projects", "services", "about"];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id); return;
        }
      }
      setActive("top");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Desktop side rail ── */}
      <nav className="hidden lg:flex fixed left-0 top-0 h-full w-16 flex-col items-center justify-between py-8 z-50 bg-surface border-r border-border">
        {/* Logo */}
        <a href="#top" className="shrink-0">
          <Image src={assets.logo} alt="Jacob" className="w-10" />
        </a>

        {/* Nav dots + labels */}
        <ul className="flex flex-col items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.replace("#", "");
            const isActive = active === id;
            return (
              <li key={href}>
                <a href={href} className="group flex flex-col items-center gap-1.5" title={label}>
                  <span className={`block w-1.5 h-1.5 rounded-full transition-all duration-300
                    ${isActive ? "bg-accent scale-125" : "bg-muted group-hover:bg-accent"}`}
                  />
                  <span
                    className={`text-[9px] tracking-widest uppercase transition-colors duration-300
                      ${isActive ? "text-accent" : "text-muted group-hover:text-accent"}`}
                    style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                  >
                    {label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Social links */}
        <div className="flex flex-col items-center gap-4">
          <a href="https://github.com/cob-byte" target="_blank" rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.3-1.23 3.3-1.23.66 1.66.26 2.88.13 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/cob-bytes/" target="_blank" rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.36 4.26 5.44v6.3zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/>
            </svg>
          </a>
        </div>
      </nav>

      {/* ── Mobile top bar ── */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-md border-b border-border px-6 py-4 flex items-center justify-between">
        <a href="#top">
          <Image src={assets.logo} alt="Jacob" className="w-24" />
        </a>
        <button onClick={() => setMobileOpen(true)} className="text-text p-1">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6"  x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
      </nav>

      {/* ── Mobile full-screen menu ── */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-bg flex flex-col items-center justify-center gap-10">
          <button onClick={() => setMobileOpen(false)}
            className="absolute top-6 right-6 text-muted hover:text-text transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6"  x2="6"  y2="18"/>
              <line x1="6"  y1="6"  x2="18" y2="18"/>
            </svg>
          </button>
          {NAV_LINKS.map(({ label, href }) => (
            <a key={href} href={href} onClick={() => setMobileOpen(false)}
              className="text-4xl font-semibold text-text hover:text-accent transition-colors">
              {label}
            </a>
          ))}
          <div className="flex gap-6 mt-4">
            <a href="https://github.com/cob-byte" target="_blank" rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/cob-bytes/" target="_blank" rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors">LinkedIn</a>
          </div>
        </div>
      )}
    </>
  );
}
