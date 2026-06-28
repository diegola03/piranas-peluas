import { MapPin, Users } from "lucide-react";
import { events } from "../data/events";
import SectionTitle from "./SectionTitle";
import Countdown from "./Countdown";

const fmt = (iso: string) =>
  new Date(iso).toLocaleDateString("es-PR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default function Events() {
  const next = events.find((e) => e.status === "upcoming");
  const past = events.filter((e) => e.status === "past");

  return (
    <section id="eventos" className="mx-auto max-w-5xl px-5 py-24">
      <SectionTitle kicker="La movida" title="Viajes & Eventos" />

      {next && (
        <div className="reveal relative mb-16 overflow-hidden rounded-2xl border border-gold/25 bg-coal/50 p-8 text-center sm:p-12">
          {next.cover && (
            <img
              src={next.cover}
              alt=""
              className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-15"
            />
          )}
          <div className="relative">
            <p className="font-sans text-xs uppercase tracking-widest2 text-gold/80">
              Lo que viene
            </p>
            <h3 className="mt-2 font-display text-4xl font-bold text-bone sm:text-5xl">
              {next.title}
            </h3>
            <p className="mt-2 font-sans text-sm text-bone/60">
              {fmt(next.date)} · {next.location}
            </p>

            <div className="my-8">
              <Countdown date={next.date} />
            </div>

            <p className="mx-auto max-w-xl font-display text-lg italic text-bone/80">
              {next.blurb}
            </p>

            {next.whosIn && next.whosIn.length > 0 && (
              <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
                <Users size={16} className="text-gold/70" />
                {next.whosIn.map((nick) => (
                  <span
                    key={nick}
                    className="rounded-full border border-gold/25 px-3 py-1 font-sans text-xs text-bone/75"
                  >
                    {nick}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {past.length > 0 && (
        <>
          <h4 className="mb-6 text-center font-sans text-xs uppercase tracking-widest2 text-bone/45">
            En los libros de historia
          </h4>
          <div className="grid gap-5 sm:grid-cols-2">
            {past.map((e) => (
              <article
                key={e.id}
                className="rounded-xl border border-gold/10 bg-coal/40 p-6 transition-colors hover:border-gold/30"
              >
                <p className="font-sans text-xs text-gold/60">{fmt(e.date)}</p>
                <h5 className="mt-1 font-display text-2xl font-semibold text-bone">
                  {e.title}
                </h5>
                <p className="mt-1 flex items-center gap-1.5 font-sans text-xs text-bone/45">
                  <MapPin size={12} /> {e.location}
                </p>
                <p className="mt-3 font-sans text-sm leading-snug text-bone/65">
                  {e.blurb}
                </p>
              </article>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
