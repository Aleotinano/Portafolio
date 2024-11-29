import React from "react";

export const HabilitiesCard = ({
  CardContainer,
  text,
  ContentContainer,
  Content,
  TextStyle,
  keytitle,
  contentkey,
}) => {
  return (
    <div className={CardContainer}>
      <h3 className={TextStyle} key={keytitle}>
        {text}
      </h3>
      <div className={ContentContainer} key={contentkey}>
        {Content}
      </div>
    </div>
  );
};
