import type { Language } from "../context/language-context";

type Translation = Record<Language, string>;

export interface MenuItem {
  name: Translation;
  price: string;
}

export interface MenuCategory {
  title: Translation;
  items: MenuItem[];
}

export const menu: MenuCategory[] = [
  {
    title: { en: "Aperitive", es: "Aperitivo", ca: "Aperitiu" },
    items: [
      { name: { en: "Pair of anchovies (one salted, one in vinegar)", es: "Súper matrimonio de anchoa y boquerón", ca: "Súper matrimoni d'anxova i seitó" }, price: "€4.6" },
      { name: { en: "Oyster nº3 Spéciale from Normandie", es: "Ostra nº3 Spéciale de Normandía", ca: "Ostra nº3 Spéciale de Normandia" }, price: "€6/u" },
      { name: { en: "Red Prawn Russian Salad with Crispy Chicken", es: "Ensaladilla de gamba roja y crujiente de pollo", ca: "Ensaladilla de gamba vermella i cruixent de pollastre" }, price: "€11.5" },
      { name: { en: "Colmado Múrria's Canned Specialty of the Week", es: "Lata de conserva de la semana del Colmado Múrria", ca: "Llauna de conserva de la setmana del Colmado Múrria" }, price: "Market price" },
    ],
  },
  {
    title: { en: "Catalan Nigiri", es: "Nigiri Català", ca: "Nigiri Català" },
    items: [
      { name: { en: "Tuna belly or Salmon fillet smoked from Carpier", es: "Ventresca de Atún o Lomo de Salmón ahumado Carpier", ca: "Ventresca de Tonyina o Llom de Salmó fumat Carpier" }, price: "€8" },
      { name: { en: "Tuna or Salmon fillet smoked from Carpier and caviar", es: "Ventresca de Atún o Lomo de Salmón ahumado Carpier con caviar", ca: "Ventresca de Tonyina o Llom de Salmó fumat Carpier amb caviar" }, price: "€12" },
      { name: { en: "Flamed Wagyu with roasted bell pepper", es: "Wagyu a la llama con pimiento escalivado", ca: "Wagyu al foc amb pebrot escalivat" }, price: "€12" },
    ],
  },
  {
    title: { en: "Plates", es: "Tablas", ca: "Fustes" },
    items: [
      { name: { en: "Cecina Casa Alba Angus Wagyu", es: "Cecina Casa Alba Angus Wagyu", ca: "Cecina Casa Alba d'Angus i Wagyu" }, price: "€19.5" },
      { name: { en: "Mixed plate of cold meats and cheeses", es: "Tabla mixta de embutidos y quesos", ca: "Fusta mixta de formatges i embotits" }, price: "€28.5" },
      { name: { en: "Plate of ham 100% Ibérico pata negra, 80gr", es: "Plato de jamón ibérico 100% de bellota, 80gr", ca: "Plat de pernil ibèric 100% de gla, 80gr" }, price: "€28.5" },
      { name: { en: "Plate of cold meats", es: "Tabla de embutidos", ca: "Fusta d'embotits" }, price: "€28.5" },
      { name: { en: "Plate of five cheeses", es: "Tabla de 5 quesos", ca: "Fusta de 5 formatges" }, price: "€32" },
    ],
  },
  {
    title: { en: "Tartars", es: "Tartars", ca: "Tartars" },
    items: [
      { name: { en: "Beef steak tartare with smoked eel and Café de Paris butter", es: "Steak tartar de ternera con anguila ahumada y mantequilla Café de Paris", ca: "Steak tàrtar de vedella amb anguila fumada i mantega Café de Paris" }, price: "€24" },
      { name: { en: "Balfegó bluefin tuna tartare with pine nut emulsion and egg yolk", es: "Tartar de atún Balfegó con emulsión de piñones y yema de huevo", ca: "Tàrtar de tonyina Balfegó amb emulsió de pinyons i rovell d'ou" }, price: "€24" },
      { name: { en: "Balfegó bluefin tuna tartare, with caviar", es: "Tartar de atún Balfegó, con caviar", ca: "Tàrtar de tonyina Balfegó, amb caviar" }, price: "€29.5" },
    ],
  },
  {
    title: { en: "Dishes", es: "Platillos", ca: "Platets" },
    items: [
      { name: { en: "Croqueta esparracada", es: "Croqueta esparracada de tres carnes", ca: "Croqueta esparracada de tres carns" }, price: "€12.5" },
      { name: { en: "Open-faced cod omelette 'a la llauna' style", es: "Tortilla abierta de bacalao a la llauna", ca: "Truita oberta de bacallà a la llauna" }, price: "€14.5" },
      { name: { en: "Ou com balla: samfaina, poached egg and pumpkin panna cotta", es: "Ou com balla con samfaina y pannacotta de calabaza", ca: "Ou com balla amb samfaina i pannacotta de carbassa" }, price: "€15" },
      { name: { en: "Bonito in cold pickled sauce with vegetables", es: "Escabeche frío de bonito con verduritas", ca: "Escabetx fred de bonítol amb verduretes" }, price: "€16" },
      { name: { en: "Joan Múrria's extraordinary rostit macaroni", es: "Los extraordinarios macarrones de Rostit de Joan Múrria", ca: "Els extraordinaris macarrons de rostit d'en Joan Múrria" }, price: "€17" },
      { name: { en: "Tuna fricandó with wild mushrooms", es: "Fricandó de meloso de atún con camagrocs", ca: "Fricandó de melós de tonyina amb camagrocs" }, price: "€19.5" },
      { name: { en: "Roast-Vic: authentic Catalan roast beef made with Iberian pork shoulder", es: "Roast-Vic: el auténtico roastbeef catalán de presa ibérica", ca: "Roast Vic: l'autèntic roastbeef català de presa ibèrica" }, price: "€25" },
      { name: { en: "Zucchini flower stuffed with cream cheese, anchovies and romesco sauce (2u)", es: "Flor de calabacín rellena de crema de queso con anchoas y salsa romesco (2 ud.)", ca: "Flor de carbassó farcida de crema de formatge amb anxoves i salsa romesco (2 u.)" }, price: "€22" },
      { name: { en: "Monkfish and squid with black rice", es: "Rape y calamar con arroz negro", ca: "Rap i calamar amb arròs negre" }, price: "€26" },
      { name: { en: "Chicken cannelloni with foie gras cream and morel", es: "Canelón de pollo asado, con crema de foie y colmenillas", ca: "Caneló de pollastre rostit amb crema de foie i múrgoles" }, price: "€23" },
      { name: { en: "Filet Wellington freestyle with butter croissant from Forn Sant Josep", es: "Filete Wellington freestyle con croissant de mantequilla del Forn Sant Josep", ca: "Filet Wellington freestyle de croissant del forn Sant Josep" }, price: "€34.5" },
    ],
  },
];

export const menuNotes = {
  minimumConsumption: {
    en: "To guarantee the survival of this century-old establishment, during restaurant hours (1pm – 4pm and 6pm – 10pm) there is a minimum consumption of 1.5 plates per diner.",
    es: "Para garantizar la pervivencia de este establecimiento centenario, en horario de restaurante (13h – 16h y 18h – 22h) hay consumo mínimo de 1,5 platillos por comensal.",
    ca: "Per garantir la pervivència d'aquest establiment centenari, en horari de restaurant (13h – 16h i 18h – 22h) hi ha consum mínim d'1,5 platets per comensal.",
  },
  allergens: {
    en: "In case of allergens, please consult the staff.",
    es: "En caso de alérgenos, consultar al personal.",
    ca: "En cas d'al·lèrgens, consultar al personal.",
  },
};