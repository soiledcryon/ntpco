import Image from "next/image";
import Link from "next/link";
import { focusAreas } from "@/lib/products";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-5 pb-8 pt-6 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:pt-10">
      <div>
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <span className="sticker text-[11px]">Indie builder</span>
          <span className="sticker sticker-ghost text-[11px]">Ship it</span>
        </div>
        <div className="flex items-end gap-3">
          <Image
            src="/logo.png"
            alt=""
            width={92}
            height={92}
            className="hidden rounded-full border border-white/10 sm:block"
          />
          <h1 className="display text-[18vw] leading-[0.8] sm:text-8xl md:text-[7.4rem]">
            NTPCO
          </h1>
        </div>
        <p className="tape mt-4 text-[11px] font-extrabold tracking-[0.18em] sm:text-sm">
          {site.fullName}
        </p>
        <p className="mark underline-brush mt-6 text-2xl text-orange sm:text-3xl">
          {site.slogan}
        </p>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
          One place for the products, the downloads, and the Twitter link.
          No plata. Things in the air anyway.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/#products" className="sticker px-5 py-3 text-sm">
            See products
          </Link>
          <Link href={site.linksPath} className="sticker sticker-ghost px-5 py-3 text-sm">
            Get the apps
          </Link>
        </div>
      </div>

      <aside className="space-y-4">
        <div className="terminal p-4 font-mono text-sm text-ink/90">
          <div className="mb-3 flex items-center justify-between">
            <div className="terminal-dots">
              <span />
              <span />
              <span />
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted">
              ntpco.sh
            </span>
          </div>
          <p className="text-orange">$ idea</p>
          <p>$ code</p>
          <p>$ coffee</p>
          <p>$ repeat</p>
          <p className="text-muted">
            {">"}
            <span className="ml-1 animate-pulse">_</span>
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-2 text-[11px] uppercase tracking-[0.18em] text-ink/80">
          {focusAreas.map((area) => (
            <li key={area} className="border border-white/10 px-3 py-2">
              {area}
            </li>
          ))}
        </ul>
        <p className="sticker sticker-gray rotate-2 text-[11px]">Built different</p>
      </aside>
    </section>
  );
}
