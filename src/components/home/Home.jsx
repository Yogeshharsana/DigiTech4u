import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import Slider from "./Slider";
import { Link } from "react-scroll";

const Home = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const homeSection = document.getElementById("home");
      const homeSectionTop = homeSection.offsetTop;
      const homeSectionHeight = homeSection.offsetHeight;

      if (
        currentScroll > homeSectionTop - window.innerHeight + homeSectionHeight / 2
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
    <section className="home section" id="home">
      <div className="home_container container grid">
        <motion.div
          className="home_content grid"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <Social />
          <div className="home_img"></div>
          <Data />
        </motion.div>
        <div>
          <Slider />
        </div>
        <ScrollDown />
      </div>
      <Link
        to="home"
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

export default Home;
