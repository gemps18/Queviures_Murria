import type { Language } from "../context/language-context";

type Translation = Record<Language, string>;

export const nav: Record<string, Translation> = {
  home: { en: "Home", es: "Inicio", ca: "Inici" },
  us: { en: "Us", es: "Nosotros", ca: "Nosaltres" },
  gallery: { en: "Gallery", es: "Galería", ca: "Galeria" },
  menu: { en: "Menu", es: "Carta", ca: "Carta" },
  reservations: { en: "Reservations", es: "Reservas", ca: "Reserves" },
  contact: { en: "Contact", es: "Contacto", ca: "Contacte" },
  shop: { en: "Shop", es: "Tienda", ca: "Botiga" },
};

export const footer = {
  menuHeading: { en: "Menu", es: "Menú", ca: "Menú" },
  scheduleHeading: { en: "Schedule", es: "Horario", ca: "Horari" },
  infoHeading: { en: "Information", es: "Información", ca: "Informació" },
  closed: { en: "Closed", es: "Cerrado", ca: "Tancat" },
  days: {
    monday: { en: "Monday", es: "Lunes", ca: "Dilluns" },
    tuesday: { en: "Tuesday", es: "Martes", ca: "Dimarts" },
    wednesday: { en: "Wednesday", es: "Miércoles", ca: "Dimecres" },
    thursday: { en: "Thursday", es: "Jueves", ca: "Dijous" },
    friday: { en: "Friday", es: "Viernes", ca: "Divendres" },
    saturday: { en: "Saturday", es: "Sábado", ca: "Dissabte" },
    sunday: { en: "Sunday", es: "Domingo", ca: "Diumenge" },
  },
};