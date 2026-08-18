import type { Language } from "../context/language-context";

type T = Record<Language, string>;

export const heroContent: { subtitle: T; contact: T; reservation: T } = {
  subtitle: {
    en: "Grocery store, delicatessen, restaurant and gastronomic space. Since 1898.",
    es: "Tienda de comestibles, delicatessen, restaurante y espacio gastronómico. Desde 1898.",
    ca: "Botiga de queviures, delicatessen, restaurant i espai gastronòmic. Des de 1898.",
  },
  contact: { en: "Contact", es: "Contacto", ca: "Contacte" },
  reservation: { en: "Reservation", es: "Reserva", ca: "Reserva" },
};

export const usContent: { heading: T; body: T } = {
  heading: {
    en: "Modernist establishment founded in 1898",
    es: "Establecimiento modernista fundado en 1898",
    ca: "Establiment modernista fundat el 1898",
  },
  body: {
    en: "Our Colmado Múrria is a modernist establishment founded in 1898, located in the Eixample of Barcelona, very close to La Pedrera and Plaça Catalunya. Specializing in Catalan and international gastronomic products, it offers an assortment of artisanal cheeses, smoked meats, cold cuts, caviar, oils, coffees, preserves, wines and champagnes. Joan Múrria and his team offer personalized attention when advising customers.",
    es: "Nuestro Colmado Múrria es un establecimiento modernista fundado en 1898, ubicado en el Eixample de Barcelona, muy cerca de La Pedrera y Plaça Catalunya. Especializado en productos gastronómicos catalanes e internacionales, ofrece un surtido de quesos artesanales, ahumados, embutidos, caviar, aceites, cafés, conservas, vinos y cavas. Joan Múrria y su equipo ofrecen atención personalizada al asesorar a los clientes.",
    ca: "El nostre Colmado Múrria és un establiment modernista fundat el 1898, situat a l'Eixample de Barcelona, molt a prop de La Pedrera i la Plaça Catalunya. Especialitzat en productes gastronòmics catalans i internacionals, ofereix un assortit de formatges artesans, fumats, embotits, caviar, olis, cafès, conserves, vins i caves. Joan Múrria i el seu equip ofereixen atenció personalitzada a l'hora d'assessorar els clients.",
  },
};

export const galleryHeading: T = { en: "Gallery", es: "Galería", ca: "Galeria" };