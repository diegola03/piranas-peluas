import { useEffect } from "react";
import { X } from "lucide-react";
import type { Shot } from "../data/gallery";
import { asset } from "../lib/asset";

type Props = {
  shot: Shot | null;
  onClose: () => void;
};

export default function Lightbox({ shot, onClose }: Props) {
  useEffect(() => {
    if (!shot) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [shot, onClose]);

  if (!shot) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-obsidian/92 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Cerrar"
        className="absolute right-5 top-5 text-gold/80 transition-colors hover:text-gold"
        onClick={onClose}
      >
        <X size={32} />
      </button>
      <figure
        className="max-h-[88vh] max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={asset(shot.src)}
          alt={shot.caption}
          className="max-h-[80vh] w-auto rounded-lg border border-gold/20 object-contain"
        />
        <figcaption className="mt-3 text-center font-display text-lg italic text-bone/80">
          {shot.caption}
        </figcaption>
      </figure>
    </div>
  );
}
