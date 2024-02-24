import React from "react";

const WorkItems = ({ item }) => {
  const link = item.link.startsWith("http")
    ? item.link
    : `https://${item.link}`;

  return (
    <div className="work_card" key={item.id}>
      <img src={item.image} alt="" className="work_img" />
      <h3 className="work_title">{item.title}</h3>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="work_button"
      >
        Link <i className="bx bx-right-arrow-alt work_button_icon"></i>
      </a>
    </div>
  );
};

export default WorkItems;
