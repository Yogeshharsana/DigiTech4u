import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">YH Global</h1>

        <ul className="footer_list">
          <li>
            <a href="#home" className="footer_link">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer_link">
              Projects
            </a>
          </li>

        </ul>

        <div className="footer_social">
          <a
            href="https://www.instagram.com/yogesh_gurjar_harshana/"
            className="footer_social_link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-instagram"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/yogeshharsana/"
            className="footer_social_link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-linkedin-alt"></i>
          </a>

          <a
            href="https://github.com/yogeshharsana"
            className="footer_social_link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-github-alt"></i>
          </a>
        </div>

        <span className="footer_copy">Designed and Developed with ❤️ by YH Digital and IT solutions pvt. ltd.</span>
      </div>
    </footer>
  );
};

export default Footer;
