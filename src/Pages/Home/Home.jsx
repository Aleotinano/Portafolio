import React from "react";
import homecss from "./homecss.module.css";
import Avatar from "../../assets/Avatarpicture.png";
import { Habilities } from "./Habilities/Habilities";
import { TypeWriter } from "../../Componentes/TypeWriter/TypeWriter";

export const Home = () => {
  return (
    <div className={homecss.HomeContainer}>
      <div className={homecss.AvatarContainer}>
        <div className={homecss.HomeTitles}>
          <TypeWriter
            key="tw-1"
            startDelay={10}
            cursorColor={"var(--background-letters)"}
            text={"Hola Soy Alejandro"}
            typeSpeed={20}
            hideCursorAfterText={true}
          />

          <TypeWriter
            key="tw-2"
            startDelay={400}
            cursorColor={"var(--background-letters)"}
            text={"Desarrollador Frontend"}
            typeSpeed={20}
            hideCursorAfterText={true}
          />
        </div>

        <img src={Avatar} alt="Avatar" className={homecss.Avatar} />
      </div>

      <Habilities />
    </div>
  );
};
