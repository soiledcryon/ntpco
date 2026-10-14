import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About NTP Co.",
  description:
    "NTP Co. is operated by BRENNER SOLUCOES TECNOLOGICAS LTDA (CNPJ 38.265.505/0001-50).",
  alternates: { canonical: `${site.url}/about` },
};

export default function AboutPage() {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <main className="relative mx-auto w-full max-w-3xl px-5 py-12 md:px-8">
        <p className="text-[11px] uppercase tracking-[0.22em] text-orange">Company</p>
        <h1 className="display mt-2 text-4xl sm:text-5xl">About NTP Co.</h1>
        <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base">
          NTP Co. builds mobile apps and games, including Party Guess!. NTP Co. is
          operated by BRENNER SOLUCOES TECNOLOGICAS LTDA, a company registered in
          Brazil (CNPJ 38.265.505/0001-50).
        </p>
        <p className="mt-8 text-sm leading-relaxed">
          <span className="uppercase tracking-[0.16em] text-muted">Contact</span>
          <br />
          <a href={`mailto:${site.legalEmail}`} className="text-ink hover:text-orange">
            {site.legalEmail}
          </a>
        </p>
        <div className="mt-8">
          <p className="text-sm uppercase tracking-[0.16em] text-muted">Our apps</p>
          <ul className="mt-3 space-y-2 text-sm sm:text-base">
            <li>
              Party Guess!{" "}
              <a
                href="https://apps.apple.com/app/id6753732614"
                className="text-orange hover:underline"
                rel="noreferrer"
                target="_blank"
              >
                App Store
              </a>
              {" · "}
              <a
                href="https://partyguess.com"
                className="text-orange hover:underline"
                rel="noreferrer"
                target="_blank"
              >
                partyguess.com
              </a>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
