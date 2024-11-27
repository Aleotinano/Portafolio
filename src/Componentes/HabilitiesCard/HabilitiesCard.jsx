import React from "react";

export const HabilitiesCard = ({ Hablities, text, Icons, Content }) => {
  return (
    <div className={Hablities}>
      <div>
        <h3>{text}</h3>
      </div>
      <div className={Icons}>{Content}</div>
    </div>
  );
};
