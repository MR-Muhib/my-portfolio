import React from "react";
import "./homecatd.css";

const Homecard = () => {
  return (
    <div className="home__card__div">
      <h3 className="homecard__pera">Welcome to my world</h3>
      <h1 className="">
        Hi, I’m <span className="homecard__title">Muhibur Rahman a</span>{" "}
        Developer.
        {/* Professional Coder.Developer. */}
      </h1>
      <p className="home__card__desc">
        I'm professional Web Developer I have a strong background in web
        development, having worked as both a front-end and back-end developer
        for several years. My skills include HTML, CSS, JavaScript, ReactJS,
        NodeJS, ExpressJS, and MongoDB. I am also familiar with popular
        frameworks such as Bootstrap and Laravel.
      </p>
    </div>
  );
};

export default Homecard;
