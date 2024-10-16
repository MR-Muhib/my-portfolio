import { FaAlignJustify } from "react-icons/fa6";
import image from "../image/Muhib-Photo.png";
import "./Navbar.css";
import Navcard from "../../COMPONENTS/NAVBAR/Navcard";

import React, { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Listen for clicks outside the sidebar
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="navbar__div">
        {isOpen && (
          <div ref={sidebarRef} className="nav__div">
            <Navcard />
          </div>
        )}
        <img className="logo_image" src={image} alt="logo__image" />
        <div className="fa_justify" onClick={toggleSidebar}>
          {isOpen ? <FaAlignJustify /> : <FaAlignJustify />}
        </div>
      </div>
    </>
  );
};

export default Navbar;
