import React from "react";
import "./socialcard.css";
import { FiFacebook } from "react-icons/fi";
import { GrLinkedinOption } from "react-icons/gr";
import { FiInstagram } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialCard = () => {
  return (
    <div className="social__links__div">
      <h3 className="social__title">find with me</h3>

      <Link
        className="social__links"
        href="https://www.facebook.com/"
        target="_blank"
      >
        <FiFacebook className="social__link" />
      </Link>
      <Link
        className="social__links"
        href="https://www.instagram.com/"
        target="_blank"
      >
        <FiInstagram className="social__link" />
      </Link>
      <Link
        className="social__links"
        href="https://www.linkedin.com/notifications/?filter=all"
        target="_blank"
      >
        <GrLinkedinOption className="social__link" />
      </Link>
      <Link
        className="social__links"
        href="https://github.com/MR-Muhib"
        target="_blank"
      >
        <FaGithub className="social__link" />
      </Link>
    </div>
  );
};

export default SocialCard;
