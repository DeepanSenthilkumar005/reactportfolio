# frontend

Vite + React + Tailwind. See the root `README.md` for setup.

Copy lives in `src/data/content.js`.

```bash
npm run dev      # dev server
npm run build    # production build to dist/
npm run lint
```

## Images in `public/`

| File | What it is | Status |
| --- | --- | --- |
| `photo.jpg` | Photo of Deepan, 4:5 | in place (formal ID shot, rendered duotone) |
| `dendo-logo.png` | Dendo lockup; the icon is cropped out of it in code | in place |
| `dendo-1/2/3.svg` | Home, tracking, checkout | **stand-in mockups — replace before going live** |
| `favicon.png` | Tab icon | in place |
| `og.png` | Social share card | **needs replacing — must be 1200x630** |

The Dendo screens are illustrative placeholders, not the real app. The real
screenshots are already public on the Play Store and App Store listings — save
three of those as PNGs, then point `feature.shots` in `src/data/content.js` at
them. Showing mockups as the product on a live portfolio would misrepresent it.
