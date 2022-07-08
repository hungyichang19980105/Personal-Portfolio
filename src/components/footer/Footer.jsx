import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Portfolio Website
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experiences">Skills</a>
        </li>
        <li>
          <a href="#work">Work Experiences</a>
        </li>
        <li>
          <a href="#portfolio">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
