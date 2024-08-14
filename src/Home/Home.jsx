import Apresentacao from "./components/Apresentacao";
import Contato from "./components/Contato";
import Formacao from "./components/Formacao";
// import Projetos from "./components/ProjetosAntigo";
import Projetos from "./components/Projetos";
import Tecnologias from "./components/Tecnologias";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Apresentacao />
      <Tecnologias />
      <Projetos />
      <Formacao />
      <Contato />
    </>
  );
}
