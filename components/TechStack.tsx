"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { skillGroups, achievements } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function TechStack() {
  const [active, setActive] = useState<(typeof skillGroups)[number]["id"]>(
    skillGroups[1].id,
  );
  const group =
    skillGroups.find((item) => item.id === active) ?? skillGroups[1];

  return (
    <section id="stack" className="section-pad border-b border-[var(--line)]">
      <div className="section-wrap grid gap-10 lg:grid-cols-[.24fr_1fr]">
        <Reveal>
          <div>
            <p className="eyebrow">04 / Stack</p>
            <p className="section-number mt-3">Tools I actually use</p>
          </div>
        </Reveal>
        <div>
          <Reveal>
            <div className="max-w-3xl">
              <h2 className="font-display text-4xl font-semibold leading-[.95] md:text-6xl">
                A working <span className="text-[var(--muted)]">toolkit.</span>
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--muted)]">
                Grouped by where they fit in the work — from APIs and data to
                interfaces, infrastructure and AI.
              </p>
            </div>
          </Reveal>

          <div className="mt-8 border-y border-[var(--line)] md:grid md:grid-cols-[.35fr_.65fr]">
            <div className="flex overflow-x-auto md:block md:border-r md:border-[var(--line)]">
              {skillGroups.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActive(item.id)}
                  className={`focus-ring flex min-w-max items-center justify-between gap-8 border-r border-[var(--line)] px-4 py-3 text-left text-sm transition-colors last:border-r-0 md:w-full md:border-r-0 md:border-b md:last:border-b-0 ${active === item.id ? "bg-[var(--surface)] text-[var(--text)]" : "text-[var(--muted)] hover:text-[var(--text)]"}`}
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-[9px] text-[var(--faint)]">
                    {String(item.items.length).padStart(2, "0")}
                  </span>
                </button>
              ))}
            </div>
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="min-h-[240px] p-6 md:p-8"
            >
              <div className="flex items-center justify-between">
                <p className="mono-label">{group.label}</p>
                <span className="font-mono text-[9px] text-[var(--faint)]">
                  {group.items.length} items
                </span>
              </div>
              <div className="mt-6 grid gap-x-8 sm:grid-cols-2">
                {group.items.map((item, index) => (
                  <div
                    key={item}
                    className="border-b border-[var(--line)] py-3 text-sm"
                  >
                    <span className="mr-3 font-mono text-[9px] text-[var(--faint)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <Reveal>
            <div className="mt-16">
              <div className="mb-6 flex items-end justify-between border-b border-[var(--line)] pb-4">
                <div>
                  <p className="eyebrow">Signals</p>
                  <p className="mt-2 text-sm text-[var(--muted)]">
                    A few things that are easy to verify.
                  </p>
                </div>
              </div>
              <div className="grid gap-px bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-5">
                {achievements.map((item) => (
                  <article key={item.label} className="bg-[var(--bg)] p-5">
                    <p className="mono-label">{item.label}</p>
                    <h3 className="font-display mt-3 text-2xl font-semibold">
                      {item.value}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                      {item.detail}
                    </p>
                    {"link" in item && item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-block font-mono text-[9px] uppercase tracking-[.08em] text-[var(--accent)] hover:text-[var(--text)]"
                      >
                        View ↗
                      </a>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
