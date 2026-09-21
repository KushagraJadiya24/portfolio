"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { projects } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Projects() {
  const [selected, setSelected] = useState<(typeof projects)[number]["id"]>(
    projects[0].id,
  );
  const project = projects.find((item) => item.id === selected) ?? projects[0];

  return (
    <section
      id="projects"
      className="section-pad border-b border-[var(--line)]"
    >
      <div className="section-wrap grid gap-12 lg:grid-cols-[.24fr_1fr]">
        <Reveal>
          <div>
            <p className="eyebrow">03 / Projects</p>
            <p className="section-number mt-3">Selected builds</p>
          </div>
        </Reveal>
        <div>
          <Reveal>
            <div className="mb-8 max-w-2xl">
              <h2 className="font-display text-4xl font-semibold leading-[.95] md:text-6xl">
                Projects with a{" "}
                <span className="text-[var(--muted)]">reason to exist.</span>
              </h2>
              <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
                From backend infrastructure and AI applications to ML
                experiments and browser-based 3D work.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-7 lg:grid-cols-[.72fr_1.28fr]">
            <div className="space-y-1">
              {projects.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelected(item.id)}
                  className={`focus-ring flex w-full items-center gap-4 border-b border-[var(--line)] px-2 py-4 text-left transition-colors ${selected === item.id ? "text-[var(--text)]" : "text-[var(--muted)] hover:text-[var(--text)]"}`}
                >
                  <span className="font-mono text-[9px] text-[var(--faint)]">
                    {item.index}
                  </span>
                  <span className="text-sm font-medium">{item.name}</span>
                  <span className="ml-auto text-[var(--faint)]">
                    {selected === item.id ? "↗" : ""}
                  </span>
                </button>
              ))}
            </div>
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="subtle-card min-w-0 p-5 sm:p-6 md:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="eyebrow">{project.eyebrow}</p>
                  <h3 className="font-display mt-3 text-4xl font-semibold md:text-5xl">
                    {project.name}
                  </h3>
                </div>
                <span className="font-mono text-[9px] text-[var(--faint)]">
                  {project.index} / 07
                </span>
              </div>
              <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--muted)]">
                {project.description}
              </p>
              <div className="mt-7 grid gap-px border-y border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
                {project.details.map(([label, value]) => (
                  <div key={label} className="bg-[var(--surface)] p-4">
                    <p className="mono-label">{label}</p>
                    <p className="mt-2 text-sm">{value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <span
                    key={t}
                    className="border-b border-[var(--line)] px-0 py-1.5 font-mono text-[9px] text-[var(--muted)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-5 border-t border-[var(--line)] pt-5 font-mono text-[9px] uppercase tracking-[.08em]">
                {project.metrics.map((metric) => (
                  <span key={metric} className="text-[var(--faint)]">
                    {metric}
                  </span>
                ))}
              </div>
              {(project.links.live ||
                project.links.github ||
                project.links.docs) && (
                <div className="mt-5 flex flex-wrap gap-5">
                  {project.links.live && (
                    <a
                      className="focus-ring text-xs text-[var(--accent)] hover:text-[var(--text)]"
                      href={project.links.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live demo ↗
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      className="focus-ring text-xs text-[var(--accent)] hover:text-[var(--text)]"
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub ↗
                    </a>
                  )}
                  {project.links.docs && (
                    <a
                      className="focus-ring text-xs text-[var(--accent)] hover:text-[var(--text)]"
                      href={project.links.docs}
                      target="_blank"
                      rel="noreferrer"
                    >
                      API docs ↗
                    </a>
                  )}
                </div>
              )}
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
}
