import { SectionTitle } from "@/components/ui/SectionTitle";
import { TIMELINE, type TimelineEntry } from "@/lib/cv/data";
import { renderInlineBold } from "@/lib/markdown";

export function Timeline() {
  return (
    <section className="mt-14">
      <SectionTitle eyebrow="Career" title="Experience" />
      <ol className="mt-6 relative border-l border-rule pl-6 space-y-10">
        {TIMELINE.map((job) => (
          <TimelineItem key={`${job.company}-${job.period}`} job={job} />
        ))}
      </ol>
    </section>
  );
}

function TimelineItem({ job }: { job: TimelineEntry }) {
  return (
    <li className="relative">
      <span
        aria-hidden
        className="absolute -left-[31px] top-2 w-3 h-3 rounded-full bg-paper border-2 border-sienna"
      />
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <h3 className="font-display text-2xl leading-tight tracking-[-0.012em] text-ink">
          {job.role} <span className="text-ink-soft">· {job.company}</span>
        </h3>
        <div className="font-mono text-xs uppercase tracking-[0.18em] text-ink-faint">
          {job.period}
        </div>
      </div>
      <div className="mt-1 text-sm text-ink-faint">{job.location}</div>
      <ul className="mt-3 space-y-2 text-ink-soft text-[1rem] leading-relaxed">
        {job.bullets.map((b, i) => (
          <li key={i} className="pl-4 relative">
            <span
              aria-hidden
              className="absolute left-0 top-[0.65em] w-2 h-px bg-sienna"
            />
            <span>{renderInlineBold(b)}</span>
          </li>
        ))}
      </ul>
    </li>
  );
}
