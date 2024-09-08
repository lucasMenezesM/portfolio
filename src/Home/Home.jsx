import Apresentacao from "./components/Apresentacao";
import Contato from "./components/Contato";
import Formacao from "./components/Formacao";
import Projetos from "./components/Projetos";
import Tecnologias from "./components/Tecnologias";
import Experiencia from "./components/Experiencia";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Apresentacao />
      <Tecnologias />
      <Experiencia />
      <Projetos />
      <Formacao />
      <Contato />
    </>
  );
}
