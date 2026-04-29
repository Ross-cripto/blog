"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV = [
  { href: "/", label: "Posts" },
  { href: "/about", label: "About" },
];

export function MastheadClient({ compact = false }: { compact?: boolean }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="border-b border-rule bg-paper">
      <div className="mx-auto max-w-[1180px] px-6 md:px-10">
        <div className="flex items-center justify-between gap-6 py-4 md:py-5">
          <Link href="/" className="flex items-baseline" aria-label="Home">
            <span
              className="font-display text-[1.7rem] md:text-[2rem] leading-none tracking-[-0.025em] font-light"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
            >
              Rosniel
            </span>
          </Link>

          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {NAV.map((n) => {
              const active = isActive(n.href);
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative px-3 py-2 text-[0.95rem] transition-colors ${
                    active ? "text-ink" : "text-ink-soft hover:text-ink"
                  }`}
                >
                  {n.label}
                  {active && (
                    <span
                      aria-hidden
                      className="absolute left-3 right-3 -bottom-[1px] h-[2px] bg-sienna"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <button
            className="md:hidden btn-ghost p-2 -mr-2"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span className="block w-5 space-y-[5px]">
              <span
                className={`block h-px bg-ink transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`}
              />
              <span
                className={`block h-px bg-ink transition-opacity ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-px bg-ink transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>

        {open && (
          <nav
            className="md:hidden border-t border-rule py-3 fade-in"
            aria-label="Mobile navigation"
          >
            {NAV.map((n) => {
              const active = isActive(n.href);
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className={`block py-3 text-base ${
                    active ? "text-sienna" : "text-ink-soft"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>
        )}
      </div>

      {!compact && pathname === "/" && (
        <div className="border-t border-rule">
          <div className="mx-auto max-w-[1180px] px-6 md:px-10 py-14 md:py-24 text-center">
            <div className="font-mono text-[0.65rem] uppercase tracking-[0.32em] text-ink-faint">
              Notes from a software enthusiast
            </div>
            <h1
              className="mt-4 font-display text-[18vw] md:text-[10rem] leading-[0.85] tracking-[-0.045em] font-light"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
            >
              Rosniel
            </h1>
            <p className="mt-5 mx-auto max-w-xl text-ink-soft text-[1.05rem] leading-relaxed">
              Essays and field notes on building software for the web — written
              slowly, published when ready.
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
