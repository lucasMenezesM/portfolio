import { FaGithub } from "react-icons/fa";

export default function ProjetoItem({
  titulo,
  descricao,
  tecnologiasUsadas,
  linkRepositorio = "",
}) {
  return (
    <div className="projeto-box">
      <h4>{titulo}</h4>
      <p>{descricao}</p>
      <div className="tecnologias-projeto">
        <h6>Tecnologias usadas:</h6>
        <ul>
          {tecnologiasUsadas.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>

      <div className="link-repositorio">
        <a href={linkRepositorio}>
          Repositório <FaGithub />
        </a>
      </div>
    </div>
  );
}
