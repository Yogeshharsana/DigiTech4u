import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Info = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const infoSection = document.getElementById("info");
      const infoSectionTop = infoSection.offsetTop;
      const infoSectionHeight = infoSection.offsetHeight;

      if (
        currentScroll > infoSectionTop - window.innerHeight + infoSectionHeight / 2
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
    <div className="about_info grid" id="info">
      <motion.div
        className="about_box"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <i className="bx bx-award about_icon"></i>
        <h3 className="about_title">Personalized Service</h3>
        <span className="about_subtitle"></span>
      </motion.div>

      <motion.div
        className="about_box"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <i className="bx bx-briefcase-alt about_icon"></i>
        <h3 className="about_title">Completed</h3>
        <span className="about_subtitle">30 + Projects</span>
      </motion.div>

      <motion.div
        className="about_box"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <i className="bx bx-support about_icon"></i>
        <h3 className="about_title">Support</h3>
        <span className="about_subtitle">Online 24/7</span>
      </motion.div>
    </div>
  );
};

export default Info;
