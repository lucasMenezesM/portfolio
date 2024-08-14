import { useState } from "react";
import ProjetoItem from "./ProjetoItem";
import { MDBIcon } from "mdb-react-ui-kit";

export default function Projetos() {
  const [isOpen, setIsOpen] = useState(true);

  function handleIsOpen() {
    setIsOpen((value) => !value);
  }

  return (
    <div id="projetos">
      <div className="container">
        <div className="titulo-projetos">
          <h3>
            {" "}
            <button className="tecnologias-btn" onClick={handleIsOpen}>
              {isOpen ? (
                <MDBIcon fas icon="angle-down" />
              ) : (
                <MDBIcon fas icon="angle-up" />
              )}
            </button>
            Alguns Projetos
          </h3>
          <p>
            A seguir, alguns projetos feitos, com suas tecnologias usadas e um
            link para o repositório no github.
          </p>
        </div>
        {isOpen && (
          <div className="projetos-container">
            <ProjetoItem
              titulo={"API Books | Flask"}
              descricao={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              }
              tecnologias={["Python", "Flask", "PostgreSQL"]}
            />

            <ProjetoItem
              titulo={"API Books | Flask"}
              descricao={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              }
              tecnologias={["Python", "Flask", "PostgreSQL"]}
            />

            <ProjetoItem
              titulo={"API Books | Flask"}
              descricao={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              }
              tecnologias={["Python", "Flask", "PostgreSQL"]}
            />
          </div>
        )}
      </div>
    </div>
  );
}
