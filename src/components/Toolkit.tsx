import { toolkit } from "../data/profile";
import { SectionTitle } from "./SectionTitle";

export function Toolkit() {
  return (
    <section className="section toolkit" aria-labelledby="toolkit-titulo">
      <SectionTitle id="toolkit-titulo" intro="O front-end é o foco, mas as entregas passam por tudo isto também.">
        Além do front-end
      </SectionTitle>
      <div className="toolkit__cols">
        {toolkit.map((g) => (
          <div key={g.title} className="toolkit__col">
            <h3>{g.title}</h3>
            <p>{g.text}</p>
            <ul className="tags tags--quiet">
              {g.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
