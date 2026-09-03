import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative mx-auto w-full max-w-6xl px-5 pb-12 pt-4 md:px-8">
      <div className="flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-end">
        <div>
          <p className="display text-2xl">NTPCO</p>
          <p className="mt-2 max-w-md text-sm text-muted">
            {site.fullName}. {site.slogan}
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-xs uppercase tracking-[0.16em]">
            <a href={site.twitter} className="hover:text-orange" rel="noreferrer" target="_blank">
              {site.twitterHandle}
            </a>
            <a href={`mailto:${site.email}`} className="hover:text-orange">
              {site.email}
            </a>
          </div>
        </div>
        <div className="text-right">
          <div className="barcode ml-auto" aria-hidden />
          <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-muted">
            NTPCO — {site.year}
          </p>
        </div>
      </div>
    </footer>
  );
}
