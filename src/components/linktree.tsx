import Image from "next/image";
import Link from "next/link";
import { linktreeProducts, productAction } from "@/lib/products";
import { site } from "@/lib/site";

export function Linktree() {
  return (
    <div className="mx-auto flex w-full max-w-md flex-col items-center px-5 pb-16 pt-4">
      <Image
        src="/logo.png"
        alt="NTPCO"
        width={88}
        height={88}
        className="rounded-full border border-white/10"
        priority
      />
      <h1 className="display mt-4 text-4xl">NTPCO</h1>
      <p className="tape mt-3 text-[10px] font-extrabold tracking-[0.16em]">
        {site.fullName}
      </p>
      <p className="mark underline-brush mt-5 text-xl text-orange">{site.slogan}</p>
      <p className="mt-4 text-center text-sm text-muted">
        Tap to download. That is the whole point.
      </p>

      <div className="mt-5 flex flex-wrap justify-center gap-3">
        <a
          href={site.twitter}
          className="sticker sticker-ghost px-4 py-2 text-[11px]"
          rel="noreferrer"
          target="_blank"
        >
          {site.twitterHandle}
        </a>
        <Link href="/" className="sticker sticker-gray px-4 py-2 text-[11px]">
          Full site
        </Link>
      </div>

      <ol className="mt-8 flex w-full flex-col gap-3">
        {linktreeProducts.map((product, index) => {
          const action = productAction(product);
          if (!action.href) return null;
          return (
            <li key={product.slug}>
              <a
                href={action.href}
                className={`link-row ${index % 2 === 0 ? "-rotate-1" : "rotate-1"}`}
                rel="noreferrer"
                target="_blank"
              >
                <span className="min-w-0">
                  <span className="display block text-lg leading-none">{product.name}</span>
                  <span className="mt-1 block truncate text-[11px] text-muted">
                    {product.tagline}
                  </span>
                </span>
                <span className="sticker shrink-0 text-[10px]">{action.label}</span>
              </a>
            </li>
          );
        })}
      </ol>

      <div className="mt-10 text-center">
        <div className="barcode mx-auto" aria-hidden />
        <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-muted">
          NTPCO — {site.year}
        </p>
      </div>
    </div>
  );
}
