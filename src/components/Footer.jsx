import React from "react";
import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import { FaReact } from "react-icons/fa";

export default function Footer() {
  const ano = new Date().getFullYear();
  return (
    <MDBFooter className="bg-dark text-center text-white">
      <MDBContainer className="p-4 pb-0">
        <section className="mb-4">
          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="mailto:livedolux@gmail.com"
            role="button"
          >
            <MDBIcon far icon="envelope" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="https://www.linkedin.com/in/lucas-menezes-023600279/"
            target="_blank"
            role="button"
          >
            <MDBIcon fab icon="linkedin-in" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="https://github.com/lucasMenezesM"
            target="_blank"
            role="button"
          >
            <MDBIcon fab icon="github" />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        Desenvolvido por: Lucas Menezes com React <FaReact /> | © {ano} - Todos
        os direitos reservados.
      </div>
    </MDBFooter>
  );
}
