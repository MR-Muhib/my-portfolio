import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Pages/Navbar/Navbar";
import ProfessionalSkills from "./COMPONENTS/PROFESSIONALSKILLS/ProfessionalSkills";
import Homepage from "./Pages/HomePage/Homepage";
import Educations from "./COMPONENTS/EDUCATIONS/Educations";
import Contact from "./COMPONENTS/CONTACT/Contact";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ProfessionalSkills" element={<ProfessionalSkills />} />
        <Route path="/Educations" element={<Educations />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
