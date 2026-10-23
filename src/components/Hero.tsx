import { useRef, type PointerEvent } from "react";
import { motion } from "motion/react";
import { profile } from "../data/profile";
import { useFramework } from "../framework";
import { CodeWindow } from "./CodeWindow";
import { Orbits } from "./Orbits";
import { WhatsAppMark } from "./Marks";
import { ResumeMenu } from "./ResumeMenu";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { fw } = useFramework();

  const onPointerMove = (e: PointerEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  let charIndex = 0;

  return (
    <section id="topo" className="hero" ref={ref} onPointerMove={onPointerMove}>
      <div className="hero__spotlight" aria-hidden="true" />
      <Orbits />

      <div className="hero__inner">
        <div className="hero__text">
          <h1 className="hero__name" aria-label={profile.name.join(" ")}>
            {profile.name.map((word) => (
              <span key={word} className="hero__line" aria-hidden="true">
                {word.split("").map((ch) => {
                  const i = charIndex++;
                  return (
                    <motion.span
                      key={i}
                      className="hero__char"
                      initial={{ y: "105%" }}
                      animate={{ y: "0%" }}
                      transition={{ duration: 0.9, delay: 0.15 + i * 0.03, ease }}
                    >
                      {ch}
                    </motion.span>
                  );
                })}
              </span>
            ))}
          </h1>

          <motion.p
            className="hero__role"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease }}
          >
            {profile.role}, com foco em{" "}
            <span className="hero__fw" data-active={fw === "react"}>
              React
            </span>{" "}
            e{" "}
            <span className="hero__fw" data-active={fw === "angular"}>
              Angular
            </span>
            .
          </motion.p>

          <motion.p
            className="hero__summary"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.92, ease }}
          >
            {profile.summary}
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.04, ease }}
          >
            <a className="btn btn--primary" href={`mailto:${profile.email}`}>
              Enviar e-mail
            </a>
            <a className="btn btn--ghost" href={profile.whatsapp} target="_blank" rel="noreferrer">
              <WhatsAppMark size={18} />
              Chamar no WhatsApp
            </a>
            <ResumeMenu />
          </motion.div>
        </div>

        <div className="hero__code">
          <CodeWindow />
          <motion.p
            className="hero__hint"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.6 }}
          >
            Troque o arquivo para ver o mesmo componente em {fw === "react" ? "Angular" : "React"}. O site inteiro muda junto.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
