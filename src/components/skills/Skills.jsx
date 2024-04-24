import React from "react";
import "./skills.css";
import TechnicalSkills from "./TechnicalSkills";
import OtherSkills from "./OtherSkills";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section_title">Tech & Tool</h2>
      <span className="section_subtitle">We specialize in</span>

      <div className="skills_container container grid">
        <TechnicalSkills />
        <OtherSkills />
      </div>
    </section>
  );
};

export default Skills;
