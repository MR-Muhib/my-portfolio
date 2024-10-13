import React, { useState } from "react";
import { FaAlignJustify } from "react-icons/fa6";
import image from "../image/Muhib-Photo.png";
import "./Navbar.css";
import Navcard from "../../COMPONENTS/NAVBAR/Navcard";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const HandleClick = () => {
    setToggle(!toggle);
  };
  return (
    <div className="navbar__div">
      <img className="logo_image" src={image} alt="logo__image" />
      <FaAlignJustify className="fa_justify" onClick={HandleClick} />
      {toggle && <Navcard />}
    </div>
  );
};

export default Navbar;
