import "./HeroImgStyles.css";
import React from 'react'

import IntroImg from "../assets/intro.jpg";
import { Link } from "react-router-dom";
const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
           <img className="into-img" src={IntroImg} alt="introimg" /> 
      </div>

      <div className="content">
        <p>HI, I'M A WEB DEVLEOPER</p>
        <h1>Front-End Developer</h1>
      
        
      <div>
      <Link to="/project" className="btn">Projects</Link>

        
        <Link to="/contact" className="btn">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg
