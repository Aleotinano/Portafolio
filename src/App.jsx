import React from "react";
import { ThemeProvider } from "./Componentes/Navbar/ThemeProvider";

import { Navbar } from "./Componentes/Navbar/Navbar";
import { Home } from "./Pages/Home/Home";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Home />
    </ThemeProvider>
  );
}

export default App;
