import { SectionTitle } from "@/components/ui/SectionTitle";
import { EDUCATION } from "@/lib/cv/data";

export function Education() {
  return (
    <section className="mt-14">
      <SectionTitle eyebrow="Schooling" title="Education" />
      <div className="mt-4 flex items-baseline justify-between gap-4 border-t border-rule pt-4">
        <div>
          <div className="font-display text-xl text-ink">
            {EDUCATION.degree}
          </div>
          <div className="text-sm text-ink-faint mt-1">{EDUCATION.school}</div>
        </div>
        <div className="font-mono text-xs uppercase tracking-[0.18em] text-ink-faint">
          {EDUCATION.year}
        </div>
      </div>
    </section>
  );
}
