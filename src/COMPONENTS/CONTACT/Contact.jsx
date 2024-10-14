import React from "react";
import "./contact.css";
import ContactForm from "./ContactForm";
import Backbtn from "../BACK-BUTTON/Backbtn";

const Contact = () => {
  return (
    <div className="contact__div">
      <div className="contact__card">
        <img
          className="contact__img"
          src="https://rainbowit.net/html/inbio/assets/images/contact/contact1.png"
          alt="img"
        />
        <h1 className="contact__title">Contact me </h1>
        <h4 content="contact__name">Muhibur Rahman.</h4>
        <p className="contact__disc">
          I am available for freelance work. Connect with me via and call in to
          my account.
        </p>
        <p className="contact__num">Phone: +01 741 877 607</p>
        <p className="contact__email">Email: mrmuhib300@gmail.com</p>
      </div>
      <ContactForm />

      <Backbtn />
    </div>
  );
};

export default Contact;
