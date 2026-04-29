export function Footer() {
  return (
    <footer className="border-t border-rule mt-32">
      <div className="mx-auto max-w-[1180px] px-6 md:px-10 py-10 flex items-baseline justify-between gap-6 flex-wrap">
        <div className="text-sm">
          <div className="font-display text-xl text-ink leading-none">
            Rosniel
          </div>
          <div className="mt-1 text-ink-faint">
            Senior fullstack developer · Writing since 2026.
          </div>
        </div>
        <div className="text-xs text-ink-faint font-mono uppercase tracking-[0.18em]">
          © {new Date().getFullYear()} Rosniel
        </div>
      </div>
    </footer>
  );
}
