export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  href: string;
  downloadHref?: string;
  downloadLabel?: string;
  kind: "app" | "web" | "experiment";
  platforms: string[];
  sticker: string;
};

export const products: Product[] = [
  {
    slug: "shipmate",
    name: "Shipmate",
    tagline: "O pulso diário das suas apps",
    description:
      "Vendas, reviews e status da App Store — sem desaparecer no ASC. Para quem publica e precisa de um glance, não de mais um dashboard.",
    href: "https://shipmate.tools",
    downloadHref: "https://apps.apple.com/app/id6798026532",
    downloadLabel: "Mac App Store",
    kind: "app",
    platforms: ["macOS"],
    sticker: "SHIP IT",
  },
  {
    slug: "winnow",
    name: "Winnow",
    tagline: "Libera espaço no iPhone",
    description:
      "Duplicados, vídeos pesados e screenshots antigos. Tudo no dispositivo, nada enviado para a nuvem. Você decide o que some.",
    href: "https://winnow.mobile",
    downloadHref: "https://apps.apple.com/app/id6790587641",
    downloadLabel: "App Store",
    kind: "app",
    platforms: ["iOS"],
    sticker: "ON-DEVICE",
  },
  {
    slug: "till",
    name: "Till",
    tagline: "Um countdown para dois",
    description:
      "Contem os dias juntos. Simples, compartilhado, sem feed nem ruído. A data que importa, na tela dos dois.",
    href: "https://till.mobile",
    downloadHref: "https://apps.apple.com/app/id6789612467",
    downloadLabel: "App Store",
    kind: "app",
    platforms: ["iOS"],
    sticker: "FOR TWO",
  },
  {
    slug: "revelo",
    name: "Revelo",
    tagline: "Álbum coletivo ao vivo",
    description:
      "Convidados entram por QR, mandam fotos na hora, e o anfitrião cura o álbum em tempo real. A festa fica no lugar certo.",
    href: "https://revelo.photos",
    kind: "app",
    platforms: ["iOS", "Web"],
    sticker: "LIVE",
  },
  {
    slug: "snaplink",
    name: "SnapLink",
    tagline: "Links, bio e analytics",
    description:
      "Encurta, agrupa numa bio page e mede o clique. Feito no Brasil, para quem precisa de um link que trabalha.",
    href: "https://snaplink.my",
    kind: "web",
    platforms: ["Web"],
    sticker: "BIO",
  },
  {
    slug: "emquemvoto",
    name: "Em Quem Voto",
    tagline: "Guia eleitoral sem barulho",
    description:
      "Informação para decidir. Candidatos, propostas e contexto — em vez do feed gritando por você.",
    href: "https://emquemvoto.com.br",
    kind: "web",
    platforms: ["Web"],
    sticker: "BR",
  },
];

export const focusAreas = [
  "Apps",
  "Experiments",
  "Automation",
  "AI stuff",
] as const;
