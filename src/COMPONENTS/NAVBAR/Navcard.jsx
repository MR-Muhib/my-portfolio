import React from "react";
import image from "../image/Muhib-Photo.png";
import "./Navcard.css";
import { Link } from "react-router-dom";

const Navcard = () => {
  return (
    <div className="container">
      <img className="card__image" src={image} alt="card__image" />
      <p className="pera">
        I'm professional Web Developer I have a strong background in web
        development, having worked as both a front-end and back-end developer
        for several years. My skills include HTML, CSS, JavaScript, ReactJS,
        NodeJS, ExpressJS, and MongoDB. I am also familiar with popular
        frameworks such as Bootstrap and Laravel.
      </p>
      <div className="aside__links">
        <Link to="/" className="links">
          Home
        </Link>
        <Link to="/features" className="links">
          Features
        </Link>
        <Link to="/resume" className="links">
          Resume
        </Link>
        <Link to="/blog" className="links">
          blog
        </Link>
        <Link to="/contact" className="links">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navcard;
