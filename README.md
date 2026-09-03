# NTPCO — ntpco.tech

Site da **No Tengo Plata Company**. Um sítio só para produtos, downloads e o link do Twitter.

## Local

```bash
npm install
npm run dev
```

Health: [http://localhost:3000/api/health](http://localhost:3000/api/health)

## Produtos

O catálogo vive em `src/lib/products.ts`. Contactos e Twitter em `src/lib/site.ts`.

## Deploy

Dockerfile, porta `3000`, health `/api/health`. Coolify no VPS Hostinger.

DNS (Namecheap):

| Tipo | Host | Valor |
|------|------|--------|
| A | `@` | `2.25.128.4` |
| A | `www` | `2.25.128.4` |
