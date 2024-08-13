import { FaGithub } from "react-icons/fa";
import ProjetoItem from "./ProjetoItem";

export default function Projetos() {
  return (
    <div id="projetos">
      <div className="container">
        <h3>Alguns projetos:</h3>

        <div className="projetos-container">
          <ProjetoItem
            key={"1"}
            titulo={"API-Books | Flask"}
            descricao={"API que faz o gerenciamento de uma biblioteca virtual."}
            tecnologiasUsadas={["Python", "Flask", "PostgreSQL"]}
          />
          <ProjetoItem
            key={"2"}
            titulo={"API"}
            descricao={"projeto feito de api"}
            tecnologiasUsadas={["javascript", "node"]}
          />
        </div>
      </div>
    </div>
  );
}
