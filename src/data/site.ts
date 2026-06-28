// ============================================================
//  SITE COPY — el texto del sitio.  EDIT ME libremente.
//  Cambia cualquier string aquí y se actualiza en el sitio.
// ============================================================

export const site = {
  name: "Las Pirañas Peluas",
  // Frase corta debajo del logo en el hero
  tagline: "El grupo más pelú",
  // Sub-frase chistosa
  subtagline: "Desde el principio de los tiempos · 100% pelú, 0% serio",

  // Texto de "Quiénes somos" (el lore de la crew). EDIT ME.
  manifesto: [
    "No somos un grupo. Somos una institución.",
    "Las Pirañas Peluas nacieron de noches que nadie recuerda bien y de viajes que todos cuentan distinto. Mordemos primero y preguntamos después.",
    "Esto es la casa: la crew, los recuerdos y el próximo viaje. Bienvenido al cardumen más pelú de la isla.",
  ],

  // Año del footer (se calcula solo, pero puedes fijarlo aquí)
  foundedYear: 2014,

  // Links del nav (anclas a las secciones)
  nav: [
    { label: "Quiénes somos", href: "#quienes-somos" },
    { label: "La Crew", href: "#crew" },
    { label: "Galería", href: "#galeria" },
    { label: "Viajes", href: "#eventos" },
  ],

  // Frase del footer
  footerLine: "Hecho con mordidas y demasiado tiempo libre.",
} as const;
