import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Focus } from "./components/Focus";
import { Toolkit } from "./components/Toolkit";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Nav />
      <main id="conteudo">
        <Hero />
        <Focus />
        <About />
        <Toolkit />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
