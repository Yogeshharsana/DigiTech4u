import React from "react";
import "./about.css";
import Info from "./Info";
import aboutUsimg from "../../assets/About us.png"

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section_title">About Us</h2>

      <div className="about_container container grid">
        <img
          src={aboutUsimg}
          alt=""
          className="about_img"
        />

        <div className="about_data">
          <Info />

          <p className="about_description">
            Welcome to YH Global Digital & IT Solutions Pvt Ltd! We're
            passionate about blending cutting-edge technology with creative
            solutions to empower businesses in the digital age. With expertise
            in IT solutions and digital marketing, We're committed to delivering
            excellence and driving success for our clients. Join us on the
            journey of innovation and digital transformation.
          </p>

          
        </div>
      </div>
    </section>
  );
};

export default About;
