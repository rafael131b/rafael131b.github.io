import { motion, useScroll, useSpring } from "motion/react";
import { FrameworkSwitch } from "./FrameworkSwitch";

const links = [
  { href: "#foco", label: "Foco" },
  { href: "#sobre", label: "Sobre" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#contato", label: "Contato" },
];

export function Nav() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  return (
    <motion.header
      className="nav"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <div className="nav__inner">
        <a href="#topo" className="nav__logo" aria-label="Rafael Timoteo, voltar ao início">
          rt<span className="nav__logo-dot" />
        </a>
        <nav aria-label="Seções">
          <ul className="nav__links">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <FrameworkSwitch />
      </div>
      <motion.div className="nav__progress" style={{ scaleX: progress }} />
    </motion.header>
  );
}
