export function SectionTitle({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-sienna">
        {eyebrow}
      </span>
      <span className="h-px flex-1 bg-rule" aria-hidden />
      <h2 className="font-display text-2xl tracking-[-0.015em] text-ink">
        {title}
      </h2>
    </div>
  );
}
