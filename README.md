# EFx Landing (Vite + React + Tailwind)

## Scripts
- `pnpm i` (or `npm i`, `yarn`)
- `pnpm dev` — start at http://localhost:5173
- `pnpm build` — production build
- `pnpm preview` — preview dist

## Deploy
- **Vercel**: import repo, Framework = Vite. No extra settings needed.
- **Netlify**: Build command `vite build`, Publish directory `dist`.
- **GitHub Pages**: `vite build` + publish `/dist`.

## WASM Demo
Put your `eframe_demo` WebAssembly build into `public/wasm-demo/` and link from the landing (button already exists).
