// ============================================================
//  GALERÍA — fotos y recuerdos.  EDIT ME.
//  Pon las imagenes en /public/assets/ y referencialas abajo.
//  Por ahora va seeded con arte/mockups de la marca como
//  placeholder — cámbialos por fotos reales de la crew.
// ============================================================

export type Shot = {
  id: string;
  src: string; // "/assets/xxx.jpg"
  caption: string;
  tag: "viaje" | "party" | "merch" | "crew";
};

export const gallery: Shot[] = [
  {
    id: "g1",
    src: "/assets/piranas-peluas-hyper-real-01.png",
    caption: "El cardumen en su forma más peligrosa",
    tag: "crew",
  },
  {
    id: "g2",
    src: "/assets/piranas-peluas-embroidered-01.png",
    caption: "Bordado oficial — nivel leyenda",
    tag: "merch",
  },
  {
    id: "g3",
    src: "/assets/piranas-peluas-2017-shirt-front.jpg",
    caption: "La camisa del 2017 (front)",
    tag: "merch",
  },
  {
    id: "g4",
    src: "/assets/piranas-peluas-2017-shirt-BACK.jpg",
    caption: "La camisa del 2017 (back)",
    tag: "merch",
  },
  {
    id: "g5",
    src: "/assets/piranas-peluas-keys100-1-01.jpg",
    caption: "Las llaves de la ciudad (que nos dimos solos)",
    tag: "merch",
  },
  {
    id: "g6",
    src: "/assets/piranas-peluas-100x8-gold-medallion.jpg",
    caption: "El medallón de oro del 100x8",
    tag: "merch",
  },
  {
    id: "g7",
    src: "/assets/piranas-peluas-hyper-real-02.png",
    caption: "Modo ataque activado",
    tag: "crew",
  },
  {
    id: "g8",
    src: "/assets/piranas-peluas-style-01.png",
    caption: "Estilo pelú, edición especial",
    tag: "crew",
  },
];
