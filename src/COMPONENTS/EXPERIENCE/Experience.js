import React from "react";
import "./experience.css";
import { NavLink } from "react-router-dom";
import ContactForm from "../CONTACT/ContactForm";

const Experience = () => {
  return (
    <div className="experience">
      <h3 className="experience__title">1+ Years of Experience</h3>
      <h1 className="resume">My Resume</h1>
      <div className="experience__links__div">
        <NavLink className="experience__links" to="/Educations">
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

      <ContactForm />
    </div>
  );
};

export default Experience;
