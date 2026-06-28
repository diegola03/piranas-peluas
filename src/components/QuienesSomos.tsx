import { site } from "../data/site";
import SectionTitle from "./SectionTitle";

export default function QuienesSomos() {
  return (
    <section id="quienes-somos" className="mx-auto max-w-3xl px-5 py-24">
      <SectionTitle kicker="La leyenda" title="Quiénes somos" />
      <div className="space-y-6 text-center font-display text-xl leading-relaxed text-bone/85 sm:text-2xl">
        {site.manifesto.map((p, i) => (
          <p key={i} className={`reveal reveal-${Math.min(i + 1, 3)}`}>
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
