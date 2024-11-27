import React, { useState } from "react";
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
import Avatar from "../../assets/LJ LO-FI.jpeg";
import navbarcss from "./navbarcss.module.css";

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

        <li className={navbarcss.item} title="Home">
          <AiOutlineHome className="icon" />
          Home
        </li>

        <li className={navbarcss.item} title="Proyectos">
          <FaCode className="icon" />
          Proyectos
        </li>

        <li className={navbarcss.item} title="GitHub">
          <FaGithub className="icon" />
          GitHub
        </li>

        <li className={navbarcss.item} title="About me">
          <img src={Avatar} alt="Avatar" className="icon" />
          About me
        </li>

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

        <li
          className={navbarcss.item}
          onClick={toggleChangue}
          title="Descargar Curriculum Vitae"
        >
          <FaFileDownload className="icon" />
          Descarga CV
        </li>
      </ul>
    </aside>
  );
}
