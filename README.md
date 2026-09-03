# NTPCO — ntpco.tech

**No Tengo Plata Company** studio site. Products, downloads, and the one Twitter link.

- Home: `/`
- Linktree: [`/links`](https://ntpco.tech/links) (`/go` and `/linktree` redirect here)

## Local

```bash
npm install
npm run dev
```

Health: [http://localhost:3000/api/health](http://localhost:3000/api/health)

## Catalog

Products live in `src/lib/products.ts`. Contact and Twitter in `src/lib/site.ts`.

## Deploy

Dockerfile, port `3000`, health `/api/health`. Coolify on the Hostinger VPS.

DNS (Namecheap):

| Type | Host | Value |
|------|------|--------|
| A | `@` | `2.25.128.4` |
| A | `www` | `2.25.128.4` |
