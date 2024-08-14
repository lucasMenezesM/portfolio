import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { MDBIcon } from "mdb-react-ui-kit";

export default function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" id="navbar">
        <Container>
          <Navbar.Brand className="text-white titulo-navbar" href="">
            Portfolio - Lucas Menezes{" "}
            <MDBIcon className="ms-2" fas icon="laptop" />
          </Navbar.Brand>
          <Nav className="me-auto links-navbar">
            <Nav.Link className="text-white" href="#tecnologias">
              Tecnologias
            </Nav.Link>
            <Nav.Link className="text-white" href="#projetos">
              Projetos
            </Nav.Link>
            <Nav.Link className="text-white" href="#formacao">
              Formação
            </Nav.Link>
            <Nav.Link className="text-white" href="#contato">
              Contato
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
