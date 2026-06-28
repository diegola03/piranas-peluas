import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "../data/site";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "border-b border-gold/15 bg-obsidian/85 backdrop-blur"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-wide text-bone"
        >
          <span className="gold-foil">Pirañas Peluas</span>
        </a>

        <ul className="hidden gap-8 font-sans text-sm text-bone/80 md:flex">
          {site.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="transition-colors hover:text-gold"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label="Menú"
          className="text-gold md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-gold/15 bg-obsidian/95 px-5 py-3 font-sans text-bone/85 md:hidden">
          {site.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block py-2 transition-colors hover:text-gold"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
