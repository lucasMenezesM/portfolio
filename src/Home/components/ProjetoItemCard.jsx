import { Card, Badge, Button } from "react-bootstrap";
import {
  FaHtml5,
  FaCss3,
  FaPython,
  FaPhp,
  FaNodeJs,
  FaGitAlt,
  FaReact,
  FaBootstrap,
  FaJsSquare,
} from "react-icons/fa";

import { FaDartLang, FaFlutter } from "react-icons/fa6";

import { SiFlask, SiPandas, SiRubyonrails, SiTypescript, SiExpress } from "react-icons/si";

import { DiMongodb, DiMysql, DiRuby } from "react-icons/di";

import { BiLogoPostgresql } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const TecnologiaIcons = {
  html: <FaHtml5 color="#e34c26" />,
  css: <FaCss3 color="#264de4" />,
  python: <FaPython color="#3776AB" />,
  php: <FaPhp color="#8892be" />,
  nodejs: <FaNodeJs color="#68a063" />,
  git: <FaGitAlt color="#f34f29" />,
  react: <FaReact color="#61dafb" />,
  bootstrap: <FaBootstrap color="#563d7c" />,
  flask: <SiFlask color="#000000" />,
  pandas: <SiPandas color="#150458" />,
  rubyonrails: <SiRubyonrails color="#cc0000" />,
  mongodb: <DiMongodb color="#4db33d" />,
  mysql: <DiMysql color="#00758f" />,
  ruby: <DiRuby color="#701516" />,
  postgresql: <BiLogoPostgresql color="#336791" />,
  javascript: <FaJsSquare color="#f0db4f" />,
  flutter: <FaFlutter color="#02569B" />,
  dart: <FaDartLang color="#0175C2" />,
  typescript: <SiTypescript color="#007acc" />,
  express: <SiExpress color="#000000" />,
};

export default function ProjectCard({
  imagem,
  titulo,
  descricao,
  github,
  linkedin,
  tecnologias = [],
  githubSecundario = "",
}) {
  return (
    <Card className="shadow-sm border-0 rounded-4 my-3 projeto-card">
      <Card.Img
        variant="top"
        src={imagem}
        style={{
          borderTopLeftRadius: "1rem",
          borderTopRightRadius: "1rem",
          height: "200px",
          objectFit: "cover",
        }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fw-bold">{titulo}</Card.Title>
        <Card.Text>{descricao}</Card.Text>

        <div className="mb-3 d-flex flex-wrap gap-2">
          {tecnologias.map((tech, idx) => (
            <Badge
              bg="light"
              text="dark"
              className="d-flex align-items-center gap-1 border"
              key={idx}
            >
              <span style={{ fontSize: "1.25rem" }}>
                {TecnologiaIcons[tech.toLowerCase()] || null}
              </span>
              {tech}
            </Badge>
          ))}
        </div>

        <div className="d-flex justify-content-end gap-3 mt-auto pt-2">
          {githubSecundario ? (
            <>
              <Button variant="outline-dark" size="sm" href={github} target="_blank">
                BackEnd <FaGithub style={{ fontSize: "1.25rem" }} />
              </Button>
              <Button variant="outline-dark" size="sm" href={githubSecundario} target="_blank">
                FrontEnd <FaGithub style={{ fontSize: "1.25rem" }} />
              </Button>
            </>
          ) : (
            <Button variant="outline-dark" size="sm" href={github} target="_blank">
              <FaGithub style={{ fontSize: "1.25rem" }} />
            </Button>
          )}

          {linkedin && (
            <Button variant="outline-primary" size="sm" href={linkedin} target="_blank">
              <FaLinkedin style={{ fontSize: "1.25rem" }} />
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
