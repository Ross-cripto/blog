import { Fact } from "@/components/ui/Fact";
import { PROFILE } from "@/lib/cv/data";

export function Hero() {
  return (
    <header className="mt-8">
      <div className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-ink-faint">
        About
      </div>
      <h1
        className="mt-2 font-display text-[2.6rem] md:text-[3.6rem] leading-[1] tracking-[-0.025em] font-light"
        style={{ fontVariationSettings: '"opsz" 144' }}
      >
        {PROFILE.greeting}{" "}
        <span className="font-display-italic text-sienna">{PROFILE.name}</span>.
      </h1>
      <p className="mt-5 text-xl text-ink-soft leading-relaxed">
        {PROFILE.intro}
      </p>

      <dl className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-5 border-y border-rule py-6">
        {PROFILE.facts.map((f) => (
          <Fact key={f.label} label={f.label} value={f.value} />
        ))}
      </dl>
    </header>
  );
}
