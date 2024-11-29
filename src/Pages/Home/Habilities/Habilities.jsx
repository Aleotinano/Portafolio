import React from "react";
import Hablitiescss from "./Habilitiescss.module.css";
import "../../../styles/variables.css";
import { Link } from "react-router-dom";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaBootstrap,
  FaGitAlt,
  FaNodeJs,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { DiPhotoshop } from "react-icons/di";
import { BiLogoVisualStudio, BiLogoAdobe } from "react-icons/bi";
import { CgTrello } from "react-icons/cg";
import { HabilitiesCard } from "../../../Componentes/HabilitiesCard/HabilitiesCard";

export const Habilities = () => {
  return (
    <div className={Hablitiescss.HablitiesContainer}>
      <HabilitiesCard
        keytitle={"keytitle1"}
        contentkey={"contentkey1"}
        CardContainer={Hablitiescss.AboutMeContainer}
        TextStyle={Hablitiescss.Titleh3}
        text={"< Sobre mi />"}
        ContentContainer={Hablitiescss.AboutMeContent}
        Content={[
          <p key="about-1">¡Hola! Soy Alejandro 👋</p>,
          <p key="about-2">
            🛠️ Desarrollador frontend con experiencia en el diseño y desarrollo
            de páginas y aplicaciones web, creando interfaces intuitivas,
            funcionales y modernas. Trabajo con tecnologias como:
          </p>,
          <ul key="about-3" className={Hablitiescss.Lenguajes}>
            <li key="lang-1">HTML</li>
            <li key="lang-2">CSS</li>
            <li key="lang-3">JavaScript</li>
            <li key="lang-4">React</li>
          </ul>,
          <p key="about-4">
            🌟 Mi objetivo es mejorar la experiencia del usuario mediante
            soluciones creativas y efectivas para cada desafío. Me comprometo
            con el aprendizaje continuo, explorando nuevas herramientas y
            tecnologías para crecer profesionalmente y aportar mayor valor a mis
            proyectos.
          </p>,
          <p key="about-5">
            💻 Estoy motivado por la oportunidad de aplicar mis conocimientos y
            habilidades en nuevos proyectos, contribuyendo al éxito de los
            equipos de trabajo mientras continúo aprendiendo y evolucionando
            profesionalmente.
          </p>,
          <p key="about-6">
            👉 Si necesitas ayuda con tu proyecto o quieres crear una página
            web, no dudes en contactarme. Estoy aquí para colaborar y aportar
            soluciones.
          </p>,
          <ul key="about-7" className={Hablitiescss.Contactos}>
            <li>
              <p>¡Hablemos!</p>
            </li>
            <li>
              <a href="https://wa.me/1234567890">
                <FaWhatsapp className="icon" key="insta" title="Instagram" />
              </a>
              <a href="mailto:alejandrootiano2@gmail.com?body=Hola%20Alejandro">
                <MdOutlineEmail className="icon" key="email" title="Email" />
              </a>
            </li>
          </ul>,
        ]}
      />

      <div className={Hablitiescss.CardsContainer}>
        <HabilitiesCard
          keytitle={"keytitle2"}
          contentkey={"contentkey2"}
          CardContainer={Hablitiescss.CardContainer}
          TextStyle={Hablitiescss.Titleh3}
          text={"< Herramientas />"}
          ContentContainer={Hablitiescss.Icons}
          Content={[
            <BiLogoAdobe className="icon" key="tool-1" />,
            <DiPhotoshop className="icon" key="tool-2" />,
            <CgTrello className="icon" key="tool-3" />,
            <FaGithub className="icon" key="tool-4" />,
            <BiLogoVisualStudio className="icon" key="tool-5" />,
            <FaGitAlt className="icon" key="tool-6" />,
            <FaNodeJs className="icon" key="tool-7" />,
          ]}
        />
        <HabilitiesCard
          keytitle={"keytitle3"}
          contentkey={"contentkey3"}
          CardContainer={Hablitiescss.CardContainer}
          TextStyle={Hablitiescss.Titleh3}
          text={"< Tecnologias />"}
          ContentContainer={Hablitiescss.Icons}
          Content={[
            <FaReact className="icon" key="tech-1" />,
            <FaHtml5 className="icon" key="tech-2" />,
            <FaCss3Alt className="icon" key="tech-3" />,
            <FaJs className="icon" key="tech-4" />,
            <FaBootstrap className="icon" key="tech-5" />,
          ]}
        />

        <HabilitiesCard
          keytitle={"keytitle4"}
          contentkey={"contentkey4"}
          CardContainer={Hablitiescss.CardContainer}
          TextStyle={Hablitiescss.Titleh3}
          text={"< Proyectos />"}
          ContentContainer={Hablitiescss.SpanContent}
          Content={[
            <Link
              to="https://github.com/Aleotinano/DaFood-Frontend"
              key="project-1"
              className={Hablitiescss.Proyect}
            >
              <p key="project-p-1" className={Hablitiescss.textanimated}>
                Da Food
              </p>
              <FaGithub
                className={`icon ${Hablitiescss.iconanimated} `}
                key="github-dafood"
              />
            </Link>,
            <Link
              to="https://github.com/Aleotinano/Portfolio"
              key="project-2"
              className={Hablitiescss.Proyect}
            >
              <p key="project-p-2" className={Hablitiescss.textanimated}>
                Portafolio
              </p>
              <FaGithub
                className={`icon ${Hablitiescss.iconanimated} `}
                key="github-portfolio"
              />
            </Link>,
          ]}
        />

        <HabilitiesCard
          keytitle={"keytitle5"}
          contentkey={"contentkey5"}
          CardContainer={Hablitiescss.CardContainer}
          TextStyle={Hablitiescss.Titleh3}
          text={"< Formacion />"}
          Icons={Hablitiescss.Icons}
          Content={[
            <h4 key="edu-1" className={Hablitiescss.Titleh4}>
              Autodidacta
            </h4>,
            <p key="edu-1-p">
              Mis conocimientos como programador los he adquirido de manera
              autodidacta, a través de la práctica constante, el estudio
              independiente y la realización de proyectos personales, lo que me
              ha permitido dominar diversas tecnologías y herramientas.
            </p>,
          ]}
        />
      </div>
    </div>
  );
};
