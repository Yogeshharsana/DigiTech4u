import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./about.css";
import Info from "./Info";
import aboutUsimg from "../../assets/About us.png";
import { Link } from "react-scroll";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const aboutSection = document.getElementById("about");
      const aboutSectionTop = aboutSection.offsetTop;
      const aboutSectionHeight = aboutSection.offsetHeight;

      if (
        currentScroll > aboutSectionTop - window.innerHeight + aboutSectionHeight / 2
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="about section" id="about">
      <h2 className="section_title">About Us</h2>

      <div className="about_container container grid">
        <motion.img
          src={aboutUsimg}
          alt=""
          className="about_img"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        />

        <div className="about_data">
          <Info />

          <motion.p
            className="about_description"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            Welcome to YH Global Digital & IT Solutions Pvt Ltd! We're
            passionate about blending cutting-edge technology with creative
            solutions to empower businesses in the digital age. With expertise
            in IT solutions and digital marketing, We're committed to delivering
            excellence and driving success for our clients. Join us on the
            journey of innovation and digital transformation.
          </motion.p>
        </div>
      </div>
      <Link
        to="about"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="scroll-btn"
      >
        <i className="uil uil-mouse-alt"></i>
      </Link>
    </section>
  );
};

export default About;
