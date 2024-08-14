import { VscNotebook } from "react-icons/vsc";

export default function Formacao() {
  return (
    <div id="formacao">
      <div className="container">
        <h3>Formação:</h3>
        <div className="formacao-container">
          <h6>
            {" "}
            <VscNotebook size={20} /> Bacharelado em Sistemas de Informação |
            Cursando
          </h6>
          <p>Instituto Federal Fluminense</p>
          <p>2022 - 2026</p>
        </div>
      </div>
    </div>
  );
}
