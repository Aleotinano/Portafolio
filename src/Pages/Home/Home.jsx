import React, { useEffect, useState } from "react";
import homecss from "./homecss.module.css";
import Avatar from "../../assets/profile-pic.png";
import { Habilities } from "./Habilities/Habilities";
import { TypeWriter } from "../../Componentes/TypewriterEffect/TypeWriter";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t, i18n } = useTranslation();
  const [key, setKey] = useState(0);

  useEffect(() => {
    const handleLanguageChange = () => setKey((prev) => prev + 1);
    i18n.on("languageChanged", handleLanguageChange);
    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n]);

  return (
    <div className={homecss.HomeContainer}>
      <div className={homecss.AvatarContainer}>
        <div className={homecss.HomeTitles} key={key}>
          <TypeWriter
            startDelay={10}
            cursorColor="var(--background-letters)"
            text={t("t1")}
            typeSpeed={20}
            hideCursorAfterText={true}
          />
          <TypeWriter
            startDelay={400}
            cursorColor="var(--background-letters)"
            text={t("t2")}
            typeSpeed={20}
            hideCursorAfterText={false}
          />
        </div>
        <img src={Avatar} alt="Avatar" className={homecss.Avatar} />
      </div>
      <Habilities />
    </div>
  );
};
