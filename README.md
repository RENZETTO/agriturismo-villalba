# Agriturismo Villalba

Sito vetrina per [Agriturismo Villalba](https://agriturismovillalba.it) — San Marco Villalba, Arezzo.

## Stack

- [Astro](https://astro.build) (sito statico)
- Deploy su [Netlify](https://netlify.com)
- Dominio su GoDaddy

## Sviluppo locale

```bash
cd villalba
npm install
npm run dev
```

Apri http://localhost:4321

## Build

```bash
npm run build
```

Output in `dist/`

## Deploy su Netlify

1. Collega la cartella a un repo Git o fai drag & drop di `dist/`
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Aggiungi dominio `agriturismovillalba.it` in Domain settings
5. Su GoDaddy, punta DNS a Netlify (A record `75.2.60.5` + CNAME `www`)

## Foto

Sostituire le immagini placeholder in `src/data/images.ts` con foto reali in `public/images/`.
