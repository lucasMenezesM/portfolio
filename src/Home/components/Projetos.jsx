import { useState } from "react";
import ProjetoItem from "./ProjetoItem";
import { MDBIcon } from "mdb-react-ui-kit";

export default function Projetos() {
  const [isOpen, setIsOpen] = useState(true);

  function handleIsOpen() {
    setIsOpen((value) => !value);
  }

  return (
    <div id="projetos">
      <div className="container">
        <div className="titulo-projetos">
          <h3>
            {" "}
            <button className="tecnologias-btn" onClick={handleIsOpen}>
              {isOpen ? (
                <MDBIcon fas icon="angle-down" />
              ) : (
                <MDBIcon fas icon="angle-up" />
              )}
            </button>
            Alguns Projetos
          </h3>
          <p>
            A seguir, alguns projetos feitos, com suas tecnologias usadas e um
            link para o repositório no github.
          </p>
        </div>
        {isOpen && (
          <div className="projetos-container">
            <ProjetoItem
              titulo={"API Books | Flask"}
              descricao={
                "API feita em Python com framework FLASK. O objetivo dessa API é fazer o gerenciamento, incluindo operações CRUD, de uma biblioteca virtual. Essa API conta com uma integração do banco de dados PostgreSQL, onde é usado o auxílio do flask SQLalchemy."
              }
              tecnologias={["Python", "Flask", "PostgreSQL"]}
              linkRepositorio1="https://github.com/lucasMenezesM/flask-books-api"
            />

            <ProjetoItem
              titulo={"Plataforma de Cursos DevLearn | PHP"}
              descricao={
                "O objetivo desse projeto foi aprimorar minhas habilidades na linguagem PHP, e para isso fiz esse projeto de uma plataforma de cursos fictícia, onde uso PHP vanilla sem auxílio de nenhuma biblioteca, a não ser para guardar variáveis de ambiente, onde também é usado a arquitetura MVC com a integração de um banco de dados MySql."
              }
              tecnologias={["PHP", "MySql"]}
              linkRepositorio1="https://github.com/lucasMenezesM/plataforma-cursos-php"
            />

            <ProjetoItem
              titulo={"Projeto Full stack - Task Manager | MERN Stack"}
              descricao={
                "Projeto Full stack com a MERN Stack, composta por React no front end, NodeJS e express no back end para o desenvolvimento da API e a integração do banco de dados não relacional MongoDB. O objetivo dessa aplicação é fazer o gerenciamento de tarefas, incluindo operações CRUD."
              }
              tecnologias={["NodeJS", "ReactJS", "MongoDB", "Express"]}
              fullStack={true}
              linkRepositorio1="https://github.com/lucasMenezesM/task-manager_frontend"
              linkRepositorio2="https://github.com/lucasMenezesM/api-taskManager"
            />

            <ProjetoItem
              titulo={"Pong Game | Python"}
              descricao={
                "Projeto do jogo Pong Game, usando python com auxílio da biblioteca de interface gráfica Turtle."
              }
              tecnologias={["Python", "Turtle"]}
              linkRepositorio1="https://github.com/lucasMenezesM/pong-game-in-Python"
            />

            <ProjetoItem
              titulo={"Gelateria | React"}
              descricao={
                "Single Page Aplication criada com a biblioteca ReactJS. Composto por react-router-dom e estilizado com Styled-Components"
              }
              tecnologias={["ReactJs", "Styled-Components"]}
              linkRepositorio1="https://github.com/lucasMenezesM/gelateria"
            />

            <ProjetoItem
              titulo={"Portfolio | React"}
              descricao={"Projeto do portfolio usando ReactJS"}
              tecnologias={["ReactJs"]}
              linkRepositorio1="https://github.com/lucasMenezesM/portfolio"
            />

            <ProjetoItem
              titulo={"GameList | React"}
              descricao={
                "Aplicação simples para fazer o gerenciamento de jogos com auxílio do Local Storage do navegador para persistir dados."
              }
              tecnologias={["ReactJs"]}
              linkRepositorio1="https://github.com/lucasMenezesM/GameList"
            />

            <ProjetoItem
              titulo={"Dice Roller | Flutter"}
              descricao={
                "Projeto de um jogo de dados usando a tecnologia flutter"
              }
              tecnologias={["Dart", "Flutter"]}
              linkRepositorio1="https://github.com/lucasMenezesM/diceRoller"
            />

            <ProjetoItem
              titulo={"Alfa Tech | HTML & CSS"}
              descricao={
                "Projeto com HTML e CSS sobre uma empresa fictícia de hospedagens na web."
              }
              tecnologias={["HTML", "CSS"]}
              linkRepositorio1="https://github.com/lucasMenezesM/alfatech"
            />
          </div>
        )}
      </div>
    </div>
  );
}
