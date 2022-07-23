import "./FooterStyles.css";
import { FaGithub, FaHome,FaInstagram,FaLinkedin,FaMailBulk,FaPhone,  FaQrcode } from "react-icons/fa";
import {Link} from "react-router-dom";
import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
                {/*Left side of the footer */}        

        <div className="left">
        <div className="location">
            <FaHome size={20} style={{color: "#fff",marginRight:"2rem"}}/>
            
            <div>
                <p>C-78 Gyani Market Main Road Khazoori khas</p>
                <p>
                India, Delhi - 110094
                </p>
            </div>
        </div>

        <div className="phone">
        <h4><FaPhone size={20} style={{color: "#fff",marginRight:"2rem"}}/>
            9311801235
            </h4>
        </div>

        <div className="phone">
        <h4><FaMailBulk size={20} style={{color: "#fff",marginRight:"2rem"}}/>
            aryansingh19461@gmail.com
            </h4>
        </div>

        
        
        </div>

{/*Right side of the footer */}
        <div className="right">
            <h4 >About the Services offered </h4>
            <p>This is me Aryan Singh.<br/> I enjoy doing the Front End development and Back-End to some Extent.<br/> So offer me project to be made and I'll offer a reasonable amount for the project</p>
            <div className="social">
            
            <a href =" https://www.linkedin.com/in/aryan-singh-a003771a8" target="_blank">
            <FaLinkedin size={30} style={{color: "#fff",marginRight:"2rem"}}/>
            </a>

            <a href="https://github.com/aryan19461">
            <FaGithub size={30} style={{color: "#fff",marginRight:"2rem"}}/>
            </a>
            
            <a href="https://www.instagram.com/aryan_19461/">
            <FaInstagram
            size={30} style={{color: "#fff",marginRight:"2rem"}}/>
            </a>
            
            <Link to="/">
            <FaQrcode size={30} style={{color: "#fff",marginRight:"2rem"}}/>
            </Link>
            
            
            </div>
        </div>
           
           
            
            
      </div>
      
    </div>

  )
}

export default Footer
