import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useFramework } from "../framework";
import { rendered, snippets, tokenize } from "../code";
import { AngularMark, ReactMark } from "./Marks";
import type { Framework } from "../data/profile";

const TYPE_DURATION = 2600;

function useTyped(length: number, key: string, startDelay: number) {
  const reduce = useReducedMotion();
  const [count, setCount] = useState(reduce ? length : 0);

  useEffect(() => {
    if (reduce) {
      setCount(length);
      return;
    }
    setCount(0);
    let raf = 0;
    let start = 0;
    const timer = window.setTimeout(() => {
      const tick = (t: number) => {
        if (!start) start = t;
        const p = Math.min(1, (t - start) / TYPE_DURATION);
        setCount(Math.round(p * length));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, startDelay);
    return () => {
      window.clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [length, key, reduce, startDelay]);

  return count;
}

export function CodeWindow() {
  const { fw, setFw } = useFramework();
  const [firstRun, setFirstRun] = useState(true);
  const { code } = snippets[fw];
  const tokens = useMemo(() => tokenize(code), [code]);
  const count = useTyped(code.length, fw, firstRun ? 1100 : 150);
  const done = count >= code.length;

  useEffect(() => {
    if (done) setFirstRun(false);
  }, [done]);

  let used = 0;
  const visible = [];
  for (let i = 0; i < tokens.length && used < count; i++) {
    const t = tokens[i];
    const text = t.text.slice(0, count - used);
    used += t.text.length;
    visible.push(
      <span key={i} className={`tk-${t.kind}`}>
        {text}
      </span>,
    );
  }

  const tabs: Framework[] = ["react", "angular"];

  return (
    <motion.div
      className="code"
      initial={{ opacity: 0, y: 30, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="code__tabs" role="group" aria-label="Arquivo do componente">
        {tabs.map((id) => (
          <button
            key={id}
            type="button"
            className="code__tab"
            aria-pressed={fw === id}
            onClick={() => setFw(id)}
          >
            {id === "react" ? <ReactMark size={14} /> : <AngularMark size={14} />}
            {snippets[id].file}
          </button>
        ))}
      </div>

      <pre className="code__body" aria-label={`Código do componente em ${fw === "react" ? "React" : "Angular"}`}>
        <code>
          {visible}
          <span className={`code__caret${done ? " is-idle" : ""}`} aria-hidden="true" />
        </code>
      </pre>

      <div className="code__output">
        <span className="code__output-label">Resultado</span>
        <AnimatePresence mode="wait">
          {done && (
            <motion.div
              key={fw}
              className="devcard"
              initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -6, filter: "blur(4px)" }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="devcard__avatar" aria-hidden="true">
                RT
              </div>
              <div className="devcard__info">
                <strong>Rafael Timoteo</strong>
                <span>Full stack, {rendered[fw].since}</span>
              </div>
              <ul className="devcard__stack">
                {rendered[fw].stack.map((s, i) => (
                  <motion.li
                    key={s}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.15 + i * 0.08, type: "spring", stiffness: 500, damping: 26 }}
                  >
                    {s}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
