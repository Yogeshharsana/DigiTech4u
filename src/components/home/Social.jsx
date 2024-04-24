import React from "react";

const Social = () => {
  return (
    <div className="home_social">
      <a
        href="https://www.instagram.com/"
        className="home_social_icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-instagram"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/"
        className="home_social_icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="bx bxl-linkedin"></i>
      </a>

      <a
        href="https://github.com/"
        className="home_social_icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
