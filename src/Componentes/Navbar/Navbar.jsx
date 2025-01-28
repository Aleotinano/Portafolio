import React, { useState } from "react";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdOutlineWbSunny,
} from "react-icons/md";
import { FaFileDownload, FaLinkedin } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import { FaGithub, FaRegMoon } from "react-icons/fa";
import { useTheme } from "./ThemeProvider";
import { useTranslation } from "react-i18next";
import "../../styles/variables.css";
import navbarcss from "./navbarcss.module.css";
import Cves from "../../assets/CV-Alejandro-Otiñano-Español.pdf";
import Cven from "../../assets/CV-Alejandro-Otiñano-English.pdf";
import i18n from "../Lenguajes/i18n";
import Flag from "react-world-flags";

export function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [lang, setLang] = useState("es");
  const { theme, toggleChangueTheme } = useTheme();
  const { t } = useTranslation();

  const handleLanguageChange = () => {
    const newLang = lang === "es" ? "en" : "es";
    setLang(newLang);
    i18n.changeLanguage(newLang);
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
          title={t("navHome")}
        >
          {isCollapsed ? (
            <MdKeyboardDoubleArrowRight className="icon" />
          ) : (
            <MdKeyboardDoubleArrowLeft className="icon" />
          )}
          {t("navHome")}
        </li>
        <a href="https://github.com/Aleotinano">
          <li className={navbarcss.item} title="GitHub">
            <FaGithub className="icon" />
            GitHub
          </li>
        </a>

        <a href="https://www.linkedin.com/in/aleotinano">
          <li className={navbarcss.item} title="Linkedin">
            <FaLinkedin className="icon" />
            Linkedin
          </li>
        </a>

        <a href="https://es.fiverr.com/aleotinano?public_mode=true">
          <li className={navbarcss.item} title="GitHub">
            <TbBrandFiverr className="icon" />
            Fiverr
          </li>
        </a>

        <a
          href={lang === "es" ? Cves : Cven}
          download={lang === "es" ? Cves : Cven}
          className={navbarcss.item}
          title={t("navDowloadCv")}
        >
          <FaFileDownload className="icon" />
          {t("navDowloadCv")}
        </a>

        <li
          className={navbarcss.item}
          onClick={toggleChangueTheme}
          title={t("navTheme")}
        >
          {!theme ? (
            <FaRegMoon className="icon" />
          ) : (
            <MdOutlineWbSunny className="icon" />
          )}
          {t("navTheme")}
        </li>

        <li
          className={navbarcss.item}
          onClick={handleLanguageChange}
          title={t("navLenguage")}
        >
          {lang === "es" ? (
            <Flag code="ES" className="icon" />
          ) : (
            <Flag code="US" className="icon" />
          )}

          {t("navLenguage")}
        </li>
      </ul>
    </aside>
  );
}
