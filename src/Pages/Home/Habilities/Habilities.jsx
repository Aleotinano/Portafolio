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
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { DiPhotoshop } from "react-icons/di";
import {
  BiLogoVisualStudio,
  BiLogoTailwindCss,
  BiLogoAdobe,
} from "react-icons/bi";
import { CgTrello } from "react-icons/cg";
import { HabilitiesCard } from "../../../Componentes/HabilitiesCard/HabilitiesCard";

export const Habilities = () => {
  return (
    <div className={Hablitiescss.HablitiesContainer}>
      <HabilitiesCard
        Hablities={Hablitiescss.AboutMeContainer}
        TextStyle={Hablitiescss.Titleh3}
        text={"< Sobre mi />"}
        Icons={Hablitiescss.AboutMeContent}
        Content={[
          <p key="about-1">¡Hola! Soy Alejandro 👋</p>,
          <p key="about-2">
            Soy un desarrollador frontend con una gran pasión por crear
            experiencias web que sean tanto funcionales como atractivas. Trabajo
            con tecnologias como:
          </p>,
          <ul key="about-3" className={Hablitiescss.Lenguajes}>
            <li key="lang-1">HTML</li>
            <li key="lang-2">CSS</li>
            <li key="lang-3">JavaScript</li>
            <li key="lang-4">React</li>
          </ul>,
          <p key="about-4">
            🌟 Mi objetivo siempre está en mejorar la experiencia del usuario,
            buscando soluciones creativas para cada desafío. Me mantengo en
            constante aprendizaje, explorando nuevas herramientas y tecnologías
            para seguir creciendo como profesional.
          </p>,
          <p key="about-5">
            💻 Estoy interesado en aplicar mis conocimientos y habilidades en
            nuevos proyectos, con el objetivo de contribuir al éxito de equipos
            de trabajo y seguir aprendiendo y creciendo profesionalmente.
          </p>,
          <ul key="about-6" className={Hablitiescss.SpanContent}>
            <span>¡Hablemos!</span>
            <span className={Hablitiescss.Contactos}>
              <FaInstagram className="icon" key="insta" title="Instagram" />
              <FaWhatsapp className="icon" key="whatsapp" title="Whatsapp" />
              <MdOutlineEmail className="icon" key="email" title="Email" />
            </span>
          </ul>,
        ]}
      />

      <div className={Hablitiescss.CardsContainer}>
        <HabilitiesCard
          Hablities={Hablitiescss.Hablities}
          TextStyle={Hablitiescss.Titleh3}
          text={"< Herramientas />"}
          Icons={Hablitiescss.Icons}
          Content={[
            <BiLogoAdobe className="icon" key="tool-1" />,
            <DiPhotoshop className="icon" key="tool-2" />,
            <CgTrello className="icon" key="tool-3" />,
            <FaGithub className="icon" key="tool-4" />,
            <BiLogoVisualStudio className="icon" key="tool-5" />,
          ]}
        />
        <HabilitiesCard
          Hablities={Hablitiescss.Hablities}
          TextStyle={Hablitiescss.Titleh3}
          text={"< Tecnologias />"}
          Icons={Hablitiescss.Icons}
          Content={[
            <FaReact className="icon" key="tech-1" />,
            <FaHtml5 className="icon" key="tech-2" />,
            <FaCss3Alt className="icon" key="tech-3" />,
            <FaJs className="icon" key="tech-4" />,
            <FaBootstrap className="icon" key="tech-5" />,
          ]}
        />

        <HabilitiesCard
          Hablities={Hablitiescss.Hablities}
          TextStyle={Hablitiescss.Titleh3}
          text={"< Proyectos />"}
          Icons={Hablitiescss.Icons}
          Content={[
            <ul
              key="projects"
              className={`${Hablitiescss.SpanContent} ${Hablitiescss.Proyects}`}
            >
              <span>
                <Link
                  to="https://github.com/Aleotinano/DaFood-Frontend"
                  key="project-1"
                >
                  <p>Da Food</p>
                  <FaGithub className="icon" key="github-dafood" />
                </Link>
              </span>

              <span>
                <Link
                  to="https://github.com/Aleotinano/Portfolio"
                  key="project-2"
                >
                  <p>Portafolio</p>
                  <FaGithub className="icon" key="github-portfolio" />
                </Link>
              </span>
            </ul>,
          ]}
        />

        <HabilitiesCard
          Hablities={Hablitiescss.Hablities}
          TextStyle={Hablitiescss.Titleh3}
          text={"< Formacion />"}
          Icons={Hablitiescss.Icons}
          Content={[
            <h4 key="edu-1" className={Hablitiescss.Titleh4}>
              Autodidacta
            </h4>,
            <p key="edu-2">
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
