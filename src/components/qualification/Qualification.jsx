import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My personel journey</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div
            className={
              toggleState === 1
                ? "qualification_button button--flex qualification_active"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification_icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification_button button--flex qualification_active"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification_icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification_sections">
          <div
            className={
              toggleState === 1
                ? "qualification_content qualification_content_active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  BTech - Computer Science
                </h3>

                <span className="qualification_subtitle">
                  Bennett University
                </span>
                <span className="qualification_subtitle">CGPA 8.47</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>2020 - 2024
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification_content qualification_content_active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Web Developer Intern.</h3>

                <span className="qualification_subtitle">
                  Quantum Software Solution
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i> Nov 2023 - Jan 2023.
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              

              
            </div>

            {/* <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  Job
                </h3>

                <span className="qualification_subtitle">
                  India
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i> 2023 - present
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div> */}

            {/* <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">Job</h3>

                <span className="qualification_subtitle">
                  India
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>2023 - Present
                </div>
              </div> 
            </div>*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
