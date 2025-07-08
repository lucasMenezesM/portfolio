import { FaThLarge, FaList } from "react-icons/fa"; // Ícones

export default function NavbarProjetos({ cardsSelected, onSelectView }) {
  return (
    <div className="navbar-projetos d-flex justify-content-center my-4 gap-3">
      <button
        className={`navbar-btn ${cardsSelected ? "active" : ""}`}
        onClick={() => onSelectView(true)}
      >
        <FaThLarge className="me-2" />
        Cards
      </button>
      <button
        className={`navbar-btn ${!cardsSelected ? "active" : ""}`}
        onClick={() => onSelectView(false)}
      >
        <FaList className="me-2" />
        Lista
      </button>
    </div>
  );
}
