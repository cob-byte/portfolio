"use client";
import { useEffect, useRef } from "react";

/**
 * Perlin flow-field background — particles drift along a noise field and leave
 * fading colored trails (the "moving lines"). Ported from the Odysseus hero and
 * tuned for a light background: trails are erased (not painted white) so the
 * static dot-grid behind the canvas stays visible.
 */
export default function HeroFlow() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    const parent = canvas.parentElement;
    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let W, H, t = 0, raf;
    const particles = [];
    const COLORS = ["#e63946", "#1f2937", "#94a3b8"]; // accent red, slate, gray

    const n2 = (x, y) => {
      const n = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
      return n - Math.floor(n);
    };
    const noise = (x, y) => {
      const ix = Math.floor(x), iy = Math.floor(y), fx = x - ix, fy = y - iy;
      const a = n2(ix, iy), b = n2(ix + 1, iy), c = n2(ix, iy + 1), d = n2(ix + 1, iy + 1);
      const ux = fx * fx * (3 - 2 * fx), uy = fy * fy * (3 - 2 * fy);
      return a + (b - a) * ux + (c - a) * uy + (a - b - c + d) * ux * uy;
    };

    const resize = () => {
      W = parent.clientWidth; H = parent.clientHeight;
      canvas.width = W * dpr; canvas.height = H * dpr;
      canvas.style.width = W + "px"; canvas.style.height = H + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!particles.length) {
        for (let i = 0; i < 340; i++)
          particles.push({
            x: Math.random() * W,
            y: Math.random() * H,
            life: Math.random(),
            c: COLORS[i % COLORS.length],
          });
      }
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      raf = requestAnimationFrame(draw);

      // Fade old trails by *erasing* (keeps the canvas transparent over the dots).
      // Lower alpha = longer-lived trails.
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0,0,0,0.04)";
      ctx.fillRect(0, 0, W, H);
      ctx.globalCompositeOperation = "source-over";

      for (const p of particles) {
        const ang = noise(p.x * 0.004 + t * 0.0008, p.y * 0.004 + 100) * Math.PI * 6;
        const sp = 1 + noise(p.x * 0.003, p.y * 0.003 + 50) * 1.5;
        p.x += Math.cos(ang) * sp;
        p.y += Math.sin(ang) * sp;
        p.life -= 0.001;
        if (p.life <= 0 || p.x < 0 || p.x > W || p.y < 0 || p.y > H) {
          p.x = Math.random() * W; p.y = Math.random() * H; p.life = 1;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.1, 0, Math.PI * 2);
        ctx.fillStyle = p.c;
        ctx.globalAlpha = p.life * 0.18;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      t++;
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
