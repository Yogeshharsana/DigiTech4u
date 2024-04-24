import React from 'react'
import "./Team.css"
import { HiMail } from "react-icons/hi";

import { RiLinkedinBoxFill } from "react-icons/ri";
import img from "../../../public/H.png"
const Team = () => {
  return (
    
    <div className='Main-container' >
        <div className="row">
        <h1>Our Team</h1>
      </div>
      
      <div className="row ">
        
        <div className="column">
          <div className="card">
            <div className="img-container">
            <img src={img} alt="Logo" className="logo"/>
            </div>
            <h3>Yogesh Harsana</h3>
            <p>Founder</p>
            <div className="icons">
              <a href="#">
                <i className="fab fa-twitter"><RiLinkedinBoxFill /></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"><HiMail /></i>
              </a>
              
            </div>
          </div>
        </div>
        
        <div className="column">
          <div className="card">
            <div className="img-container">
            <img src={img} alt="Logo" className="logo"/>
            </div>
            <h3>Ujjwal Yadav</h3>
            <p>Lead Developer</p>
            <div className="icons">
              <a href="#">
                <i className="fab fa-twitter"><RiLinkedinBoxFill /></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"><HiMail /></i>
              </a>
              
            </div>
          </div>
        </div>
        
        <div className="column">
          <div className="card">
            <div className="img-container">
            <img src={img} alt="Logo" className="logo"/>
            </div>
            <h3>Aayush Malhotra </h3>
            <p>Sales & Marketing Head</p>
            <div className="icons">
              <a href="#">
                <i className="fab fa-twitter"><RiLinkedinBoxFill /></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"><HiMail /></i>
              </a>
              
            </div>
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default Team