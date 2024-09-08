import {
  FaHtml5,
  FaCss3,
  FaPython,
  FaPhp,
  FaNode,
  FaGit,
  FaReact,
  FaBootstrap,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiFlask, SiPandas, SiRubyonrails } from "react-icons/si";
import { DiMongodb, DiMysql, DiRuby } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";

export default function Tecnologias() {
  return (
    <div id="tecnologias">
      <div className="container">
        <h3>Tecnologias que tenho conhecimento:</h3>
        <div className="lista-tecnologias">
          <div>
            <FaHtml5 size={50} />
            <p>html</p>
          </div>
          <div>
            <FaCss3 size={50} />
            <p>CSS</p>
          </div>

          <div>
            <IoLogoJavascript size={50} />
            <p>Javascript</p>
          </div>

          <div>
            <FaNode size={50} />
            <p>NodeJs</p>
          </div>
          <div>
            <FaPython size={50} />
            <p>Python</p>
          </div>
          <div>
            <SiFlask size={50} />
            <p>Flask</p>
          </div>
          <div>
            <FaPhp size={50} />
            <p>PHP</p>
          </div>
          <div>
            <DiMysql size={50} />
            <p>MySQL</p>
          </div>
          <div>
            <FaReact size={50} />
            <p>ReactJs</p>
          </div>
          <div>
            <DiMongodb size={50} />
            <p>MongoDB</p>
          </div>
          <div>
            <DiRuby size={50} />
            <p>Ruby</p>
          </div>
          <div>
            <SiRubyonrails size={50} />
            <p>Rails</p>
          </div>
          <div>
            <BiLogoPostgresql size={50} />
            <p>PostgreSQL</p>
          </div>
          <div>
            <FaBootstrap size={50} />
            <p>Bootstrap</p>
          </div>
        </div>
      </div>
    </div>
  );
}
