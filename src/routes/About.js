import React from 'react';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading=" " text="I am a student and currently pursuing  B-TECH in CSE and I am in my Final Year "/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About
