import React from "react";
import TypewriterEffect from "react-typewriter-effect";
import homecss from "./homecss.module.css";
import Avatar from "../../assets/Avatarpicture.png";
import { Habilities } from "./Habilities/Habilities";

export const Home = () => {
  return (
    <div className={homecss.HomeContainer}>
      <div className={homecss.AvatarContainer}>
        <div className={homecss.HomeTitles}>
          <TypewriterEffect
            startDelay={10}
            cursorColor="var(--background-letters)"
            text="Hola Soy Alejandro"
            typeSpeed={20}
            hideCursorAfterText={true}
          />

          <TypewriterEffect
            startDelay={400}
            cursorColor="var(--background-letters)"
            text="Desarrollador Frontend"
            typeSpeed={20}
            hideCursorAfterText={false}
          />
        </div>

        <img src={Avatar} alt="Avatar" className={homecss.Avatar} />
      </div>

      <div className={homecss.HabilitiesAboutMeContainer}>
        <Habilities />
      </div>
    </div>
  );
};
