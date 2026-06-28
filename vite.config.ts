import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from a GitHub Pages project subpath (https://diegola03.github.io/piranas-peluas/).
// `base` makes built asset URLs resolve under that subpath. Override at build time with
// `--base=/` for a root/custom-domain deploy (Cloudflare Pages, Netlify, custom domain).
// https://vite.dev/config/
export default defineConfig({
  base: '/piranas-peluas/',
  plugins: [react()],
})
