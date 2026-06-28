// ============================================================
//  LA CREW — los miembros.  EDIT ME.
//  Añade/edita pirañas aquí. Pon la foto en /public/assets/
//  y referénciala como "/assets/tu-foto.jpg".
//  Si no hay foto, usa "" y sale el icono por defecto.
// ============================================================

export type Member = {
  id: string;
  nick: string; // apodo (lo grande)
  realName?: string; // nombre real (opcional, chiquito)
  rango: string; // rango chistoso de la crew
  bio: string; // una línea
  photo: string; // "/assets/xxx.jpg" o "" para placeholder
};

export const members: Member[] = [
  {
    id: "1",
    nick: "El Jefe Peluo",
    realName: "—",
    rango: "Piraña Alfa",
    bio: "El que empezó la jodedera. Culpable de todo.",
    photo: "", // EDIT ME: "/assets/jefe.jpg"
  },
  {
    id: "2",
    nick: "Diente'e Oro",
    rango: "Tesorero (no hay tesoro)",
    bio: "Brilla más que el logo. Nunca paga el primer trago.",
    photo: "",
  },
  {
    id: "3",
    nick: "La Aleta",
    rango: "Navegante oficial",
    bio: "Decide los viajes. Nunca llega a tiempo.",
    photo: "",
  },
  {
    id: "4",
    nick: "Burbuja",
    rango: "DJ del cardumen",
    bio: "Trae el perreo. Cero filtro, full volumen.",
    photo: "",
  },
  {
    id: "5",
    nick: "El Anzuelo",
    rango: "Relaciones públicas",
    bio: "Cae en todas. Pero las cuenta bien.",
    photo: "",
  },
  {
    id: "6",
    nick: "Coletazo",
    rango: "Miembro honorario",
    bio: "Aparece tarde, se va temprano, leyenda igual.",
    photo: "",
  },
];
