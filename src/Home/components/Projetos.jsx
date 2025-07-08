import { useState } from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import { motion, AnimatePresence } from "framer-motion";
import ProjectsList from "./ProjetosLista";
import CardsProjetos from "./CardsProjetos";
import NavbarProjetos from "./NavBarProjetos";

export default function Projetos() {
  const [isOpen, setIsOpen] = useState(true);
  const [cardsSelected, setCardsSelected] = useState(true);

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
              {isOpen ? <MDBIcon fas icon="angle-down" /> : <MDBIcon fas icon="angle-right" />}
            </button>
            Alguns Projetos
          </h3>
          <p>
            A seguir, apresento alguns dos projetos que desenvolvi, detalhando as tecnologias
            utilizadas em cada um deles, juntamente com um link direto para o respectivo repositório
            no GitHub.
          </p>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -70 }} // Começa fora de vista, deslocado para cima
              animate={{ opacity: 1, y: 0 }} // Desliza para baixo para a posição original
              exit={{ opacity: 0, y: -20 }} // Desliza para cima e desaparece quando sair
              transition={{ duration: 0.2 }}
              className="projetos-container"
            >
              <NavbarProjetos cardsSelected={cardsSelected} onSelectView={setCardsSelected} />
              {cardsSelected ? <CardsProjetos /> : <ProjectsList />}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
