import { Routes, Route } from "react-router-dom";
import { Home, Projects, About, Contact } from "../pages/BarrelFile";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
};
export default AppRoutes;
