import { motion } from "motion/react";
import type { ReactNode } from "react";

export function SectionTitle({ id, children, intro }: { id: string; children: ReactNode; intro?: ReactNode }) {
  return (
    <header className="section-title">
      <motion.h2
        id={id}
        initial={{ clipPath: "inset(0 0 100% 0)", y: 24 }}
        whileInView={{ clipPath: "inset(0 0 0% 0)", y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.h2>
      {intro && <p className="section-title__intro">{intro}</p>}
    </header>
  );
}
