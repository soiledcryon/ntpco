export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  href?: string;
  downloadHref?: string;
  downloadLabel?: string;
  kind: "app" | "web" | "experiment";
  status: "live" | "lab";
  platforms: string[];
  sticker: string;
  onLinks?: boolean;
};

export const products: Product[] = [
  {
    slug: "shipmate",
    name: "Shipmate",
    tagline: "The daily pulse of your apps",
    description:
      "Sales, reviews, and App Store status — without disappearing into ASC. A glance for people who ship, not another dashboard.",
    href: "https://shipmate.tools",
    downloadHref: "https://apps.apple.com/app/id6798026532",
    downloadLabel: "Mac App Store",
    kind: "app",
    status: "live",
    platforms: ["macOS"],
    sticker: "SHIP IT",
    onLinks: true,
  },
  {
    slug: "winnow",
    name: "Winnow",
    tagline: "Free up iPhone storage",
    description:
      "Duplicates, heavy videos, and old screenshots. All on-device, nothing uploaded. You decide what goes.",
    href: "https://winnow.mobile",
    downloadHref: "https://apps.apple.com/app/id6790587641",
    downloadLabel: "App Store",
    kind: "app",
    status: "live",
    platforms: ["iOS"],
    sticker: "ON-DEVICE",
    onLinks: true,
  },
  {
    slug: "till",
    name: "Till",
    tagline: "A countdown for two",
    description:
      "Count the days together. Shared, simple, no feed. The date that matters, on both phones.",
    href: "https://till.mobile",
    downloadHref: "https://apps.apple.com/app/id6789612467",
    downloadLabel: "App Store",
    kind: "app",
    status: "live",
    platforms: ["iOS"],
    sticker: "FOR TWO",
    onLinks: true,
  },
  {
    slug: "todoops",
    name: "ToDoops",
    tagline: "Tasks, habits, and friends",
    description:
      "A social to-do list. Finish stuff, react on a friends feed, climb the board together.",
    href: "https://todoops.app",
    downloadHref: "https://apps.apple.com/app/id6759289568",
    downloadLabel: "App Store",
    kind: "app",
    status: "live",
    platforms: ["iOS", "Web"],
    sticker: "SOCIAL",
    onLinks: true,
  },
  {
    slug: "party-guess",
    name: "Party Guess!",
    tagline: "Tilt-to-guess party game",
    description:
      "Heads-up charades for game night. 70+ decks, offline, ad-free, seven languages. Phone on the forehead. Friends shout.",
    href: "https://partyguess.com",
    downloadHref: "https://apps.apple.com/us/app/party-guess/id6753732614",
    downloadLabel: "App Store",
    kind: "app",
    status: "live",
    platforms: ["iOS"],
    sticker: "PARTY",
    onLinks: true,
  },
  {
    slug: "emquemvoto",
    name: "Em Quem Voto",
    tagline: "Election guide, no noise",
    description:
      "Candidates, proposals, and context for Brazilian elections — so the feed does not decide for you.",
    href: "https://emquemvoto.com.br",
    downloadHref: "https://apps.apple.com/br/app/em-quem-voto/id6804719024",
    downloadLabel: "App Store",
    kind: "web",
    status: "live",
    platforms: ["iOS", "Web"],
    sticker: "BR",
    onLinks: true,
  },
  {
    slug: "revelo",
    name: "Revelo",
    tagline: "Live collective photo album",
    description:
      "Guests join by QR, send photos on the spot, and the host curates the album in real time.",
    href: "https://revelo.photos",
    kind: "app",
    status: "lab",
    platforms: ["iOS", "Web"],
    sticker: "WIP",
  },
  {
    slug: "snaplink",
    name: "SnapLink",
    tagline: "Links, bio, and analytics",
    description:
      "Shorten, group into a bio page, and measure the click. A link that actually works.",
    href: "https://snaplink.my",
    kind: "web",
    status: "live",
    platforms: ["Web"],
    sticker: "BIO",
    onLinks: true,
  },
  {
    slug: "boldly",
    name: "Boldly",
    tagline: "One challenge, every day",
    description:
      "A daily push outside your comfort zone — Adventure, Social, Creative, and more. Small steps, 365 days.",
    href: "https://boldlynow.app",
    kind: "app",
    status: "live",
    platforms: ["iOS", "Web"],
    sticker: "DAILY",
    onLinks: true,
  },
  {
    slug: "legistrack",
    name: "Legistrack",
    tagline: "Digital chamber for city halls",
    description:
      "Plenary, bills, and a public transparency portal for Brazilian city councils — plus citizen-facing apps.",
    href: "https://legistrack.app.br",
    kind: "web",
    status: "live",
    platforms: ["Web", "iOS", "Android"],
    sticker: "GOV",
    onLinks: true,
  },
  {
    slug: "bidwall",
    name: "Bidwall",
    tagline: "Outbid everyone. Own the wall.",
    description:
      "An experimental bidding wall. Highest bidder gets the biggest space. Everyone else shrinks.",
    href: "https://bidwall.space",
    kind: "experiment",
    status: "live",
    platforms: ["Web"],
    sticker: "LAB",
    onLinks: true,
  },
  {
    slug: "contratolivre",
    name: "ContratoLivre",
    tagline: "Contracts for Brazilian freelancers",
    description:
      "AI-guided contracts, PDF, signature, and payment reminders on email and WhatsApp.",
    kind: "web",
    status: "lab",
    platforms: ["Web"],
    sticker: "WIP",
  },
  {
    slug: "chego",
    name: "Chego Delivery",
    tagline: "Local food delivery stack",
    description:
      "Customer apps, merchant panel, courier app, and admin. An iFood-shaped ecosystem, built from scratch.",
    kind: "app",
    status: "lab",
    platforms: ["iOS", "Android", "Web"],
    sticker: "WIP",
  },
  {
    slug: "sinais",
    name: "Sinais",
    tagline: "On-device health insights",
    description:
      "HealthKit plus on-device models for sleep, mood, and personal correlations. Privacy first.",
    kind: "app",
    status: "lab",
    platforms: ["iOS"],
    sticker: "WIP",
  },
];

export const focusAreas = [
  "Apps",
  "Experiments",
  "Automation",
  "AI stuff",
] as const;

export const liveProducts = products.filter((product) => product.status === "live");
export const labProducts = products.filter((product) => product.status === "lab");
export const linktreeProducts = products.filter((product) => product.onLinks);

export function productAction(product: Product) {
  if (product.downloadHref) {
    return {
      href: product.downloadHref,
      label: product.downloadLabel ?? "Download",
    };
  }
  return {
    href: product.href,
    label: "Open site",
  };
}
