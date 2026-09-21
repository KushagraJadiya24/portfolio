"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";
import { ThemeToggle } from "@/components/ThemeToggle";

const links = [["About", "about"], ["Experience", "experience"], ["Projects", "projects"], ["Stack", "stack"], ["Contact", "contact"]] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "px-2 pt-2 sm:px-3 sm:pt-3" : "px-0 pt-0"}`}>
      <nav className={`section-wrap flex items-center justify-between py-4 transition-all duration-300 ${scrolled ? "border border-[var(--line)] bg-[color:var(--surface)]/94 px-3 shadow-sm backdrop-blur-md sm:px-4" : "border-b border-[var(--line)]"}`} aria-label="Primary">
        <a href="#home" className="focus-ring font-mono text-xs tracking-tight">KJ<span className="text-[var(--accent)]">/</span>26</a>
        <div className="hidden items-center gap-6 md:flex">
          {links.map(([label, id]) => <a key={id} href={`#${id}`} className="focus-ring text-xs text-[var(--muted)] transition-colors hover:text-[var(--text)]">{label}</a>)}
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href={profile.resume} download className="focus-ring hidden border border-[var(--line)] px-4 py-2 font-mono text-[10px] uppercase tracking-[.1em] text-[var(--muted)] transition-colors hover:border-[var(--line-strong)] hover:text-[var(--text)] md:block">Resume ↘</a>
          <button aria-label={open ? "Close menu" : "Open menu"} className="focus-ring border border-[var(--line)] px-3 py-2 text-sm md:hidden" onClick={() => setOpen(v => !v)}>{open ? "×" : "≡"}</button>
        </div>
      </nav>
      {open && <div className="section-wrap border-x border-b border-[var(--line)] bg-[var(--surface)] px-5 py-5 md:hidden"><div className="flex flex-col gap-4">{links.map(([label, id]) => <a key={id} href={`#${id}`} className="focus-ring font-mono text-xs uppercase tracking-[.1em] text-[var(--muted)]" onClick={() => setOpen(false)}>{label}</a>)}<a href={profile.resume} download className="focus-ring font-mono text-xs uppercase tracking-[.1em] text-[var(--accent)]">Download resume ↘</a></div></div>}
    </header>
  );
}
