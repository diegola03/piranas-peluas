import { useState } from "react";
import type { Shot } from "../data/gallery";
import { gallery } from "../data/gallery";
import SectionTitle from "./SectionTitle";
import Lightbox from "./Lightbox";

export default function Gallery() {
  const [active, setActive] = useState<Shot | null>(null);

  return (
    <section id="galeria" className="mx-auto max-w-6xl px-5 py-24">
      <SectionTitle kicker="El archivo" title="Galería" />

      <div className="columns-2 gap-4 sm:columns-3 [&>*]:mb-4">
        {gallery.map((shot) => (
          <button
            key={shot.id}
            type="button"
            onClick={() => setActive(shot)}
            className="group relative block w-full break-inside-avoid overflow-hidden rounded-lg border border-gold/15 bg-coal/50 transition-all duration-300 hover:border-gold/45 hover:shadow-gold-glow"
          >
            <img
              src={shot.src}
              alt={shot.caption}
              loading="lazy"
              className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
            <span className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-obsidian/90 to-transparent p-3 text-left font-sans text-xs text-bone/90 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              {shot.caption}
            </span>
          </button>
        ))}
      </div>

      <Lightbox shot={active} onClose={() => setActive(null)} />
    </section>
  );
}
