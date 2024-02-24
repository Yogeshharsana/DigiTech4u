import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Preloader.css"; // Import CSS file for styling
import logogif from "./logo animated.gif";

const Preloader = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading delay (you can replace this with actual loading logic)
    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 3000); // Adjust the delay time as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.div
      className={`preloader ${loaded ? "loaded" : ""}`}
      initial={{ opacity: 1 }}
      animate={{ opacity: loaded ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Your logo as GIF */}
      <motion.img
        src={logogif}
        alt="Logo"
        className="logo"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
      {/* Text */}
      <motion.p
        className="text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.span
          key="empowering"
          style={{ display: "inline-block" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >Empowering</motion.span> <motion.span
          key="businesses"
          style={{ display: "inline-block" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >businesses</motion.span>{" "}
        <motion.span
          key="digitally"
          style={{ display: "inline-block" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >digitally</motion.span>!
      </motion.p>
    </motion.div>
  );
};

export default Preloader;
