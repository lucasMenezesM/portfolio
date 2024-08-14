import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contato() {
  return (
    <div id="contato">
      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src="/images/contato-imagem.jpg"
              class="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            ></img>
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Contato:
            </h1>
            <p class="lead">
              Entre em contato comigo pelas redes sociais abaixo:
            </p>
            <div className="lista-contatos">
              <p>
                <FaWhatsapp /> Tel: +55 (22) 99831-4257
              </p>
              <p>
                {" "}
                <MdEmail /> Email: livedolux@gmail.com{" "}
              </p>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <MDBBtn
                className="link-contato"
                href="https://github.com/lucasMenezesM"
                target="_blank"
                size="sm"
              >
                GitHub <MDBIcon className="ms-1" fab icon="github" />
              </MDBBtn>
              <MDBBtn
                className="link-contato"
                href="https://www.linkedin.com/in/lucas-menezes-023600279/"
                target="_blank"
                size="sm"
              >
                Linkedin <MDBIcon className="ms-1" fab icon="linkedin-in" />
              </MDBBtn>
              <MDBBtn
                className="link-contato"
                href="mailto:livedolux@gmail.com"
                target="_blank"
                size="sm"
              >
                Envie um email <MDBIcon className="ms-1" far icon="envelope" />
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
