import React from "react";
import Hablitiescss from "./Habilitiescss.module.css";
import "../../../styles/variables.css";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";

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
        Hablities={Hablitiescss.Hablities}
        text={"< Herramientas />"}
        Icons={Hablitiescss.Icons}
        Content={[
          <BiLogoAdobe className={Hablitiescss.Icon} />,
          <DiPhotoshop className={Hablitiescss.Icon} />,
          <CgTrello className={Hablitiescss.Icon} />,
          <FaGithub className={Hablitiescss.Icon} />,
          <BiLogoVisualStudio className={Hablitiescss.Icon} />,
        ]}
      />
      <HabilitiesCard
        Hablities={Hablitiescss.Hablities}
        text={"< Tecnologias />"}
        Icons={Hablitiescss.Icons}
        Content={[
          <DiPhotoshop className={Hablitiescss.Icon} />,
          <FaReact className={Hablitiescss.Icon} />,
          <FaHtml5 className={Hablitiescss.Icon} />,
          <FaCss3Alt className={Hablitiescss.Icon} />,
          <FaJs className={Hablitiescss.Icon} />,
          <FaBootstrap className={Hablitiescss.Icon} />,
          <BiLogoTailwindCss className={Hablitiescss.Icon} />,
        ]}
      />

      <HabilitiesCard
        Hablities={Hablitiescss.Hablities}
        text={"< Proyectos />"}
        Icons={Hablitiescss.Icons}
        Content={[
          <span>
            <p>Da Food</p>
            <FaGithub className={Hablitiescss.Icon} />
          </span>,

          <span>
            <p>Portafolio</p>
            <FaGithub className={Hablitiescss.Icon} />
          </span>,
        ]}
      />
    </div>
  );
};
