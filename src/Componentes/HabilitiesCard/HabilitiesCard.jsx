import React from "react";

export const HabilitiesCard = ({
  Hablities,
  text,
  Icons,
  Content,
  TextStyle,
}) => {
  return (
    <div className={Hablities}>
      <h3 className={TextStyle}>{text}</h3>
      <div className={Icons}>{Content}</div>
    </div>
  );
};
