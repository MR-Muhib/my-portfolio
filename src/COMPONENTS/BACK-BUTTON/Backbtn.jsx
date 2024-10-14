import React from "react";
import "./backbtn.css";
import { Link } from "react-router-dom";

const Backbtn = () => {
  return (
    <div className="btn__div">
      <Link className="back__btn" to="/">Go to Home page</Link>
    </div>
  );
};

export default Backbtn;
