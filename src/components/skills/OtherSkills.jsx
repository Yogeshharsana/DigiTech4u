import React from "react";
import { otherSkills } from "../../constants/SkillsData";

const OtherSkills = () => {
  return (
    <div className="skills_content">
      <h3 className="skills_title"></h3>

      <div className="skills_box">
        {otherSkills.map((skill, index) => (
          <div key={index} className="skills_group">
            <div className="skills_data">
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills_name">{skill.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherSkills;
