"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { profile } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => { await navigator.clipboard.writeText(profile.email); setCopied(true); window.setTimeout(() => setCopied(false), 1600); };

  return (
    <section id="contact" className="section-pad">
      <div className="section-wrap">
        <Reveal><div className="border-y border-[var(--line)] py-6"><p className="eyebrow">05 / Contact</p></div></Reveal>
        <Reveal delay={.06}><div className="grid gap-12 py-20 lg:grid-cols-[1fr_.48fr] lg:py-24"><div><h2 className="font-display max-w-4xl text-[clamp(2.9rem,8vw,7rem)] font-semibold leading-[.84]">Have a system<br /><span className="text-[var(--muted)]">to build?</span></h2><p className="mt-7 max-w-xl text-base leading-8 text-[var(--muted)]">For work, collaboration or technical conversations, the quickest route is email.</p></div><div className="self-end border-l border-[var(--line)] pl-6"><button onClick={copyEmail} className="focus-ring w-full border-b border-[var(--line)] py-4 text-left"><span className="mono-label">Email</span><span className="mt-2 block break-all text-sm">{profile.email}</span><span className="mt-3 block font-mono text-[9px] uppercase tracking-[.08em] text-[var(--faint)]">{copied ? "Copied to clipboard" : "Click to copy"}</span></button><a href={`tel:${profile.phone.replace(/\s+/g, "")}`} className="block border-b border-[var(--line)] py-4"><span className="mono-label">Phone</span><span className="mt-2 block text-sm">{profile.phone}</span></a><div className="mt-5 flex flex-wrap gap-5 font-mono text-[10px] uppercase tracking-[.08em] text-[var(--muted)]"><a className="focus-ring hover:text-[var(--text)]" href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a><a className="focus-ring hover:text-[var(--text)]" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a className="focus-ring hover:text-[var(--text)]" href={profile.leetcode} target="_blank" rel="noreferrer">LeetCode ↗</a></div><div className="mt-6 grid gap-4 border-t border-[var(--line)] pt-5 sm:grid-cols-2"><div><p className="mono-label">Location</p><p className="mt-2 text-sm leading-6 text-[var(--muted)]">{profile.location}</p></div><div><p className="mono-label">Work authorization</p><p className="mt-2 text-sm leading-6 text-[var(--muted)]">{profile.workAuthorization}</p></div><div className="sm:col-span-2"><p className="mono-label">Languages</p><p className="mt-2 text-sm text-[var(--muted)]">{profile.languages.join(" · ")}</p></div></div><motion.p animate={{ opacity: copied ? 1 : 0 }} className="mt-4 font-mono text-[9px] uppercase tracking-[.1em] text-[var(--accent)]">Email copied</motion.p></div></div></Reveal>
      </div>
    </section>
  );
}
