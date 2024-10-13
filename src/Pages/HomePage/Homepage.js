import React from "react";
import photo from "../image/muhib_photo.PNG";
import "./homepage.css";
import Homecard from "../../COMPONENTS/HOME/Homecard";
const Homepage = () => {
  return (
    <>
      <main className="main__container">
        <div className="image__background">
          <img src={photo} alt="muhib-photo" />
        </div>
      </main>
      <Homecard />
    </>
  );
};

export default Homepage;
