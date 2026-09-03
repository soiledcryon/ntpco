import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function Header() {
  return (
    <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-5 md:px-8">
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/logo.png"
          alt="NTPCO"
          width={44}
          height={44}
          className="rounded-full border border-white/10"
          priority
        />
        <span className="display text-xl leading-none">NTPCO</span>
      </Link>
      <nav className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted md:gap-5">
        <Link href="/#products" className="hover:text-ink">
          Products
        </Link>
        <Link href={site.linksPath} className="hover:text-ink">
          Links
        </Link>
        <a href={site.twitter} className="hover:text-ink" rel="noreferrer" target="_blank">
          Twitter
        </a>
        <a href={`mailto:${site.email}`} className="hidden hover:text-ink sm:inline">
          Contact
        </a>
      </nav>
    </header>
  );
}
