"use client";

import dynamic from "next/dynamic";
import { motion } from "motion/react";
import { profile } from "@/lib/data";

const ObjectLab = dynamic(() => import("@/components/three/ObjectLab"), { ssr: false });

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-[var(--line)]">
      <div className="section-wrap grid min-h-[auto] items-center gap-10 pb-12 pt-28 sm:pt-32 lg:min-h-[calc(100svh-72px)] lg:grid-cols-[1.08fr_.92fr] lg:gap-14 lg:py-16">
        <div className="min-w-0">
          <div className="mb-6 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[.14em] text-[var(--faint)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            backend / ai / systems
          </div>
          <p className="eyebrow mb-4">Software Development Engineer</p>
          <h1 className="font-display max-w-4xl text-[clamp(3rem,8vw,6.7rem)] font-semibold leading-[.9]">Kushagra <span className="text-[var(--accent)]">Jadiya.</span></h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-7 text-[var(--muted)]"><span className="text-[var(--text)]">{profile.positioning}</span>. {profile.summary}</p>

          <div className="mt-7 flex flex-wrap gap-2.5">
            <a href="#projects" className="primary-button focus-ring border px-4 py-2.5 text-sm font-medium transition-colors">View projects</a>
            <a href={profile.resume} download className="focus-ring border border-[var(--line-strong)] px-4 py-2.5 text-sm text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]">Download resume</a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[.08em] text-[var(--muted)]">
            <a href={profile.github} target="_blank" rel="noreferrer" className="focus-ring hover:text-[var(--accent)]">GitHub ↗</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="focus-ring hover:text-[var(--accent)]">LinkedIn ↗</a>
            <a href={profile.leetcode} target="_blank" rel="noreferrer" className="focus-ring hover:text-[var(--accent)]">LeetCode ↗</a>
            <a href={`mailto:${profile.email}`} className="focus-ring hover:text-[var(--accent)]">Email ↗</a>
          </div>

          <div className="mt-8 grid max-w-2xl grid-cols-2 border-y border-[var(--line)] sm:grid-cols-4">
            {[['300+', 'LeetCode'], ['9.06', 'CGPA'], ['2', 'Internships'], ['7', 'Skill groups']].map(([value, label]) => (
              <div key={label} className="border-r border-[var(--line)] py-3.5 pr-3 last:border-r-0 sm:px-4 first:pl-0">
                <p className="font-display text-2xl font-semibold text-[var(--text)]">{value}</p>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-[.08em] text-[var(--faint)]">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="relative mx-auto w-full max-w-[520px] lg:ml-auto">
          <div className="hero-panel relative h-[340px] overflow-hidden border border-[var(--line)] bg-[var(--surface)] sm:h-[430px]">
            <div className="absolute left-4 top-4 z-10 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[.12em] text-[var(--faint)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-warm)]" /> object lab / TextureMap
            </div>
            <ObjectLab />
          </div>
          <div className="mt-3 flex items-center justify-between px-1 font-mono text-[9px] uppercase tracking-[.1em] text-[var(--faint)]">
            <span>three.js / interaction / texture</span>
            <span>01</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
