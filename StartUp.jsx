import React from "react";
import HeroSection  from "./HeroSection"
import QuotesSlide from './QuotesSlide'
import Services from './Services'
import Aboutus from './Aboutus'
import WhyUs from './WhyUs'
import Project from './Project'
import TeamSection from './TeamSection'
import Footer from "./Footer";
import TechStackSlider from "./TechStackSlider";
// import Ideas from './Ideas'
// import Navbar from './Navbar'

function StartUp() {
  return (
    <>
    {/* <Navbar/> */}
    <HeroSection/>
    {/* <QuotesSlide/> */}
    <Services/>
    <Aboutus/>
    <WhyUs/>
    <Project/>
    <TechStackSlider/>
    <TeamSection/>
    <Footer/>
    {/* <Ideas/> */}
    </>
  );
}

export default StartUp;
