import { profile } from "@/lib/data";

export function Footer() {
  return <footer className="border-t border-[var(--line)] py-6"><div className="section-wrap flex flex-col gap-3 text-xs sm:flex-row sm:items-center sm:justify-between"><div><p className="font-medium">{profile.name}</p><p className="mt-1 font-mono text-[9px] uppercase tracking-[.1em] text-[var(--faint)]">{profile.title}</p></div><div className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-[9px] uppercase tracking-[.1em] text-[var(--faint)]"><a className="hover:text-[var(--text)]" href={profile.github} target="_blank" rel="noreferrer">GitHub</a><a className="hover:text-[var(--text)]" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a className="hover:text-[var(--text)]" href={profile.leetcode} target="_blank" rel="noreferrer">LeetCode</a><a className="hover:text-[var(--text)]" href={`mailto:${profile.email}`}>Email</a><span>© 2026</span></div></div></footer>;
}
