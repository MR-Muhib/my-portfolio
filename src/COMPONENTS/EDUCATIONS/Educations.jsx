import React from "react";
import "./education.css";
import { Link } from "react-router-dom";

const Educations = () => {
  return (
    <div className="education__hader__div">
      <p className="education__title">2017 - 2024</p>
      <h1 className="education__hader">Education Quality</h1>

      <div className="educaton">
        <div className="education__side__bar">
          <div className="education__side__bar__circle"></div>
        </div>
        <div className="education__side__bar__horizontal"></div>
        <div className="education__content__div">
          <h2 className="certificate">Full Stack Web Development</h2>
          <p>2024</p>
          <p>Interactive Cares</p>
          <p>CCP - MERN B03</p>
        </div>
      </div>

      <div className="educaton">
        <div className="education__side__bar">
          <div className="education__side__bar__circle"></div>
        </div>
        <div className="education__side__bar__horizontal"></div>
        <div className="education__content__div">
          <h2 className="certificate">Secondary School Certificate (SSC)</h2>
          <p>2017-2018</p>
          <p>Business Studies</p>
          <p>Pourosova Adarsha High School.</p>
        </div>
      </div>

      <div className="educaton">
        <div className="education__side__bar">
          <div className="education__side__bar__circle"></div>
        </div>
        <div className="education__side__bar__horizontal"></div>
        <div className="education__content__div">
          <h2 className="certificate">
            Higher Secondary School Certificate (SSC)
          </h2>
          <p>2019-2020</p>
          <p>Business Studies</p>
          <p>Syed Shah Mostofa College.</p>
        </div>
      </div>

      <div className="educaton">
        <div className="education__side__bar">
          <div className="education__side__bar__circle"></div>
        </div>
        <div className="education__side__bar__horizontal"></div>
        <div className="education__content__div">
          <h2 className="certificate">Bachelor of Social Science</h2>
          <p>202021-2024</p>
          <p>Social Science</p>
          <p>Moulvibazar Gov't College.</p>
        </div>
      </div>

      <Link to="/" className="back__home__page">
        Back to home page
      </Link>
    </div>
  );
};

export default Educations;
