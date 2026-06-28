import { useEffect, useState } from "react";

type Parts = { dias: number; horas: number; mins: number; segs: number };

function diff(target: number): Parts | null {
  const ms = target - Date.now();
  if (ms <= 0) return null;
  const segs = Math.floor(ms / 1000);
  return {
    dias: Math.floor(segs / 86400),
    horas: Math.floor((segs % 86400) / 3600),
    mins: Math.floor((segs % 3600) / 60),
    segs: segs % 60,
  };
}

export default function Countdown({ date }: { date: string }) {
  const target = new Date(date).getTime();
  const [parts, setParts] = useState<Parts | null>(() => diff(target));

  useEffect(() => {
    const id = setInterval(() => setParts(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  if (!parts) {
    return (
      <p className="font-display text-3xl italic text-gold">
        ¡Ya llegó! 🦷🔥
      </p>
    );
  }

  const cells: [number, string][] = [
    [parts.dias, "días"],
    [parts.horas, "horas"],
    [parts.mins, "min"],
    [parts.segs, "seg"],
  ];

  return (
    <div className="flex justify-center gap-3 sm:gap-5">
      {cells.map(([n, label]) => (
        <div
          key={label}
          className="min-w-[64px] rounded-lg border border-gold/25 bg-obsidian/60 px-3 py-3 sm:min-w-[84px]"
        >
          <div className="font-display text-3xl font-semibold text-gold sm:text-5xl">
            {String(n).padStart(2, "0")}
          </div>
          <div className="mt-1 font-sans text-[10px] uppercase tracking-widest2 text-bone/55">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
