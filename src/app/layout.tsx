import type { Metadata } from "next";
import { Archivo_Black, JetBrains_Mono, Permanent_Marker } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const display = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const body = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-body",
});

const mark = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mark",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.fullName}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.fullName, url: site.url }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.slogan}`,
    description: site.description,
    images: [{ url: "/og-cover.png", width: 1500, height: 500, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    site: site.twitterHandle,
    title: `${site.name} — ${site.slogan}`,
    description: site.description,
    images: ["/og-cover.png"],
  },
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    apple: [{ url: "/logo.png" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mark.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
