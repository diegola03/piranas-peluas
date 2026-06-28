import { site } from "../data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gold/15 px-5 py-12 text-center">
      <img
        src="/assets/piranha-icon.jpg"
        alt=""
        className="mx-auto mb-4 h-12 w-12 rounded-full border border-gold/30 object-cover"
      />
      <p className="font-display text-2xl">
        <span className="gold-foil">{site.name}</span>
      </p>
      <p className="mt-2 font-sans text-xs text-bone/40">{site.footerLine}</p>
      <p className="mt-4 font-sans text-xs text-bone/30">
        © {site.foundedYear}–{year} · El cardumen más peluo de la isla
      </p>
    </footer>
  );
}
