import { useLanguage } from "../hooks/useLanguage";
import type { Language } from "../context/language-context";
import "./LanguageSwitcher.css";

const options: { code: Language; label: string }[] = [
  { code: "ca", label: "CA" },
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  return (
    <div className="language-switcher">
      {options.map((opt) => (
        <button
          key={opt.code}
          className={language === opt.code ? "lang-active" : ""}
          onClick={() => setLanguage(opt.code)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}