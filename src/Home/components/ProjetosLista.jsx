import ProjetoItem from "./ProjetoItemLista";
export default function ProjectsList() {
  return (
    <div className="projetos-lista-container">
      <ProjetoItem
        titulo={"SPro Services | Ruby On Rails (em progresso)"}
        descricao={
          "Projeto de Plataforma web desenvolvida em Ruby em Rails junto com diversas gems, que permite trabalhadores autônomos e freelancers oferecerem seus serviços, enquanto clientes podem contratar esses serviços. A plataforma inclui funcionalidades de autenticação, gerenciamento de perfis e criação de anúncios de serviços."
        }
        tecnologias={["Ruby", "Rails", "PostgreSQL", "TailwindCSS"]}
        linkRepositorio1="https://github.com/lucasMenezesM/pro-services-rails"
      />
      <ProjetoItem
        titulo={"Sistema de Reserva de Salas | Ruby On Rails"}
        descricao={
          "Projeto de uma aplicação web para o gerenciamento de reservas de salas, desenvolvido com Ruby on Rails. O objetivo é permitir que os usuários façam reservas de salas, visualizem disponibilidade e gerenciem suas reservas por meio de consultas avançadas no banco de dados PostgreSQL."
        }
        tecnologias={["Ruby", "Rails", "PostgreSQL", "Bootstrap"]}
        linkRepositorio1="https://github.com/lucasMenezesM/reserva-de-sala"
      />

      <ProjetoItem
        titulo={"API Books | Flask"}
        descricao={
          "API feita em Python com framework FLASK. O objetivo dessa API é fazer o gerenciamento, incluindo operações CRUD, de uma biblioteca virtual com sistemas de autenticação. Essa API conta com uma integração do banco de dados PostgreSQL, onde é usado o auxílio do flask SQLalchemy."
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
          "Projeto Full stack feito com a MERN Stack, composta por React no front end, NodeJS e Express no back end para o desenvolvimento da API e a integração do banco de dados não relacional MongoDB. O objetivo dessa aplicação é fazer o gerenciamento de tarefas e autenticação de usuários, incluindo operações CRUD."
        }
        tecnologias={["NodeJS", "ReactJS", "MongoDB", "Express"]}
        fullStack={true}
        linkRepositorio1="https://github.com/lucasMenezesM/task-manager_frontend"
        linkRepositorio2="https://github.com/lucasMenezesM/api-taskManager"
      />

      <ProjetoItem
        titulo={"Plataforma de Cursos Online | React com Typescript"}
        descricao={
          "Front End de um projeto de uma plataforma de cursos online, desenvolvido com React e Typescript. O objetivo é permitir que os usuários se inscrevam em cursos, visualizem detalhes dos cursos e gerenciem suas inscrições."
        }
        tecnologias={["React", "Typescript"]}
        linkRepositorio1="https://github.com/lucasMenezesM/dev-learn-react-ts"
      />

      <ProjetoItem
        titulo={"Gelateria | React"}
        descricao={
          "Single Page Aplication criada com a biblioteca ReactJS. Composto por react-router-dom para gerenciar as rotas da aplicação e estilizado com Styled-Components."
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
          "Aplicação simples em React para fazer o gerenciamento de jogos com auxílio do Local Storage do navegador para persistir dados."
        }
        tecnologias={["ReactJs"]}
        linkRepositorio1="https://github.com/lucasMenezesM/GameList"
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
        titulo={"Dice Roller | Flutter"}
        descricao={"Projeto de um jogo de dados usando a tecnologia flutter."}
        tecnologias={["Dart", "Flutter"]}
        linkRepositorio1="https://github.com/lucasMenezesM/diceRoller"
      />

      <ProjetoItem
        titulo={"Alfa Tech | HTML & CSS"}
        descricao={"Projeto com HTML e CSS sobre uma empresa fictícia de hospedagens na web."}
        tecnologias={["HTML", "CSS"]}
        linkRepositorio1="https://github.com/lucasMenezesM/alfatech"
      />
    </div>
  );
}
