import React, { useState } from "react";
import { servicesData } from "../../constants/SkillsData";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section_title">Services</h2>
      <span className="section_subtitle">What We offer</span>

      <div className="services_container container grid">
        {servicesData.map((service, index) => (
          <div key={index} className="services_content">
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

              <div
                className={
                  toggleState === index + 1
                    ? "services_modal active_modal"
                    : "services_modal"
                }
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
