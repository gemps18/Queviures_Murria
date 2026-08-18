import type { Language } from "../context/language-context";

type T = Record<Language, string>;

export const contactContent: {
  heroTitle: T;
  heading: T;
  subtext: T;
  storeName: T;
  nameLabel: T;
  emailLabel: T;
  phoneLabel: T;
  messageLabel: T;
  privacyText: T;
  sendButton: T;
  successMessage: T;
  requiredError: T;
} = {
  heroTitle: { en: "Contact", es: "Contacto", ca: "Contacte" },
  heading: { en: "Contact us", es: "Contáctanos", ca: "Contacta'ns" },
  subtext: {
    en: "For any questions or suggestions, contact us.",
    es: "Para cualquier duda o sugerencia, contáctanos.",
    ca: "Per a qualsevol dubte o suggeriment, contacta'ns.",
  },
  storeName: { en: "Múrria Grocery Store", es: "Colmado Múrria", ca: "Queviures Múrria" },
  nameLabel: { en: "Name", es: "Nombre", ca: "Nom" },
  emailLabel: { en: "Email", es: "Correo electrónico", ca: "Correu electrònic" },
  phoneLabel: { en: "Telephone", es: "Teléfono", ca: "Telèfon" },
  messageLabel: { en: "Message", es: "Mensaje", ca: "Missatge" },
  privacyText: {
    en: "I have read and accept the privacy policy.",
    es: "He leído y acepto la política de privacidad.",
    ca: "He llegit i accepto la política de privacitat.",
  },
  sendButton: { en: "Send", es: "Enviar", ca: "Enviar" },
  successMessage: {
    en: "Thank you — your message has been sent. We'll get back to you soon.",
    es: "Gracias — tu mensaje ha sido enviado. Te responderemos pronto.",
    ca: "Gràcies — el teu missatge s'ha enviat. Et respondrem aviat.",
  },
  requiredError: {
    en: "Please fill in all required fields and accept the privacy policy.",
    es: "Por favor, completa todos los campos obligatorios y acepta la política de privacidad.",
    ca: "Si us plau, completa tots els camps obligatoris i accepta la política de privacitat.",
  },
};