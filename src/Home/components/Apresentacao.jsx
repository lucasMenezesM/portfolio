// import "../Home.css";
import { MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdb-react-ui-kit";

export default function Apresentacao() {
  return (
    <div id="apresentacao">
      <div className="container">
        <MDBCol lg="2" md="5" sm="6" xs="2" className="mb-4">
          <img
            src="/images/profile-image.jpg"
            className="img-fluid rounded-circle"
            alt=""
          />
        </MDBCol>

        <div className="texto-apresentacao">
          <h1>Lucas Menezes</h1>
          <h3>
            Desenvolvedor Web <MDBIcon className="ms-2" fas icon="code" />
          </h3>
          <p>
            Atualmente estou cursando a Graduação de{" "}
            <span className="underline">Sistemas de Informação.</span> Estudo
            frequentemente diferentes tecnologias e descobri como uma das minhas
            maiores paixões a possibilidade de criar e dar vida a ideias por
            meio da programação, desenvolvendo projetos e encontrando desafios,
            com o objetivo de sempre expandir meu conhecimento. Também
            compartilho uma paixão por aprender novas ferramentas e tecnologias
            da área.
          </p>

          <div className="social-media">
            <MDBBtn
              outline
              target="_blank"
              color="light"
              floating
              className="m-1 social-media-icon"
              href="https://github.com/lucasMenezesM"
              role="button"
            >
              <MDBIcon size="2x" fab icon="github" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              target="_blank"
              floating
              className="m-1 social-media-icon"
              href="mailto:livedolux@gmail.com"
              role="button"
            >
              <MDBIcon size="2x" far icon="envelope" />
            </MDBBtn>

            <MDBBtn
              outline
              target="_blank"
              color="light"
              floating
              className="m-1 social-media-icon"
              href="https://www.linkedin.com/in/lucas-menezes-023600279/"
              role="button"
            >
              <MDBIcon size="2x" fab icon="linkedin-in" />
            </MDBBtn>
          </div>
        </div>
      </div>
    </div>
  );
}
