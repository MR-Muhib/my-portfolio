import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/HomePage/Homepage";
import Navbar from "./Pages/Navbar/Navbar";
import SocialCard from "./COMPONENTS/HOME/SocialCard";
import Experience from "./Pages/EXPERIENCE/Experience";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Homepage />
        <SocialCard />
        <Experience />
      </BrowserRouter>
    </>
  );
}

export default App;
