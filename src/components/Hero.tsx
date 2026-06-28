import { ChevronDown } from "lucide-react";
import { site } from "../data/site";
import { asset } from "../lib/asset";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Mascot render */}
      <img
        src={asset("/assets/piranas-peluas-hyper-real-01.png")}
        alt="Las Pirañas Peluas"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40"
      />
      {/* Gold-foil wash + vignette */}
      <div
        className="absolute inset-0 opacity-20 mix-blend-overlay"
        style={{ backgroundImage: `url(${asset("/assets/gold-texture-golden-gold-background.jpg")})`, backgroundSize: "cover" }}
      />
      <div className="vignette absolute inset-0" />
      <div className="gold-dust absolute inset-0 opacity-60" />

      {/* Wordmark */}
      <div className="relative z-10 px-6 text-center">
        <p className="reveal mb-5 font-sans text-xs uppercase tracking-widest2 text-gold/80">
          Est. {site.foundedYear} · Puerto Rico
        </p>
        <h1 className="reveal reveal-2 font-display text-6xl font-bold leading-[0.95] sm:text-7xl md:text-8xl">
          <span className="gold-foil gold-foil-anim block">Las Pirañas</span>
          <span className="gold-foil gold-foil-anim block">Peluas</span>
        </h1>
        <p className="reveal reveal-3 mt-6 font-display text-2xl italic text-bone/80 sm:text-3xl">
          {site.tagline}
        </p>
        <p className="reveal reveal-3 mt-2 font-sans text-sm text-bone/50">
          {site.subtagline}
        </p>
      </div>

      <a
        href="#quienes-somos"
        aria-label="Bajar"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-gold/70 transition-colors hover:text-gold"
      >
        <ChevronDown className="animate-bounce" size={28} />
      </a>
    </section>
  );
}
