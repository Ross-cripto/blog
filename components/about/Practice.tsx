import { SectionTitle } from "@/components/ui/SectionTitle";
import { PROFILE } from "@/lib/cv/data";

export function Practice() {
  return (
    <section className="mt-14">
      <SectionTitle eyebrow="Practice" title="What I work on" />
      <div className="prose mt-4">
        {PROFILE.practice.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}
