import React from "react";
import "./contact.css";

const ContactForm = () => {
  return (
    <div>
      <form className="contact__form">
        <div className="contact__input__div">
          <label className="contact__labels" htmlFor="name">
            Name:{" "}
          </label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="contact__input__div">
          <label className="contact__labels" htmlFor="email">
            Email:{" "}
          </label>
          <input type="email" id="email" name="email" />
        </div>

        <div className="contact__input__div">
          <label className="contact__labels" htmlFor="subject">
            Subject:{" "}
          </label>
          <input type="text" id="subject" name="subject" />
        </div>
        <div className="contact__input__div">
          <label className="contact__labels" htmlFor="subject">
            Your message:{" "}
          </label>
          <textarea rows="4" cols="50" />
        </div>
        <button className="contact__button">sand message</button>
      </form>
    </div>
  );
};

export default ContactForm;
