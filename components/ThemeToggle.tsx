"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => setDark(document.documentElement.classList.contains("dark")), []);

  const toggle = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("kj-theme", next ? "dark" : "light");
    setDark(next);
  };

  return <button onClick={toggle} className="focus-ring flex h-8 w-8 items-center justify-center border border-[var(--line)] text-sm text-[var(--muted)] transition-colors hover:border-[var(--line-strong)] hover:text-[var(--text)]" aria-label={`Switch to ${dark ? "light" : "dark"} theme`} title={`Switch to ${dark ? "light" : "dark"} theme`}>{dark ? "☼" : "◐"}</button>;
}
