import React from "react";
import TypewriterEffect from "react-typewriter-effect";

export const TypeWriter = ({
  startDelay,
  cursorColor,
  text,
  typeSpeed,
  hideCursorAfterText,
}) => {
  return (
    <TypewriterEffect
      startDelay={startDelay}
      cursorColor={cursorColor}
      text={text}
      typeSpeed={typeSpeed}
      hideCursorAfterText={hideCursorAfterText}
    />
  );
};
