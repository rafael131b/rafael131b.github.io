import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { profile } from "../data/profile";
import { GitHubMark, LinkedInMark, WhatsAppMark } from "./Marks";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section className="section contact" id="contato" aria-labelledby="contato-titulo">
      <motion.h2
        id="contato-titulo"
        className="contact__title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        Tem um projeto em React ou Angular? Vamos conversar.
      </motion.h2>

      <div className="contact__row">
        <a className="contact__email" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <button type="button" className="btn btn--ghost contact__copy" onClick={copy}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={copied ? "ok" : "copy"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {copied ? "E-mail copiado" : "Copiar e-mail"}
            </motion.span>
          </AnimatePresence>
        </button>
        <span className="visually-hidden" role="status">
          {copied ? "E-mail copiado para a área de transferência" : ""}
        </span>
      </div>

      <a className="contact__whatsapp" href={profile.whatsapp} target="_blank" rel="noreferrer">
        <span className="contact__whatsapp-icon">
          <WhatsAppMark size={26} />
        </span>
        <span className="contact__whatsapp-text">
          <strong>Chamar no WhatsApp</strong>
          <span>{profile.phone}</span>
        </span>
      </a>

      <ul className="contact__links">
        <li>
          <a className="contact__social" href={profile.linkedin} target="_blank" rel="noreferrer">
            <LinkedInMark size={18} />
            LinkedIn
          </a>
        </li>
        <li>
          <a className="contact__social" href={profile.github} target="_blank" rel="noreferrer">
            <GitHubMark size={18} />
            GitHub
          </a>
        </li>
        <li>{profile.location}</li>
      </ul>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Rafael Timoteo Carneiro</p>
        <p>Feito com React, TypeScript e Motion.</p>
      </footer>
    </section>
  );
}
