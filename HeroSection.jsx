import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./HeroSection.css";
import Hero1 from "../Our Project copy/Image/Mobile_App_Development.jpg";
import Hero2 from "../Our Project copy/Image/Web_Development.jpg";
import Hero3 from "../Our Project copy/Image/Blockchain.jpg";
import Hero4 from "../Our Project copy/Image/game_Development.jpg";
import Hero5 from "../Our Project copy/Image/Testing.jpg";
import Hero6 from "../Our Project copy/Image/AI_ML.jpg";

const slides = [
  {
    title: "Mobile App Development",
    description: "We create custom mobile applications tailored to your business needs.",
    cta1: "Get In Touch",
    image: Hero1,
    bgGradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  },
  {
    title: "Web Development",
    description: "Modern websites and web applications that drive results.",
    cta1: "Get In Touch",
    image: Hero2,
    bgGradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
  },
  {
    title: "Blockchain",
    description: "Smart solutions powered by artificial intelligence.",
    cta1: "Get In Touch",
    image: Hero3,
    bgGradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
  },
  {
    title: "Game Development",
    description: "Engaging games built with Unity, C#, and Unreal Engine.",
    cta1: "Get In Touch",
    image: Hero4,
    bgGradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
  },
  {
    title: "Testing",
    description: "Flawless performance through rigorous testing.",
    cta1: "Get In Touch",
    image: Hero5,
    bgGradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
  },
  {
    title: "AI/ML Solutions",
    description: "Intelligent systems to automate and enhance your operations.",
    cta1: "Get In Touch",
    image: Hero6,
    bgGradient: "linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)"
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="hero-section"
      style={{ background: slides[currentSlide].bgGradient }}
    >
      <div className="hero-content-wrapper">
        <div className="hero-content">
          <div className="hero-text">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentSlide}
                custom={direction}
                initial={{ opacity: 0, x: 100 * direction }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 * direction }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1>{slides[currentSlide].title}</h1>
                <p>{slides[currentSlide].description}</p>
                <div className="hero-buttons">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="primary-btn"
                  >
                    {slides[currentSlide].cta1}
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="hero-image">
            <AnimatePresence mode="wait">
              <motion.div
                key={`img-${currentSlide}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        
        <div className="slide-controls">
          <button onClick={prevSlide} className="control-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="slide-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
          <button onClick={nextSlide} className="control-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
