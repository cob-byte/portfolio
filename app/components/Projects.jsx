"use client";
import { useState, useEffect } from "react";
import { projects } from "@/assets/assets";
import * as Icons from "react-icons/fa";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

const FILTERS = ["All", "Mobile", "Web", "ML"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [viewerIdx, setViewerIdx]       = useState(null);

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  // close viewer if filter changes and current index is out of range
  useEffect(() => {
    if (viewerIdx !== null && viewerIdx >= filtered.length) setViewerIdx(null);
  }, [filtered.length]);

  return (
    <section id="projects" className="w-full px-6 sm:px-12 xl:px-16 py-16 sm:py-24 scroll-mt-20 border-t border-border">
      <div className="max-w-6xl mx-auto">

        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-semibold text-text tracking-tight">
            Work
          </h2>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map((f) => {
            const count = f === "All" ? projects.length : projects.filter(p => p.category === f).length;
            return (
              <button key={f} onClick={() => setActiveFilter(f)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all duration-200
                  ${activeFilter === f
                    ? "bg-accent border-accent text-white"
                    : "bg-transparent border-border text-muted hover:border-accent hover:text-accent"
                  }`}>
                {f === "ML" ? "Machine Learning" : f}
                <span className="ml-1.5 opacity-60">{count}</span>
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} onClick={() => setViewerIdx(i)} />
          ))}
        </div>

      </div>

      {viewerIdx !== null && (
        <PhotoViewer
          project={filtered[viewerIdx]}
          onClose={() => setViewerIdx(null)}
          current={viewerIdx + 1}
          total={filtered.length}
        />
      )}
    </section>
  );
}

/* ── Grid card ── */
function ProjectCard({ project, onClick }) {
  return (
    <div onClick={onClick}
      className="group relative overflow-hidden rounded-2xl bg-surface border border-border cursor-pointer
        hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 aspect-[4/3]">
      <Image src={project.image} alt={project.title} fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent
        opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
        <span className="text-[10px] tracking-widest uppercase text-accent mb-1.5">{project.category}</span>
        <h3 className="text-white font-semibold text-lg leading-snug mb-2">{project.title}</h3>
        <div className="flex flex-wrap gap-1.5">
          {project.skills.slice(0, 3).map((s) => (
            <span key={s} className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white/70">{s}</span>
          ))}
          {project.skills.length > 3 && (
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white/70">+{project.skills.length - 3}</span>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── Photo viewer modal ── */
function PhotoViewer({ project, onClose, current, total }) {
  const gallery = [project.image, ...(project.gallery || [])].filter(Boolean);
  const [idx, setIdx] = useState(0);

  useEffect(() => { setIdx(0); }, [project.id]);

  const [lightbox, setLightbox] = useState(false);

  const prevImg = () => setIdx((i) => (i === 0 ? gallery.length - 1 : i - 1));
  const nextImg = () => setIdx((i) => (i === gallery.length - 1 ? 0 : i + 1));

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape")     { lightbox ? setLightbox(false) : onClose(); }
      if (e.key === "ArrowLeft")  prevImg();
      if (e.key === "ArrowRight") nextImg();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <>
    {/* Overlay — click to close */}
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}>

      {/* Modal box */}
      <div className="relative bg-bg border border-border rounded-2xl shadow-2xl
          w-[95vw] sm:w-[90vw] max-w-6xl h-[88vh] sm:h-[80vh] overflow-hidden flex flex-col lg:flex-row"
        onClick={(e) => e.stopPropagation()}>

        {/* Close */}
        <button onClick={onClose}
          className="absolute top-3 right-3 z-20 text-muted hover:text-text bg-bg border border-border
            p-1.5 rounded-full transition-colors">
          <FaTimes size={14} />
        </button>


        {/* ── Left: photo ── */}
        <div className="relative lg:w-[55%] bg-black flex flex-col shrink-0">
          <div className="relative flex-1 min-h-[240px] sm:min-h-[320px] lg:min-h-0 group/photo">
            <Image src={gallery[idx]} alt={`${project.title} ${idx + 1}`} fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 55vw"
              priority />

            {/* Fullscreen button */}
            <button
              onClick={() => setLightbox(true)}
              className="absolute top-3 left-3 opacity-0 group-hover/photo:opacity-100 transition-opacity duration-200
                text-white/70 hover:text-white bg-black/50 hover:bg-black/80 p-1.5 rounded-lg"
              title="Full screen">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
              </svg>
            </button>

            {/* Gallery arrows */}
            {gallery.length > 1 && (
              <>
                <button onClick={(e) => { e.stopPropagation(); prevImg(); }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white
                    bg-black/40 hover:bg-black/70 p-2 rounded-full transition-all">
                  <FaChevronLeft size={14} />
                </button>
                <button onClick={(e) => { e.stopPropagation(); nextImg(); }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white
                    bg-black/40 hover:bg-black/70 p-2 rounded-full transition-all">
                  <FaChevronRight size={14} />
                </button>
                <span className="absolute bottom-3 right-3 text-[10px] text-white/60 bg-black/50 px-2 py-0.5 rounded-full">
                  {idx + 1} / {gallery.length}
                </span>
              </>
            )}
          </div>

          {/* Thumbnails */}
          {gallery.length > 1 && (
            <div className="flex gap-2 p-3 bg-black overflow-x-auto">
              {gallery.map((img, i) => (
                <div key={i} onClick={() => setIdx(i)}
                  className={`relative w-12 h-12 shrink-0 overflow-hidden rounded-lg cursor-pointer transition-all duration-200
                    ${i === idx ? "ring-2 ring-accent scale-105" : "opacity-40 hover:opacity-80"}`}>
                  <Image src={img} alt="" fill className="object-cover" sizes="48px" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ── Right: details ── */}
        <div className="lg:w-[45%] flex flex-col overflow-y-auto flex-1 lg:flex-none">

          <div className="p-5 border-b border-border">
            <span className="text-[10px] tracking-widest uppercase text-accent mb-1.5 block">
              {project.category}
            </span>
            <h3 className="text-text font-semibold text-xl leading-snug">{project.title}</h3>
          </div>

          <div className="p-5 border-b border-border">
            <p className="text-muted text-sm leading-relaxed">{project.description}</p>
          </div>

          <div className="p-5 border-b border-border">
            <p className="text-muted text-[10px] tracking-widest uppercase mb-3">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((s) => (
                <span key={s} className="text-xs px-3 py-1 rounded-full bg-surface border border-border text-muted">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {project.links.length > 0 && (
            <div className="p-5">
              <p className="text-muted text-[10px] tracking-widest uppercase mb-3">Links</p>
              <div className="flex flex-col gap-2">
                {project.links.map((link) => {
                  const Icon = Icons[link.icon];
                  return (
                    <a key={link.id} href={link.link} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-surface border border-border
                        text-sm text-muted hover:border-accent hover:text-accent transition-all duration-200">
                      {Icon && <Icon size={14} className="text-accent" />}
                      {link.title}
                    </a>
                  );
                })}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>

    {/* ── Fullscreen lightbox ── */}
    {lightbox && (
      <div className="fixed inset-0 z-[60] bg-black flex items-center justify-center"
        onClick={() => setLightbox(false)}>
        <button onClick={() => setLightbox(false)}
          className="absolute top-4 right-4 text-white/60 hover:text-white bg-white/10 p-2 rounded-full transition-colors z-10">
          <FaTimes size={18} />
        </button>
        <span className="absolute top-4 left-1/2 -translate-x-1/2 text-xs text-white/40">
          {idx + 1} / {gallery.length} — Press Esc to exit
        </span>
        <div className="relative w-full h-full max-w-7xl px-16" onClick={(e) => e.stopPropagation()}>
          <Image src={gallery[idx]} alt={`${project.title} ${idx + 1}`} fill
            className="object-contain" sizes="100vw" />
        </div>
        {gallery.length > 1 && (
          <>
            <button onClick={(e) => { e.stopPropagation(); prevImg(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all">
              <FaChevronLeft size={20} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); nextImg(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all">
              <FaChevronRight size={20} />
            </button>
          </>
        )}
      </div>
    )}
    </>
  );
}
