import { FaGithub } from "react-icons/fa";
import { MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import { useState } from "react";

export default function ProjetoItem({
  titulo,
  descricao,
  tecnologiasUsadas,
  linkRepositorio = "",
}) {
  const [isOpen, setIsOpen] = useState(true);

  function handleIsOpen() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <div className="projeto-box">
      <h4>{titulo}</h4>
      <p>{descricao}</p>

      <div className="tecnologias-projeto">
        <h6>
          {" "}
          <button className="tecnologias-btn" onClick={handleIsOpen}>
            {isOpen ? (
              <MDBIcon color="white" fas icon="angle-down" />
            ) : (
              <MDBIcon color="white" fas icon="angle-up" />
            )}
          </button>
          Tecnologias usadas:
        </h6>
        {isOpen && (
          <ul>
            {tecnologiasUsadas.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
        )}
      </div>

      <div className="link-repositorio">
        <MDBBtn size="sm">
          Repositório <MDBIcon size="lg" className="ms-1" fab icon="github" />
        </MDBBtn>
        {/* <a href={linkRepositorio}>
          Repositório <FaGithub />
        </a> */}
      </div>
    </div>
  );
}
