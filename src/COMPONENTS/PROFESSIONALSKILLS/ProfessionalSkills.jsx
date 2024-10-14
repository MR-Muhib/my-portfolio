import React from "react";
import "./skills.css";
import { Link } from "react-router-dom";

const ProfessionalSkills = () => {
  return (
    <div className="skills__div">
      <p className="skills__pera">Features</p>
      <h1 className="skills__title">Professional Skills</h1>
      {/* //? Skills Bar Start */}

      <div className="professional__skills">
        <div>
          <p className="skills__bir__title">HTML</p>
          <div className="parent__bar">
            <div className="child__bar"></div>
          </div>
        </div>

        <div>
          <p className="skills__bir__title__css">CSS</p>
          <div className="parent__bar__css">
            <div className="child__bar__css"></div>
          </div>
        </div>

        <div>
          <p className="skills__bir__title__js">JavaScript</p>
          <div className="parent__bar__js">
            <div className="child__bar__js"></div>
          </div>
        </div>

        <div>
          <p className="skills__bir__title__react">React</p>
          <div className="parent__bar__react">
            <div className="child__bar__react"></div>
          </div>
        </div>

        <div>
          <p className="skills__bir__title__nodejs">NodeJS</p>
          <div className="parent__bar__nodejs">
            <div className="child__bar__nodejs"></div>
          </div>
        </div>

        <div>
          <p className="skills__bir__title__express">ExpressJS</p>
          <div className="parent__bar__express">
            <div className="child__bar__express"></div>
          </div>
        </div>

        <div>
          <p className="skills__bir__title__db">MongoDB</p>
          <div className="parent__bar__db">
            <div className="child__bar__db"></div>
          </div>
        </div>
      </div>

      <h3 className="footer__title">
        Further Extra capabilities include various frameworks such as Tailwind
        CSS and bootstrap.
      </h3>
      <Link className="homepage__btn" to="/">
        Go to home pages
      </Link>
    </div>
  );
};

export default ProfessionalSkills;
