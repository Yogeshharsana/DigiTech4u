import React, { useState } from "react";
import "./header.css";
import logo from "./H.png"

const Header = () => {
  // Change Background Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    // when the scroll is higher than 200 viewport height, add
    // the scroll_header class to a tag with the header tag
    if (this.scrollY >= 80) {
      header.classList.add("scroll_header");
    } else {
      header.classList.remove("scroll_header");
    }
  });
  // Toogle Mneu
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav_logo">
        <img src={logo} alt="" className="logo-nav" />
        </a>

        <div className={Toggle ? "nav_menu show_menu" : "nav_menu"}>
          <ul className="nav_list grid">
            <li className="nav_item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav_link active_link" : "nav_link"
                }
              >
                <i className="uil uil-estate nav_icon"></i>
                Home
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav_link active_link" : "nav_link"
                }
              >
                <i className="uil uil-user nav_icon"></i>
                About
              </a>
            </li>

            
            <li className="nav_item">
              <a
                href="#services"
                onClick={() => setActiveNav("#services")}
                className={
                  activeNav === "#services"
                    ? "nav_link active_link"
                    : "nav_link"
                }
              >
                <i className="uil uil-briefcase-alt nav_icon"></i>
                Services
              </a>
            </li>

            

            <li className="nav_item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact" ? "nav_link active_link" : "nav_link"
                }
              >
                <i className="uil uil-message nav_icon"></i>
                Contact
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav_close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>
        <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
