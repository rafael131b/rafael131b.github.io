import { AnimatePresence, motion } from "motion/react";
import { useFramework } from "../framework";

const ORBIT = "M -260 0 A 260 104 0 1 0 260 0 A 260 104 0 1 0 -260 0";
const SHIELD = "M 0 -300 L 280 -200 L 236 170 L 0 300 L -236 170 L -280 -200 Z";
const A_SHAPE = "M 0 -210 L 170 170 M 0 -210 L -170 170 M -95 50 L 95 50";

export function Orbits() {
  const { fw } = useFramework();

  return (
    <div className="orbits" aria-hidden="true">
      <svg viewBox="-340 -340 680 680">
        <AnimatePresence mode="popLayout">
          {fw === "react" ? (
            <motion.g
              key="react"
              initial={{ opacity: 0, scale: 0.7, rotate: -40 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 1.25, rotate: 30 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <g className="orbits__spin">
                {[0, 60, 120].map((deg, i) => (
                  <g key={deg} transform={`rotate(${deg})`}>
                    <path d={ORBIT} className="orbits__line" />
                    <circle r="5" className="orbits__electron">
                      <animateMotion dur={`${7 + i * 2.5}s`} repeatCount="indefinite" path={ORBIT} begin={`-${i * 2}s`} />
                    </circle>
                  </g>
                ))}
              </g>
              <circle r="26" className="orbits__nucleus" />
            </motion.g>
          ) : (
            <motion.g
              key="angular"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.path
                d={SHIELD}
                className="orbits__line"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
              />
              <motion.path
                d={SHIELD}
                className="orbits__line orbits__line--faint"
                style={{ scale: 0.82 }}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.4, delay: 0.2, ease: "easeInOut" }}
              />
              <motion.path
                d={A_SHAPE}
                className="orbits__line orbits__line--strong"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
              />
              <circle r="5" className="orbits__electron">
                <animateMotion dur="9s" repeatCount="indefinite" path={SHIELD} />
              </circle>
            </motion.g>
          )}
        </AnimatePresence>
      </svg>
    </div>
  );
}
