import { LiaLaptopCodeSolid } from "react-icons/lia";
import { DiRuby } from "react-icons/di";
import { SiRubyonrails } from "react-icons/si";
import { FaHtml5, FaCss3, FaBootstrap } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { useState } from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import { AnimatePresence, motion } from "framer-motion";

export default function Experiencia() {
  const [isOpen, setIsOpen] = useState(true);

  function handleIsOpen() {
    setIsOpen((value) => !value);
  }

  return (
    <div id="experiencias">
      <div className="container">
        <h3>Experiências:</h3>
        <div className="experiencia-container">
          <div>
            <h5>
              {" "}
              <LiaLaptopCodeSolid size={25} /> Desenvolvedor Fullstack
            </h5>
            <p>
              Bolsa no Desenvolvimento de sistemas web para informatizar e otimizar processos dos
              setores administrativos do campus do Instituto Federal Fluminense.
            </p>
            <div className="tecnologias-experiencia">
              <h6>
                {" "}
                <button className="tecnologias-btn" onClick={handleIsOpen}>
                  {isOpen ? <MDBIcon fas icon="angle-down" /> : <MDBIcon fas icon="angle-right" />}
                </button>
                Tecnologias usadas:
              </h6>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -25 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.2 }}
                    className="lista-tecnologias-experiencia"
                  >
                    <div>
                      <DiRuby />
                      Ruby
                    </div>

                    <div>
                      <SiRubyonrails />
                      Rails
                    </div>

                    <div>
                      <BiLogoPostgresql />
                      PostgreSQL
                    </div>

                    <div>
                      <FaHtml5 />
                      HTML
                    </div>

                    <div>
                      <FaCss3 />
                      CSS
                    </div>

                    <div>
                      <FaBootstrap />
                      Bootstrap
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <p>Setembro/2024 - Atualmente</p>
          </div>
        </div>
      </div>
    </div>
  );
}
