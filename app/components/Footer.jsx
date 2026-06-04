import { assets } from "@/assets/assets";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 sm:px-12 xl:px-16 py-8 sm:py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">

        <a href="#top">
          <Image src={assets.logo} alt="Jacob" className="w-28" />
        </a>

        <p className="text-muted text-xs text-center">
          © 2026 Jacob Barcelona. All rights reserved.
        </p>

        <ul className="flex gap-8 text-sm">
          <li>
            <a href="https://github.com/cob-byte" target="_blank" rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/cob-bytes/" target="_blank" rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:jacobbarcelona30@gmail.com"
              className="text-muted hover:text-accent transition-colors">
              Email
            </a>
          </li>
        </ul>

      </div>
    </footer>
  );
}
