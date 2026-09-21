import { experience } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Experience() {
  return (
    <section id="experience" className="section-pad border-b border-[var(--line)]">
      <div className="section-wrap grid gap-12 lg:grid-cols-[.24fr_1fr]">
        <Reveal><div><p className="eyebrow">02 / Experience</p><p className="section-number mt-3">Work & internships</p></div></Reveal>
        <div className="space-y-14">
          {experience.map((item, index) => <Reveal key={item.organization} delay={index * .05}><article className="grid gap-6 border-t border-[var(--line)] pt-7 lg:grid-cols-[.22fr_1fr]">
            <div className="font-mono text-[10px] uppercase tracking-[.08em] text-[var(--faint)]">{item.period}</div>
            <div><div className="flex flex-wrap items-baseline justify-between gap-3"><div><h3 className="font-display text-3xl font-semibold md:text-4xl">{item.role}</h3><p className="mt-1 text-sm text-[var(--muted)]">{item.organization}</p></div><span className="font-mono text-[9px] uppercase tracking-[.08em] text-[var(--faint)]">Internship</span></div>
              <ul className="mt-7 space-y-4">{item.points.map(point => <li key={point} className="flex gap-3 text-sm leading-7 text-[var(--muted)]"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />{point}</li>)}</ul>
              <div className="mt-7 flex flex-wrap gap-2">{item.technologies.map(t => <span key={t} className="border-b border-[var(--line)] px-0 py-1.5 font-mono text-[9px] text-[var(--muted)]">{t}</span>)}</div>
            </div>
          </article></Reveal>)}
        </div>
      </div>
    </section>
  );
}
