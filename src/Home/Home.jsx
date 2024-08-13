import Apresentacao from "./components/Apresentacao";
import Projetos from "./components/Projetos";
import Tecnologias from "./components/Tecnologias";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Apresentacao />
      <Tecnologias />
      <Projetos />
    </>
  );
}
