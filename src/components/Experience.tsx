import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { experience } from "../data/profile";
import { SectionTitle } from "./SectionTitle";

const highlight = new Set(["React", "Angular"]);

export function Experience() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  return (
    <section className="section experience" id="experiencia" aria-labelledby="exp-titulo">
      <SectionTitle id="exp-titulo" intro="Dos primeiros sites para clientes de consultoria a portais corporativos com front e back.">
        Experiência
      </SectionTitle>

      <ol className="timeline" ref={listRef}>
        <motion.span className="timeline__line" style={{ scaleY }} aria-hidden="true" />
        {experience.map((job) => (
          <motion.li
            key={job.company}
            className="job"
            initial={{ opacity: 0.25 }}
            whileInView={{ opacity: 1 }}
            viewport={{ margin: "-35% 0px -35% 0px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="job__dot" aria-hidden="true" />
            <div className="job__year" aria-hidden="true">
              {job.start}
            </div>
            <div className="job__content">
              <p className="job__period">{job.period}</p>
              <h3 className="job__role">
                {job.role} <span className="job__company">na {job.company}</span>
              </h3>
              <ul className="job__points">
                {job.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <ul className="tags" aria-label="Tecnologias">
                {job.tags.map((t) => (
                  <li key={t} data-fw={highlight.has(t) ? t.toLowerCase() : undefined}>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
