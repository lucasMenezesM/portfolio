import ProjetoItemCard from "./ProjetoItemCard";

export default function CardsProjetos() {
  return (
    <div className="projetos-cards-container d-flex flex-wrap gap-4">
      <ProjetoItemCard
        titulo={"Sistema de Reserva de Salas | Ruby On Rails"}
        descricao={
          "Projeto de uma aplicação web para o gerenciamento de reservas de salas, desenvolvido com Ruby on Rails. O objetivo é permitir que os usuários façam reservas de salas, visualizem disponibilidade e gerenciem suas reservas por meio de consultas avançadas no banco de dados PostgreSQL."
        }
        tecnologias={["ruby", "rubyonrails", "postgresql", "bootstrap"]}
        github={"https://github.com/lucasMenezesM/reserva-de-sala"}
        imagem={"/images/projects/rooms-reservations-image.png"}
        linkedin={
          "https://www.linkedin.com/in/lucas-menezes-023600279/details/projects/?profileUrn=urn%3Ali%3Afsd_profile%3AACoAAEPmGBsBSGevXwg0iDjYplvJ-S-vgzt7BGk"
        }
      />

      <ProjetoItemCard
        titulo={"API Books | Flask"}
        descricao={
          "API feita em Python com framework FLASK. O objetivo dessa API é fazer o gerenciamento, incluindo operações CRUD, de uma biblioteca virtual com sistemas de autenticação. Essa API conta com uma integração do banco de dados PostgreSQL, onde é usado o auxílio do flask SQLalchemy."
        }
        imagem={"/images/projects/default-image.jpg"}
        github={"https://github.com/lucasMenezesM/flask-books-api"}
        tecnologias={["python", "flask", "postgresql"]}
      />
      <ProjetoItemCard
        titulo={"Projeto Full stack - Task Manager | MERN Stack"}
        descricao={
          "Projeto Full stack feito com a MERN Stack, composta por React no front end, NodeJS e Express no back end para o desenvolvimento da API e a integração do banco de dados não relacional MongoDB. O objetivo dessa aplicação é fazer o gerenciamento de tarefas e autenticação de usuários, incluindo operações CRUD."
        }
        imagem={"/images/projects/default-image.jpg"}
        github={"https://github.com/lucasMenezesM/api-taskManager"}
        githubSecundario={"https://github.com/lucasMenezesM/task-manager_frontend"}
        tecnologias={["nodejs", "react", "mongodb", "express"]}
      />
      <ProjetoItemCard
        titulo={"Plataforma de Cursos DevLearn | PHP"}
        descricao={
          "O objetivo desse projeto foi aprimorar minhas habilidades na linguagem PHP, e para isso fiz esse projeto de uma plataforma de cursos fictícia, onde uso PHP vanilla sem auxílio de nenhuma biblioteca, a não ser para guardar variáveis de ambiente, onde também é usado a arquitetura MVC com a integração de um banco de dados MySql."
        }
        tecnologias={["php", "mysql"]}
        imagem={"/images/projects/devlearn-php-image.png"}
        github={"https://github.com/lucasMenezesM/plataforma-cursos-php"}
        linkedin={
          "https://www.linkedin.com/in/lucas-menezes-023600279/details/projects/?profileUrn=urn%3Ali%3Afsd_profile%3AACoAAEPmGBsBSGevXwg0iDjYplvJ-S-vgzt7BGk"
        }
      />
      <ProjetoItemCard
        titulo={"Portfolio | React"}
        descricao={
          "Projeto desse portfolio apresentando projetos, experiências, qualificações e contato"
        }
        tecnologias={["react", "javascript"]}
        imagem={"/images/projects/portfolio-image.png"}
        github={"https://github.com/lucasMenezesM/portfolio"}
      />

      <ProjetoItemCard
        titulo={"GameList | React"}
        descricao={
          "Aplicação simples em React para fazer o gerenciamento de jogos com auxílio do Local Storage do navegador para persistir dados."
        }
        tecnologias={["react", "javascript"]}
        imagem={"/images/projects/gaming-list-image.png"}
        github={"https://github.com/lucasMenezesM/GameList"}
      />
      <ProjetoItemCard
        titulo={"Plataforma de Cursos Online | React com Typescript"}
        descricao={
          "Front End de um projeto de uma plataforma de cursos online, desenvolvido com React e Typescript. O objetivo é permitir que os usuários se inscrevam em cursos, visualizem detalhes dos cursos e gerenciem suas inscrições."
        }
        tecnologias={["react", "typescript"]}
        imagem={"/images/projects/devlearn-react-ts-image.png"}
        github={"https://github.com/lucasMenezesM/dev-learn-react-ts"}
      />

      <ProjetoItemCard
        titulo={"Gelateria | React"}
        descricao={
          "Single Page Aplication criada com a biblioteca ReactJS. Composto por react-router-dom para gerenciar as rotas da aplicação e estilizado com Styled-Components."
        }
        tecnologias={["react", "javascript"]}
        imagem={"/images/projects/default-image.jpg"}
        github={"https://github.com/lucasMenezesM/gelateria"}
      />

      <ProjetoItemCard
        titulo={"Pong Game | Python"}
        descricao={
          "Projeto do jogo Pong Game, usando python com auxílio da biblioteca de interface gráfica Turtle."
        }
        tecnologias={["python"]}
        github={"https://github.com/lucasMenezesM/pong-game-in-Python"}
        imagem={"/images/projects/default-image.jpg"}
      />

      <ProjetoItemCard
        titulo={"Dice Roller | Flutter"}
        descricao={"Projeto de um jogo de dados usando a tecnologia flutter."}
        tecnologias={["dart", "flutter"]}
        github={"https://github.com/lucasMenezesM/diceRoller"}
        imagem={"/images/projects/default-image.jpg"}
      />

      <ProjetoItemCard
        titulo={"Alfa Tech | HTML & CSS"}
        descricao={"Projeto com HTML e CSS sobre uma empresa fictícia de hospedagens na web."}
        tecnologias={["html", "css"]}
        github={"https://github.com/lucasMenezesM/alfatech"}
        imagem={"/images/projects/alfa-tech-image.png"}
      />

      {/* <ProjetoItemCard />
      <ProjetoItemCard />
      <ProjetoItemCard /> */}
    </div>
  );
}
