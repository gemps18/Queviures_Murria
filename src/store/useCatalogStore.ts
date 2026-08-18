import { create } from "zustand";
import { products, type Product } from "../data/product";

interface CatalogState {
  category: string | null;
  origin: string | null;
  dietary: string | null;
  setCategory: (val: string) => void;
  setOrigin: (val: string) => void;
  setDietary: (val: string) => void;
  clearFilters: () => void;
  getFilteredProducts: () => Product[];
}

export const useCatalogStore = create<CatalogState>((set, get) => ({
  category: null,
  origin: null,
  dietary: null,

  setCategory: (val) =>
    set((state) => ({ category: state.category === val ? null : val })),
  setOrigin: (val) =>
    set((state) => ({ origin: state.origin === val ? null : val })),
  setDietary: (val) =>
    set((state) => ({ dietary: state.dietary === val ? null : val })),
  clearFilters: () => set({ category: null, origin: null, dietary: null }),

  getFilteredProducts: () => {
    const { category, origin, dietary } = get();
    return products.filter((p) => {
      if (category && p.category !== category) return false;
      if (origin && p.origin !== origin) return false;
      if (dietary && !p.dietary.includes(dietary)) return false;
      return true;
    });
  },
}));