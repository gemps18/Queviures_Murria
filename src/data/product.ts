export interface Product {
  id: number;
  name: string;
  category: "Cheese" | "Wine" | "Cured Meat" | "Preserves";
  origin: string;
  dietary: string[];
  price: number;
  image: string;
  webpImage?: string;
}

export const products: Product[] = [
  { id: 1, name: "Aged Manchego DOP", category: "Cheese", origin: "Castilla-La Mancha", dietary: ["Gluten-Free"], price: 18.5, image: "/images/manchego.jpg" },
  { id: 2, name: "Garrotxa Goat Cheese", category: "Cheese", origin: "Catalonia", dietary: ["Gluten-Free"], price: 14.0, image: "/images/garrotxa.jpg" },
  { id: 3, name: "Torta del Casar", category: "Cheese", origin: "Extremadura", dietary: ["Gluten-Free"], price: 22.0, image: "/images/torta-casar.jpg" },
  { id: 4, name: "Priorat Negre Reserva", category: "Wine", origin: "Catalonia", dietary: ["Organic"], price: 32.0, image: "/images/priorat.jpg" },
  { id: 5, name: "Cava Brut Nature", category: "Wine", origin: "Catalonia", dietary: [], price: 12.5, image: "/images/cava.jpg" },
  { id: 6, name: "Rioja Crianza", category: "Wine", origin: "La Rioja", dietary: ["Organic"], price: 19.0, image: "/images/rioja.jpg" },
  { id: 7, name: "Jamón Ibérico de Bellota", category: "Cured Meat", origin: "Extremadura", dietary: ["Gluten-Free"], price: 45.0, image: "/images/jamon.jpg" },
  { id: 8, name: "Fuet Català", category: "Cured Meat", origin: "Catalonia", dietary: [], price: 9.5, image: "/images/fuet.jpg" },
  { id: 9, name: "Llonganissa Artesana", category: "Cured Meat", origin: "Catalonia", dietary: ["Gluten-Free"], price: 11.0, image: "/images/llonganissa.jpg" },
  { id: 10, name: "Organic Arbequina Olive Oil", category: "Preserves", origin: "Catalonia", dietary: ["Organic", "Gluten-Free"], price: 16.0, image: "/images/oil.jpg" },
  { id: 11, name: "Membrillo (Quince Paste)", category: "Preserves", origin: "Catalonia", dietary: ["Gluten-Free"], price: 6.5, image: "/images/membrillo.jpg" },
  { id: 12, name: "Marcona Almonds", category: "Preserves", origin: "Valencia", dietary: ["Organic", "Gluten-Free"], price: 8.0, image: "/images/almonds.jpg" },
];

export const filterOptions = {
  category: ["Cheese", "Wine", "Cured Meat", "Preserves"] as const,
  origin: ["Catalonia", "Castilla-La Mancha", "Extremadura", "La Rioja", "Valencia"] as const,
  dietary: ["Organic", "Gluten-Free"] as const,
};