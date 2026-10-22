import { about, facts } from "../data/profile";
import { SectionTitle } from "./SectionTitle";

export function About() {
  return (
    <section className="section about" id="sobre" aria-labelledby="sobre-titulo">
      <SectionTitle id="sobre-titulo">Sobre mim</SectionTitle>
      <div className="about__grid">
        <div className="about__text">
          {about.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
        </div>
        <dl className="about__facts">
          {facts.map((f) => (
            <div key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
