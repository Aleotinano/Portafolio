import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdOutlineWbSunny,
} from "react-icons/md";
import { FaFileDownload } from "react-icons/fa";

import { AiOutlineHome } from "react-icons/ai";
import { FaGithub, FaRegMoon } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { useTheme } from "./ThemeProvider";
import "../../styles/variables.css";
import navbarcss from "./navbarcss.module.css";
import Cv from "../../assets/Curriculum Vitae Alejandro Otiñano.pdf";

export function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const { theme, toggleChangueTheme } = useTheme();

  const [Dowload, setDowload] = useState(0);

  const toggleChangue = () => {
    setDowload(Dowload);
    console.log("Descargando CV " & Dowload.leght);
  };

  return (
    <aside
      className={`${navbarcss.NavContainer} ${
        isCollapsed ? navbarcss["NavCollapsed"] : navbarcss["NavExpanded"]
      }`}
    >
      <ul className={navbarcss.AsideMenu}>
        <li
          className={navbarcss.item}
          onClick={() => setIsCollapsed(!isCollapsed)}
          title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          {isCollapsed ? (
            <MdKeyboardDoubleArrowRight className="icon" />
          ) : (
            <MdKeyboardDoubleArrowLeft className="icon" />
          )}
          Portafolio
        </li>
        <Link to="/">
          <li className={navbarcss.item} title="Home">
            <AiOutlineHome className="icon" />
            Home
          </li>
        </Link>
        <a href="https://github.com/Aleotinano/DaFood-Frontend">
          <li className={navbarcss.item} title="Proyectos">
            <FaCode className="icon" />
            Proyectos
          </li>
        </a>
        <a href="https://github.com/Aleotinano">
          <li className={navbarcss.item} title="GitHub">
            <FaGithub className="icon" />
            GitHub
          </li>
        </a>
        <li
          className={navbarcss.item}
          onClick={toggleChangueTheme}
          title="Theme"
        >
          {!theme ? (
            <FaRegMoon className="icon" />
          ) : (
            <MdOutlineWbSunny className="icon" />
          )}
          Theme
        </li>
        <a
          href={Cv}
          download={Cv}
          className={navbarcss.item}
          onClick={toggleChangue}
          title="Descargar Curriculum Vitae"
        >
          <FaFileDownload className="icon" />
          Descarga CV
        </a>
      </ul>
    </aside>
  );
}
