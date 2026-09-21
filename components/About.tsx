import { profile } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="section-pad border-b border-[var(--line)]">
      <div className="section-wrap grid gap-10 lg:grid-cols-[.24fr_1fr]">
        <Reveal><div><p className="eyebrow">01 / About</p><p className="section-number mt-3">A practical builder</p></div></Reveal>
        <div>
          <Reveal><div className="grid gap-10 lg:grid-cols-[1.15fr_.65fr]">
            <div><h2 className="font-display text-4xl font-semibold leading-[.95] md:text-6xl">Backend systems, AI workflows, <span className="text-[var(--muted)]">and the details between them.</span></h2><p className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)]">I work across APIs, authentication, databases, deployment infrastructure and AI-integrated applications — with a preference for systems that are understandable, useful and built to run. I enjoy taking a product from a rough idea to a working system: shaping the backend, connecting the data, tightening the security and making the final experience feel deliberate. My work sits at the intersection of software engineering and applied AI, where the goal is not to add technology for its own sake, but to build something that solves a real problem and can actually be used.</p></div>
            <div className="border-l border-[var(--line)] pl-5"><p className="mono-label">Education</p><p className="mt-3 text-sm font-medium">{profile.education.institution}</p><p className="mt-2 text-sm leading-6 text-[var(--muted)]">{profile.education.degree}</p><div className="mt-5 font-mono text-[10px] uppercase tracking-[.08em] text-[var(--faint)]">{profile.education.period}<br />{profile.education.result}</div></div>
          </div></Reveal>
        </div>
      </div>
    </section>
  );
}
