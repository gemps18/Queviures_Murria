import type { Language } from "../context/language-context";

type T = Record<Language, string>;

export const reservationsContent: {
  heroTitle: T;
  peopleLabel: T;
  timeLabel: T;
  areaLabel: T;
  selectPlaceholder: T;
  reserveButton: T;
  confirmationPrefix: T;
  personSingular: T;
  personPlural: T;
  noAreasAvailable: T;
  noTimesAvailable: T;
} = {
  heroTitle: { en: "Reservations", es: "Reservas", ca: "Reserves" },
  peopleLabel: { en: "People", es: "Personas", ca: "Persones" },
  timeLabel: { en: "Time", es: "Hora", ca: "Hora" },
  areaLabel: { en: "Area", es: "Área", ca: "Zona" },
  selectPlaceholder: { en: "Select", es: "Seleccione", ca: "Seleccioni" },
  reserveButton: { en: "Reserve", es: "Reservar", ca: "Reservar" },
  confirmationPrefix: {
    en: "Reservation request received for",
    es: "Solicitud de reserva recibida para",
    ca: "Sol·licitud de reserva rebuda per a",
  },
  personSingular: { en: "person", es: "persona", ca: "persona" },
  personPlural: { en: "people", es: "personas", ca: "persones" },
  noAreasAvailable: {
    en: "No areas available at this time — please choose another time.",
    es: "No hay áreas disponibles a esta hora — elija otra hora.",
    ca: "No hi ha zones disponibles a aquesta hora — trieu una altra hora.",
  },
  noTimesAvailable: {
    en: "For parties of 6, only 13:00–14:15 and 19:00–21:30 are available.",
    es: "Para grupos de 6, solo hay disponibilidad de 13:00 a 14:15 y de 19:00 a 21:30.",
    ca: "Per a grups de 6, només hi ha disponibilitat de 13:00 a 14:15 i de 19:00 a 21:30.",
  },
};

export const monthNames: Record<Language, string[]> = {
  en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  es: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
  ca: ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"],
};

export const weekdayLabels: Record<Language, string[]> = {
  en: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
  es: ["L", "M", "Mi", "J", "V", "S", "D"],
  ca: ["Dl", "Dt", "Dc", "Dj", "Dv", "Ds", "Dg"],
};

export const MAX_PEOPLE = 6;

interface TimeRange {
  start: string;
  end: string;
}

function toMinutes(time: string): number {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

function inRanges(time: string, ranges: TimeRange[]): boolean {
  const t = toMinutes(time);
  return ranges.some((r) => t >= toMinutes(r.start) && t <= toMinutes(r.end));
}

// Full service window, 15-minute increments, 13:00–21:30
const fullServiceRanges: TimeRange[] = [{ start: "13:00", end: "21:30" }];

// Restricted window that applies only to parties of exactly 6
const partyOfSixRanges: TimeRange[] = [
  { start: "13:00", end: "14:15" },
  { start: "19:00", end: "21:30" },
];

export const allTimeSlots: string[] = (() => {
  const slots: string[] = [];
  for (let h = 13; h <= 21; h++) {
    for (const m of [0, 15, 30, 45]) {
      if (h === 21 && m > 30) continue;
      slots.push(`${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`);
    }
  }
  return slots;
})();

export function timeSlotsForPeople(people: number): string[] {
  const ranges = people === MAX_PEOPLE ? partyOfSixRanges : fullServiceRanges;
  return allTimeSlots.filter((t) => inRanges(t, ranges));
}

export interface DiningArea {
  id: string;
  name: T;
  ranges: TimeRange[];
  maxPeople?: number;
}

export const diningAreas: DiningArea[] = [
  {
    id: "colmado",
    name: {
      en: "Colmado Dining Room — High Table",
      es: "Sala Restaurant Colmado — Mesa Alta",
      ca: "Sala Restaurant Colmado — Taula Alta",
    },
    ranges: [{ start: "13:00", end: "21:30" }],
  },
  {
    id: "barra",
    name: {
      en: "Bar — High Table",
      es: "Barra — Mesa Alta",
      ca: "Barra — Taula Alta",
    },
    ranges: [{ start: "15:15", end: "21:15" }],
    maxPeople: 3,
  },
  {
    id: "rerebotiga",
    name: {
      en: "Rerebotiga Dining Room — Low Table",
      es: "Sala Restaurant Rerebotiga — Mesa Baja",
      ca: "Sala Restaurant Rerebotiga — Taula Baixa",
    },
    ranges: [
      { start: "13:00", end: "14:15" },
      { start: "15:45", end: "21:30" },
    ],
  },
];

export function areasAvailableAt(time: string, people: number): DiningArea[] {
  return diningAreas.filter((area) => {
    if (area.maxPeople && people > area.maxPeople) return false;
    return inRanges(time, area.ranges);
  });
}