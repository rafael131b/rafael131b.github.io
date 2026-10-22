import { AnimatePresence, motion } from "motion/react";
import { focus, type Framework } from "../data/profile";
import { useFramework } from "../framework";
import { AngularMark, ReactMark } from "./Marks";
import { SectionTitle } from "./SectionTitle";

const order: Framework[] = ["react", "angular"];

export function Focus() {
  const { fw, setFw } = useFramework();

  return (
    <section className="section focus" id="foco" aria-labelledby="foco-titulo">
      <SectionTitle
        id="foco-titulo"
        intro="Uso os dois em produção, mas de jeitos diferentes. Escolha um para ver o que já fiz com ele."
      >
        React e Angular
      </SectionTitle>

      <div className="focus__panels">
        {order.map((id) => {
          const data = focus[id];
          const active = fw === id;
          const Mark = id === "react" ? ReactMark : AngularMark;
          return (
            <motion.article
              key={id}
              layout
              className={`panel panel--${id}`}
              data-active={active}
              transition={{ layout: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
            >
              <motion.button
                layout="position"
                type="button"
                className="panel__head"
                aria-expanded={active}
                aria-controls={`painel-${id}`}
                onClick={() => setFw(id)}
              >
                <span className="panel__mark">
                  <Mark size={34} />
                </span>
                <span className="panel__title">{data.title}</span>
                <span className="panel__since">{data.since}</span>
              </motion.button>

              <AnimatePresence initial={false}>
                {active && (
                  <motion.div
                    id={`painel-${id}`}
                    className="panel__body"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0, transition: { delay: 0.25, duration: 0.5 } }}
                    exit={{ opacity: 0, transition: { duration: 0.15 } }}
                  >
                    <p className="panel__lead">{data.lead}</p>
                    <ul className="panel__points">
                      {data.points.map((p, i) => (
                        <motion.li
                          key={p}
                          initial={{ opacity: 0, x: -12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.35 + i * 0.07, duration: 0.45 }}
                        >
                          {p}
                        </motion.li>
                      ))}
                    </ul>
                    <ul className="tags" aria-label={`Ferramentas usadas com ${data.title}`}>
                      {data.tools.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
              <Mark size={420} />
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
