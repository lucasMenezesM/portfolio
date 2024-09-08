import { MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjetoItem({
  titulo,
  descricao,
  tecnologias,
  linkRepositorio1 = "",
  linkRepositorio2 = "",
  fullStack = false,
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
          {isOpen ? <MDBIcon fas icon="angle-down" /> : <MDBIcon fas icon="angle-right" />}
        </button>
        Tecnologias usadas
      </h5>
      <div className="tecnologias-projeto-container">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="tecnologias-usadas-projetos"
            >
              <ul>
                {tecnologias.map((tecnologia) => {
                  return <li>{tecnologia}</li>;
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="link-repositorio-container">
        {fullStack ? (
          <>
            <MDBBtn
              href={linkRepositorio1}
              target="_blank"
              size="sm"
              color="dark"
              rippleColor="dark"
              className="link-repositorio-fullstack"
            >
              Repositório Front End <MDBIcon size="lg" className="ms-1" fab icon="github" />
            </MDBBtn>
            <MDBBtn
              href={linkRepositorio2}
              target="_blank"
              size="sm"
              color="dark"
              rippleColor="dark"
              className="link-repositorio-fullstack"
            >
              Repositório Back End <MDBIcon size="lg" className="ms-1" fab icon="github" />
            </MDBBtn>
          </>
        ) : (
          <MDBBtn href={linkRepositorio1} target="_blank" size="sm" color="dark" rippleColor="dark">
            Repositório <MDBIcon size="lg" className="ms-1" fab icon="github" />
          </MDBBtn>
        )}
      </div>
      {/* <MDBBtn size="sm" color="dark" rippleColor="dark">
          Repositório <MDBIcon size="lg" className="ms-1" fab icon="github" />
        </MDBBtn> */}
      {/* <a href={linkRepositorio}>
          Repositório <FaGithub />
        </a> */}
    </div>
  );
}
