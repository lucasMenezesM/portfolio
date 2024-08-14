import { MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import { useState } from "react";

export default function ProjetoItem({
  titulo,
  descricao,
  tecnologias,
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
      <h5>
        {" "}
        <button className="tecnologias-btn" onClick={handleIsOpen}>
          {isOpen ? (
            <MDBIcon fas icon="angle-down" />
          ) : (
            <MDBIcon fas icon="angle-up" />
          )}
        </button>
        Tecnologias usadas
      </h5>
      {isOpen && (
        <div className="tecnologias-usadas-projetos">
          <ul>
            {tecnologias.map((tecnologia) => {
              return <li>tecnologia 1</li>;
            })}
          </ul>
        </div>
      )}

      <div className="link-repositorio">
        <MDBBtn size="sm" color="dark" rippleColor="dark">
          Repositório <MDBIcon size="lg" className="ms-1" fab icon="github" />
        </MDBBtn>
        {/* <a href={linkRepositorio}>
          Repositório <FaGithub />
        </a> */}
      </div>
    </div>
  );
}
