import { SectionTitle } from "@/components/ui/SectionTitle";
import { CONTACT, type ContactLink as ContactLinkType } from "@/lib/cv/data";

export function Contact() {
  return (
    <section className="mt-14 mb-8 border border-rule p-6 md:p-8">
      <SectionTitle eyebrow="Get in touch" title="Say hello" />
      <div className="mt-5 grid sm:grid-cols-2 gap-4">
        {CONTACT.map((link) => (
          <ContactCard key={link.label} link={link} />
        ))}
      </div>
    </section>
  );
}

function ContactCard({ link }: { link: ContactLinkType }) {
  const externalProps = link.external
    ? { target: "_blank", rel: "noreferrer" }
    : {};
  return (
    <a
      href={link.href}
      {...externalProps}
      className="block border border-rule px-4 py-3 hover:border-sienna group"
    >
      <div className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-ink-faint">
        {link.label}
      </div>
      <div className="mt-1 text-ink group-hover:text-sienna">{link.value}</div>
    </a>
  );
}
