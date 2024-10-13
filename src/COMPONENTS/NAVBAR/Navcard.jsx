import React from "react";
import image from "../image/Muhib-Photo.png";
import "./Navcard.css";
import { NavLink } from "react-router-dom";

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
        <a className="links" href="#">Home</a>
        <a className="links" href="#">Features</a>
        <a className="links" href="#">Portfolio</a>
        <a className="links" href="#">Resume</a>
        <a className="links" href="#">blog</a>
        <a className="links" href="#">Contact</a>
      </div>
    </div>
  );
};

export default Navcard;
