import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/HomePage/Homepage";
import Navbar from "./Pages/Navbar/Navbar";
import SocialCard from "./COMPONENTS/SOCIALLINKS/SocialCard";
import Experience from "./Pages/EXPERIENCE/Experience";
import Animations from "./COMPONENTS/ANIMATIONS/Animations";
import ProfessionalSkills from "./COMPONENTS/PROFESSIONALSKILLS/ProfessionalSkills";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Homepage />
        <Animations />
        <SocialCard />
        <Experience />

        <Routes>
          <Route path="/ProfessionalSkills" element={<ProfessionalSkills />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
