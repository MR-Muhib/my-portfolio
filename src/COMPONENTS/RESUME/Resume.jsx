import React from "react";
import "./resume.css";
import image from "../image/Muhib-Photo.png";
import ContactForm from "../../COMPONENTS/CONTACT/ContactForm.jsx";
import Backbtn from "../../COMPONENTS/BACK-BUTTON/Backbtn.jsx";
const Resume = () => {
  return (
    <div className="resume__div">
      <div className="resume__hader">
        <img className="resume__photo" src={image} alt="resume__photo" />
        <p className="resume__title">Muhibur Rahman</p>
        <p className="resume__subtitle">Web Developer</p>
      </div>

      <div className="resume__container">
        <div className="resume__left__div">
          <div className="resume__education">
            <h2 className="resume__education__title">Education</h2>
            <p className="resume__education__disc">
              Bachelor of Social Science
            </p>
            <p className="resume__education__university">
              Moulvibazar Gov't College
            </p>
            <p className="resume__education__university">2020 - 2024</p>
          </div>

          <div className="resume__education__experts">
            <h2 className="resume__education__title">Expertise</h2>
            <p className="resume__education__disc">JavaScript</p>
            <p className="resume__education__disc">React.js</p>
            <p className="resume__education__disc">Node.js</p>
            <p className="resume__education__disc">MongoDB</p>
            <p className="resume__education__disc">HTML</p>
            <p className="resume__education__disc">CSS</p>
            <p className="resume__education__disc">Bootstrap</p>
          </div>
        </div>

        <div className="resume__right__div">
          <div className="resume__content">
            <h2 className="resume__content__title">Summary</h2>
            <p className="resume__content__disc">
              I am a passionate Web developer with a strong background in
              programming languages such as Python, JavaScript, and React.js. I
              have a proven track record of developing innovative solutions that
              meet user needs.
            </p>
          </div>

          <div className="categories">
            <h2 className="categories__title">Categories</h2>
            <ul className="categories__list">
              <li>Web Development</li>
              <li>Mobile Development</li>
              <li>Data Science</li>
              <li>Digital Marketing</li>
            </ul>
          </div>

          <div className="service">
            <h2 className="service__title">Services</h2>
            <ul className="service__list">
              <li>Frontend Development</li>
              <li>Backend Development</li>
              <li>Mobile App Development</li>
              <li>Data Analysis</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="contacts__container">
        <h2 className="contacts__section">Contact Me For More Information</h2>
        <ContactForm />
      </div>
      <Backbtn />
    </div>
  );
};

export default Resume;
