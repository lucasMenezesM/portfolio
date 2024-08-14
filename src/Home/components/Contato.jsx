import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contato() {
  return (
    <div id="contato">
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="/images/contato-imagem.jpg"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            ></img>
          </div>
          <div className="col-lg-6">
            <h3>Contato:</h3>
            <p className="lead">
              Sinta-se à vontade para entrar em contato comigo através das redes
              sociais abaixo. Seja para discutir um projeto, trocar ideias ou
              simplesmente conectar, estou à disposição!
            </p>
            <div classNameName="lista-contatos">
              <ul>
                <li>
                  <FaWhatsapp /> Tel: +55 (22) 99831-4257
                </li>
                <li>
                  <MdEmail /> Email: livedolux@gmail.com{" "}
                </li>
              </ul>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <MDBBtn
                classNameName="link-contato"
                href="https://github.com/lucasMenezesM"
                target="_blank"
                size="sm"
              >
                GitHub <MDBIcon classNameName="ms-1" fab icon="github" />
              </MDBBtn>
              <MDBBtn
                classNameName="link-contato"
                href="https://www.linkedin.com/in/lucas-menezes-023600279/"
                target="_blank"
                size="sm"
              >
                Linkedin <MDBIcon classNameName="ms-1" fab icon="linkedin-in" />
              </MDBBtn>
              <MDBBtn
                classNameName="link-contato"
                href="mailto:livedolux@gmail.com"
                target="_blank"
                size="sm"
              >
                Envie um email{" "}
                <MDBIcon classNameName="ms-1" far icon="envelope" />
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
