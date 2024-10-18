import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Pages/Navbar/Navbar";
import ProfessionalSkills from "./COMPONENTS/PROFESSIONALSKILLS/ProfessionalSkills";
import Homepage from "./Pages/HomePage/Homepage";
import Educations from "./COMPONENTS/EDUCATIONS/Educations";
import Contact from "./COMPONENTS/CONTACT/Contact";
import Resume from "./COMPONENTS/RESUME/Resume";
import Blog from "./COMPONENTS/BLOGS/Blog";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ProfessionalSkills" element={<ProfessionalSkills />} />
        <Route path="/Educations" element={<Educations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
