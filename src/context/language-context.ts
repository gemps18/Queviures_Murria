import { createContext } from "react";

export type Language = "en" | "es" | "ca";

export interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);