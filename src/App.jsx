import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./Componentes/Navbar/ThemeProvider";
import { Navbar } from "./Componentes/Navbar/Navbar";
import { Home } from "./Pages/Home/Home";
import { Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <Navbar />
        <Home />
        <Routes />
      </ThemeProvider>
    </Router>
  );
}

export default App;
