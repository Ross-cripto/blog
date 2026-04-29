export function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-ink-faint">
        {label}
      </dt>
      <dd className="mt-1 text-ink font-display text-lg tracking-[-0.01em]">
        {value}
      </dd>
    </div>
  );
}
