# Gallery assets

| Path | Role |
|------|------|
| `assets/*.jpg` | JPEG fallback previews (~1600px) |
| `assets/webp/*-960.webp` | Small WebP for fast LCP / grid |
| `assets/webp/*.webp` | Full preview WebP (~1600px) |
| `assets/full/*.jpg` | Camera originals — loaded only on zoom |

For long cache headers on GitHub Pages, put the site behind Cloudflare (or Netlify) and use `_headers` / `netlify.toml` in this repo.
