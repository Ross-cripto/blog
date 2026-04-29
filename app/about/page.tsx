import { Masthead } from "@/components/Masthead";
import { Footer } from "@/components/Footer";
import { BackLink } from "@/components/ui/BackLink";
import { Hero } from "@/components/about/Hero";
import { Practice } from "@/components/about/Practice";
import { Skills } from "@/components/about/Skills";
import { Timeline } from "@/components/about/Timeline";
import { Education } from "@/components/about/Education";
import { Colophon } from "@/components/about/Colophon";
import { Contact } from "@/components/about/Contact";

export const metadata = {
  title: "About — Rosniel",
  description:
    "Rosniel Allesta — senior fullstack developer (4+ years). Python/Django, React/TypeScript, AWS & Azure.",
};

export default function AboutPage() {
  return (
    <>
      <Masthead compact />
      <main className="mx-auto max-w-[820px] px-6 md:px-10 pt-10 md:pt-16">
        <BackLink />
        <Hero />
        <Practice />
        <Skills />
        <Timeline />
        <Education />
        <Colophon />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
