import React from 'react'
import "./slider.css"
import img1 from "./images/1.png"
import img2 from "./images/2.png"
import img3 from "./images/3.png"
import img4 from "./images/4.png"
import img5 from "./images/5.png"
import img6 from "./images/6.png"
const Slider = () => {
  return (
    <div className="image-container">
      <div className="image-slide">
        <img src={img1} />
        <img src={img2} />
        <img src={img3} />
        <img src={img4} />
        <img src={img5} />
        <img src={img6} />
        
      </div>

      <div className="image-slide">
      <img src={img1} />
        <img src={img2} />
        <img src={img3} />
        <img src={img4} />
        <img src={img5} />
        <img src={img6} />
      </div>
    </div>
  )
}

export default Slider