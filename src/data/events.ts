// ============================================================
//  VIAJES / EVENTOS.  EDIT ME.
//  El primer evento con status "upcoming" alimenta el countdown.
//  Usa fecha ISO: "2026-12-31T20:00:00-04:00" (hora de PR).
// ============================================================

export type CrewEvent = {
  id: string;
  title: string;
  date: string; // ISO 8601
  location: string;
  blurb: string;
  status: "upcoming" | "past";
  whosIn?: string[]; // apodos de los que van
  cover?: string; // "/assets/xxx.jpg" opcional
};

export const events: CrewEvent[] = [
  {
    id: "e-next",
    title: "El Viaje Anual Peluo",
    date: "2026-12-12T18:00:00-04:00", // EDIT ME: fecha real
    location: "Destino clasificado 🏝️",
    blurb:
      "El reencuentro oficial del cardumen. Maletas, mala vida y memorias nuevas. Confirma o quédate fuera de la historia.",
    status: "upcoming",
    whosIn: ["El Jefe Peluo", "Diente'e Oro", "La Aleta", "Burbuja"],
    cover: "/assets/gold-texture-wallpaper-1.jpg",
  },
  {
    id: "e-1",
    title: "Aniversario 2024",
    date: "2024-08-17T19:00:00-04:00",
    location: "La casa de siempre",
    blurb: "Diez años de jodedera. Hubo bizcocho, hubo lágrimas, hubo perreo.",
    status: "past",
  },
  {
    id: "e-2",
    title: "Escapada a la playa",
    date: "2023-07-22T11:00:00-04:00",
    location: "Costa oeste, PR",
    blurb: "Cooler lleno, protector vacío. Clásico.",
    status: "past",
  },
];
