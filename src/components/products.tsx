import Link from "next/link";
import { labProducts, liveProducts } from "@/lib/products";
import { site } from "@/lib/site";

export function Products() {
  return (
    <>
      <section id="products" className="relative mx-auto w-full max-w-6xl px-5 py-16 md:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-orange">Catalog</p>
            <h2 className="display mt-2 text-4xl sm:text-5xl">Products</h2>
          </div>
          <p className="max-w-sm text-sm text-muted">
            Open the site or download. Want the fast version?{" "}
            <Link href={site.linksPath} className="text-orange hover:underline">
              ntpco.tech/links
            </Link>
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {liveProducts.map((product, index) => (
            <article
              key={product.slug}
              className={`card p-6 ${index % 2 === 0 ? "-rotate-1" : "rotate-1"}`}
            >
              <div className="relative z-10">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted">
                    {product.platforms.join(" · ")}
                  </p>
                  <span className="sticker text-[10px]">{product.sticker}</span>
                </div>
                <h3 className="display text-3xl">{product.name}</h3>
                <p className="mark mt-2 text-lg text-orange">{product.tagline}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {product.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {product.downloadHref ? (
                    <a
                      href={product.downloadHref}
                      className="sticker px-4 py-2 text-[11px]"
                      rel="noreferrer"
                      target="_blank"
                    >
                      {product.downloadLabel ?? "Download"}
                    </a>
                  ) : null}
                  {product.href ? (
                    <a
                      href={product.href}
                      className={`sticker px-4 py-2 text-[11px] ${product.downloadHref ? "sticker-ghost" : ""}`}
                      rel="noreferrer"
                      target="_blank"
                    >
                      Open site
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="lab" className="relative mx-auto w-full max-w-6xl px-5 pb-16 md:px-8">
        <div className="mb-8">
          <p className="text-[11px] uppercase tracking-[0.22em] text-orange">In the lab</p>
          <h2 className="display mt-2 text-4xl sm:text-5xl">Still building</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {labProducts.map((product) => (
            <article key={product.slug} className="card p-5">
              <div className="relative z-10">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted">
                    {product.platforms.join(" · ")}
                  </p>
                  <span className="sticker sticker-gray text-[10px]">{product.sticker}</span>
                </div>
                <h3 className="display text-2xl">{product.name}</h3>
                <p className="mark mt-2 text-base text-orange">{product.tagline}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {product.description}
                </p>
                {product.href ? (
                  <a
                    href={product.href}
                    className="sticker sticker-ghost mt-4 px-4 py-2 text-[11px]"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Open site
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
