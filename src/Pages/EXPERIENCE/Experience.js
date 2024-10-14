import React from "react";
import "./experience.css";
import { NavLink } from "react-router-dom";

const Experience = () => {
  return (
    <div className="experience">
      <h3 className="experience__title">1+ Years of Experience</h3>
      <div className="experience__links__div">
        <NavLink className="experience__links" to="#">
          Education
        </NavLink>
        <NavLink className="experience__links" to="/ProfessionalSkills">
          Professional Skills
        </NavLink>
        <NavLink className="experience__links" to="#">
          Experienceto
        </NavLink>
        <NavLink className="experience__links" to="#">
          Interview
        </NavLink>
      </div>
    </div>
  );
};

export default Experience;
