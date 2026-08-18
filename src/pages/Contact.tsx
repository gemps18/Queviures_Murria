import { useState, type FormEvent } from "react";
import PageHero from "../components/PageHero";
import { useLanguage } from "../hooks/useLanguage";
import { contactContent } from "../data/contact";
import "./Contact.css";

export default function Contact() {
  const { language } = useLanguage();
  const c = contactContent;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !privacyAccepted) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setPrivacyAccepted(false);
  };

  return (
    <div>
      <PageHero title={c.heroTitle[language]} image="/images/contact-hero.jpg" />

      <div className="contact-page">
        <div className="contact-info">
          <h2>{c.heading[language]}</h2>
          <p className="contact-subtext">{c.subtext[language]}</p>

          <h3>{c.storeName[language]}</h3>
          <p>reserva@murria.cat</p>
          <p>C/ de Roger de Llúria, 85, L'Eixample, 08009 Barcelona</p>
          <p>932 15 57 89</p>

          
            <a href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-link"
            aria-label="Instagram"
            >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4.5" />
              <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            {c.nameLabel[language]}*
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>

          <label>
            {c.emailLabel[language]}*
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>

          <label>
            {c.phoneLabel[language]}*
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </label>

          <label>
            {c.messageLabel[language]}
            <textarea rows={5} value={message} onChange={(e) => setMessage(e.target.value)} />
          </label>

          <label className="privacy-checkbox">
            <input
              type="checkbox"
              checked={privacyAccepted}
              onChange={(e) => setPrivacyAccepted(e.target.checked)}
            />
            {c.privacyText[language]}
          </label>

          <button type="submit" className="send-btn">{c.sendButton[language]}</button>

          {status === "success" && <p className="form-status form-status-success">{c.successMessage[language]}</p>}
          {status === "error" && <p className="form-status form-status-error">{c.requiredError[language]}</p>}
        </form>
      </div>

      <div className="contact-map">
        <iframe
          title="Colmado Múrria location"
          src="https://maps.google.com/maps?q=Carrer%20de%20Roger%20de%20Llúria%2085%2C%20Barcelona&t=&z=15&output=embed"
          loading="lazy"
        />
      </div>
    </div>
  );
}