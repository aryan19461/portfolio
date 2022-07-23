import "./AboutContentStyle.css"
import proj from "../assets/proj.jpg";
import aboutp from "../assets/aboutp.webp";

import React from 'react'
import { Link } from "react-router-dom"
const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
        <h1>Who Am I ?</h1> 
        <p>Im a Front-end developer. </p>   
        <Link to="/contact" >
            <button className="btn">Contact</button>
        </Link>
        </div>


        <div className="right">
                <div className="img-container">
                    
                    <div className="img-stack bottom">
                     <img src={proj} className="img" alt="aboutimg" />
                     </div>
                     
                    <div className="img-stack top">
                     <img src={aboutp} className="img" alt="aboutimg2" />
                    </div>    
                </div>                
            </div>
    </div>
  )
}

export default AboutContent