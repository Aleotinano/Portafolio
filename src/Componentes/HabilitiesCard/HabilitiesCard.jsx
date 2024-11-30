import React from "react";

export const HabilitiesCard = ({
  Hablities,
  CardContainer,
  TextStyle,
  ContentContainer,
  text,
  Content,
}) => {
  return (
    <div className={CardContainer}>
      <h3 className={TextStyle}>{text}</h3>
      <div className={ContentContainer}>{Content}</div>
    </div>
  );
};
