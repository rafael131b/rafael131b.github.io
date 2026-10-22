import { motion } from "motion/react";
import { useFramework } from "../framework";
import type { Framework } from "../data/profile";
import { AngularMark, ReactMark } from "./Marks";

const options: { id: Framework; label: string }[] = [
  { id: "react", label: "React" },
  { id: "angular", label: "Angular" },
];

export function FrameworkSwitch({ layoutId = "fw-pill" }: { layoutId?: string }) {
  const { fw, setFw } = useFramework();

  return (
    <div className="fw-switch" role="group" aria-label="Ver o site no modo React ou Angular">
      {options.map((o) => {
        const active = fw === o.id;
        return (
          <button
            key={o.id}
            type="button"
            className="fw-switch__btn"
            aria-pressed={active}
            onClick={() => setFw(o.id)}
          >
            {active && (
              <motion.span
                layoutId={layoutId}
                className="fw-switch__pill"
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
              />
            )}
            <span className="fw-switch__label">
              {o.id === "react" ? <ReactMark size={16} /> : <AngularMark size={16} />}
              {o.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
