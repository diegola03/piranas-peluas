import type { Member } from "../data/members";
import { members } from "../data/members";
import SectionTitle from "./SectionTitle";
import { asset } from "../lib/asset";

const FALLBACK = "/assets/piranha-icon.jpg";

function Card({ m }: { m: Member }) {
  return (
    <article className="group relative overflow-hidden rounded-lg border border-gold/15 bg-coal/60 transition-all duration-300 hover:border-gold/50 hover:shadow-gold-glow">
      <div className="aspect-square overflow-hidden bg-obsidian">
        <img
          src={asset(m.photo || FALLBACK)}
          alt={m.nick}
          loading="lazy"
          className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
            m.photo ? "" : "opacity-30 saturate-0"
          }`}
        />
      </div>
      <div className="p-4">
        <p className="font-sans text-[11px] uppercase tracking-widest2 text-gold/70">
          {m.rango}
        </p>
        <h3 className="mt-1 font-display text-2xl font-semibold text-bone">
          {m.nick}
        </h3>
        {m.realName && m.realName !== "—" && (
          <p className="font-sans text-xs text-bone/40">{m.realName}</p>
        )}
        <p className="mt-2 font-sans text-sm leading-snug text-bone/65">
          {m.bio}
        </p>
      </div>
    </article>
  );
}

export default function Members() {
  return (
    <section id="crew" className="mx-auto max-w-6xl px-5 py-24">
      <SectionTitle kicker="El cardumen" title="El Crew" />
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-3">
        {members.map((m) => (
          <Card key={m.id} m={m} />
        ))}
      </div>
    </section>
  );
}
