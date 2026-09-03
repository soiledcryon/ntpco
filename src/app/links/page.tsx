import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Linktree } from "@/components/linktree";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Links",
  description: "Download NTPCO apps and open the products. One tap each.",
  alternates: { canonical: `${site.url}${site.linksPath}` },
  openGraph: {
    title: `${site.name} — Links`,
    description: "Download the apps. Open the products. One tap each.",
    url: `${site.url}${site.linksPath}`,
  },
};

export default function LinksPage() {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <main>
        <Linktree />
      </main>
    </div>
  );
}
