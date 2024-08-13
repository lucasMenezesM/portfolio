import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { MDBIcon } from "mdb-react-ui-kit";

export default function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" id="navbar">
        <Container>
          <Navbar.Brand className="text-white mr-5" href="#home">
            Portfolio - Lucas Menezes{" "}
            <MDBIcon className="ms-2" fas icon="laptop" />
          </Navbar.Brand>
          <Nav className="me-auto ms-1">
            <Nav.Link className="text-white" href="#sobre">
              Sobre
            </Nav.Link>
            <Nav.Link className="text-white" href="#tecnologias">
              Tecnologias
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
