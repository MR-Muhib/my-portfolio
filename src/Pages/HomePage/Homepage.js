import React from "react";
import photo from "../image/muhib_photo.PNG";
import "./homepage.css";
import Homecard from "../../COMPONENTS/SOCIALLINKS/Homecard";
import Animation from "../../COMPONENTS/ANIMATIONS/Animations";
import SocialCard from "../../COMPONENTS/SOCIALLINKS/SocialCard.jsx";
import Experience from "../../COMPONENTS/EXPERIENCE/Experience.js";
const Homepage = () => {
  return (
    <>
      <main className="main__container">
        <div className="image__background">
          <img src={photo} alt="muhib-photo" />
        </div>
      </main>
      <Homecard />
      <Animation />
      <SocialCard />
      <Experience />
    </>
  );
};

export default Homepage;
