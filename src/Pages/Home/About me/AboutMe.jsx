import React from "react";
import aboutmecss from "./aboutmecss.module.css";
import "../../../styles/variables.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export const AboutMe = () => {
  return (
    <div className={aboutmecss.AboutMeContainer}>
      <h2>{" <h2> About Me </h2>"}</h2>
      <p>¡Hola! Soy Alejandro 👋</p>
      <p>
        Soy un desarrollador frontend apasionado por crear interfaces modernas,
        atractivas y funcionales. Manejo tecnologías como:
      </p>

      <ul>
        <li> HTML 🟠</li>
        <li>CSS 🟦</li>
        <li>Javascript</li>
        <li>React 💙</li>
      </ul>

      <p>
        🌟 Mi objetivo es combinar diseño y funcionalidad para crear
        experiencias de usuario memorables. Siempre estoy aprendiendo nuevas
        tecnologías y buscando soluciones innovadoras para desafíos complejos.
      </p>
      <p>
        💻 Actualmente, estoy en búsqueda de nuevas oportunidades para colaborar
        en proyectos interesantes. ¡Hablemos!
      </p>
      <ul className={aboutmecss.Contactos}>
        <li>
          <FaInstagram className="icon" title="Instaram" />
        </li>
        <li>
          <FaWhatsapp className="icon" title="Whasapp" />
        </li>
        <li>
          <MdOutlineEmail className="icon" title="Email" />
        </li>
      </ul>
    </div>
  );
};
