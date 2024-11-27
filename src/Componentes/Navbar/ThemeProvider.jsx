import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);

  const toggleChangueTheme = () => setTheme(!theme);

  useEffect(() => {
    const themeClass = theme ? "darktheme" : "lighttheme";
    document.documentElement.className = themeClass;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleChangueTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
