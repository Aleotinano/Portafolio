import { Routes, Route } from "react-router-dom";
import Home from "../../../Portafolio";
import Cv from "../assets/Curriculum Vitae Alejandro Otiñano.pdf";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Cv" element={<Cv />} />
    </Routes>
  );
};
