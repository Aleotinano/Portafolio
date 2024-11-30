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
  FaWhatsappSquare,
  FaLinkedin,
} from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import { MdOutlineMailOutline } from "react-icons/md";
import { DiPhotoshop } from "react-icons/di";
import { BiLogoVisualStudio, BiLogoAdobe } from "react-icons/bi";
import { CgTrello } from "react-icons/cg";
import { HabilitiesCard } from "../../../Componentes/HabilitiesCard/HabilitiesCard";
import { useTranslation } from "react-i18next";

export const Habilities = () => {
  const { t } = useTranslation();

  return (
    <div className={Hablitiescss.HablitiesContainer}>
      <HabilitiesCard
        keytitle={"keytitle1"}
        contentkey={"contentkey1"}
        CardContainer={Hablitiescss.AboutMeContainer}
        TextStyle={Hablitiescss.Titleh3}
        text={t("text1")}
        ContentContainer={Hablitiescss.AboutMeContent}
        Content={[
          <p key="about-1">{t("aboutMe1")}</p>,
          <p key="about-2">{t("aboutMe2")}</p>,
          <ul key="about-3" className={Hablitiescss.Lenguajes}>
            <li key="lang-1">HTML</li>
            <li key="lang-2">CSS</li>
            <li key="lang-3">JavaScript</li>
            <li key="lang-4">React</li>
          </ul>,
          <p key="about-4">{t("aboutMe3")}</p>,
          <p key="about-5">{t("aboutMe4")}</p>,
          <p key="about-6">{t("aboutMe5")}</p>,
          <ul key="about-7" className={Hablitiescss.Contactos}>
            <li>
              <p>{t("aboutMe6")}</p>
            </li>
            <li>
              <a href="https://wa.me/5492646779473">
                <FaWhatsappSquare
                  className="icon"
                  key="insta"
                  title="Instagram"
                />
              </a>
              <a href="https://www.linkedin.com/in/alejandro-otiñano-3882012ab">
                <FaLinkedin className="icon" key="Linkedin" title="Linkedin" />
              </a>
              <a href="https://es.fiverr.com/aleotinano?public_mode=true">
                <TbBrandFiverr className="icon" key="Fiverr" title="Fiverr" />
              </a>
              <a href="mailto:alejandrootiano2@gmail.com">
                <MdOutlineMailOutline
                  className="icon"
                  key="Gmail"
                  title="Gmail"
                />
              </a>
            </li>
          </ul>,
        ]}
      />

      <div className={Hablitiescss.CardsContainer}>
        <HabilitiesCard
          keytitle={"keytitle5"}
          contentkey={"contentkey5"}
          CardContainer={Hablitiescss.CardContainer}
          ContentContainer={Hablitiescss.AboutMeContent}
          TextStyle={Hablitiescss.Titleh3}
          text={t("text2")}
          Content={[
            <h4 key="edu-1" className={Hablitiescss.Titleh4}>
              {t("edu1")}
            </h4>,
            <p key="edu-1-p">{t("edu2")}</p>,
          ]}
        />
        <HabilitiesCard
          keytitle={"keytitle2"}
          contentkey={"contentkey2"}
          CardContainer={Hablitiescss.CardContainer}
          TextStyle={Hablitiescss.Titleh3}
          text={t("text3")}
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
          text={t("text4")}
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
          text={t("text5")}
          ContentContainer={Hablitiescss.Icons}
          Content={[
            <Link
              to="https://github.com/Aleotinano/DaFood-Frontend"
              key="project-1"
              className={Hablitiescss.Proyect}
            >
              <p key="project-p-1" className={Hablitiescss.textanimated}>
                DaFood
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
                {t("proyects1")}
              </p>
              <FaGithub
                className={`icon ${Hablitiescss.iconanimated} `}
                key="github-portfolio"
              />
            </Link>,
          ]}
        />
      </div>
    </div>
  );
};
