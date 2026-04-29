import { SectionTitle } from "@/components/ui/SectionTitle";
import { SKILLS } from "@/lib/cv/data";

export function Skills() {
  return (
    <section className="mt-14">
      <SectionTitle eyebrow="Toolbox" title="Stack & skills" />
      <div className="mt-5 grid sm:grid-cols-2 gap-x-8 gap-y-6">
        {Object.entries(SKILLS).map(([group, items]) => (
          <div key={group}>
            <div className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-sienna mb-2">
              {group}
            </div>
            <ul className="flex flex-wrap gap-2">
              {items.map((s) => (
                <li key={s} className="pill">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
