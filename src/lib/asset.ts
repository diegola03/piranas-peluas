// Resolve a public-asset path against Vite's base URL so images work both locally
// (base "/") and on the GitHub Pages project subpath (base "/piranas-peluas/").
// Store paths in data as "/assets/foo.png"; render them as asset(src).
export const asset = (path: string): string =>
  import.meta.env.BASE_URL + path.replace(/^\/+/, "");
