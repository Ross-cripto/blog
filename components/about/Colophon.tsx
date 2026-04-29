import { SectionTitle } from "@/components/ui/SectionTitle";

export function Colophon() {
  return (
    <section className="mt-14">
      <SectionTitle eyebrow="Colophon" title="About this site" />
      <div className="prose mt-4">
        <p>
          Built with Next.js. Posts are plain Markdown files in the repository
          — no database, no admin panel, no login. To publish I add a file and
          push to git. No third-party platform, no analytics tracking you. Type
          set in <em>Fraunces</em>, <em>Newsreader</em>, and{" "}
          <em>JetBrains Mono</em>.
        </p>
      </div>
    </section>
  );
}
