"use client";

import { useEffect } from "react";

export function ReadingProgress() {
  useEffect(() => {
    const update = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      const pct = total > 0 ? Math.min(100, (window.scrollY / total) * 100) : 0;
      document.documentElement.style.setProperty("--progress", `${pct}%`);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
  return <div className="reading-progress" aria-hidden />;
}
