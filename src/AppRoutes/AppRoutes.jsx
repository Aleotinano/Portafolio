import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Cv from "../assets/Curriculum Vitae Alejandro Otiñano.pdf";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Cv" element={<Cv />} />
    </Routes>
  );
};
