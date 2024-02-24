import React, { useState } from "react";
import  { useRef,useEffect } from "react";
import { motion } from "framer-motion";
import { FiMousePointer } from "react-icons/fi";
import { servicesData } from "../../constants/SkillsData";
import "./services.css";
import { Link } from "react-scroll";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const servicesSection = document.getElementById("services");
      const servicesSectionTop = servicesSection.offsetTop;
      const servicesSectionHeight = servicesSection.offsetHeight;

      if (
        currentScroll > servicesSectionTop - window.innerHeight + servicesSectionHeight / 2
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
    <section className="services section" id="services">
      <h2 className="section_title">Services</h2>
      <span className="section_subtitle">What We offer</span>

      <div className="services_container container grid">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            className="services_content"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div>
              <i className={service.icon + " services_icon"}></i>
              <h3 className="services_title">{service.title.replace(' ', '\n')}</h3>

              <span
                className="services_button"
                onClick={() => toggleTab(index + 1)}
              >
                View More
                <i className="uil uil-arrow-right services_button_icon"></i>
              </span>

              <motion.div
                className={
                  toggleState === index + 1
                    ? "services_modal active_modal"
                    : "services_modal"
                }
                initial={{ opacity: 0 }}
                animate={toggleState === index + 1 ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="services_modal_content">
                  <i
                    onClick={() => toggleTab(0)}
                    className="uil uil-times services_modal_close"
                  ></i>

                  <h3 className="services_modal_title">{service.title}</h3>
                  <p className="services_modal_description">
                    {service.description}
                  </p>

                  <ul className="services_modal_services grid">
                    {service.services.map((item, itemIndex) => (
                      <li key={itemIndex} className="services_modal_service">
                        <i className="uil uil-check-circle services_modal_icon"></i>
                        <p className="services_modal_info">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
      <Link
        to="services"
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

export default Services;



