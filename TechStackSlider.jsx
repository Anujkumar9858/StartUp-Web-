import React from 'react';
import { motion } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaGithub,
} from 'react-icons/fa';
import {
  SiMongodb, SiExpress, SiTailwindcss, SiRedux, SiTypescript, SiNextdotjs, SiFirebase, SiPostman
} from 'react-icons/si';
import 'bootstrap/dist/css/bootstrap.min.css';

const techIcons = [
  { icon: <FaHtml5 />, bg: '#E34F26', text: 'white' }, // HTML5 Orange
  { icon: <FaCss3Alt />, bg: '#1572B6', text: 'white' }, // CSS3 Blue
  { icon: <FaJsSquare />, bg: '#F7DF1E', text: 'black' }, // JavaScript Yellow
  { icon: <SiTypescript />, bg: '#3178C6', text: 'white' }, // TypeScript Blue
  { icon: <FaReact />, bg: '#61DAFB', text: 'black' }, // React Cyan
  { icon: <SiNextdotjs />, bg: 'black', text: 'white' }, // Next.js Black
  { icon: <SiRedux />, bg: '#764ABC', text: 'white' }, // Redux Purple
  { icon: <FaNodeJs />, bg: '#339933', text: 'white' }, // Node.js Green
  { icon: <SiExpress />, bg: '#000000', text: '#FFFFFF' }, // Express Black
  { icon: <SiMongodb />, bg: '#47A248', text: 'white' }, // MongoDB Green
  { icon: <SiTailwindcss />, bg: '#38B2AC', text: 'white' }, // Tailwind Teal
  { icon: <SiFirebase />, bg: '#FFCA28', text: 'black' }, // Firebase Yellow
  { icon: <FaGitAlt />, bg: '#F05032', text: 'white' }, // Git Orange-Red
  { icon: <FaGithub />, bg: '#181717', text: 'white' }, // GitHub Black
  { icon: <SiPostman />, bg: '#FF6C37', text: 'white' }, // Postman Orange
];

const sliderVariants = {
  animate: {
    x: ['0%', '-100%'],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 25,
        ease: 'linear',
      },
    },
  },
};

const TechStackSlider = () => {
  return (
    <div className="bg-gradient-to-r from-blue-100 via-white to-blue-100 py-5 overflow-hidden">
      <div>
        <h2 className="text-dark text-center mb-5 display-4 fw-bold">
          ⚙ Technologies We Use
        </h2>

        <div className="row">
          <div className="col-12 position-relative overflow-hidden">
            <motion.div
              className="d-flex align-items-center py-4"
              variants={sliderVariants}
              animate="animate"
            >
              {[...techIcons, ...techIcons].map((tech, index) => (
                <div
                  key={index}
                  className="mx-3 d-flex justify-content-center align-items-center rounded-circle shadow-lg"
                  style={{
                    width: '110px',
                    height: '110px',
                    transition: 'all 0.3s ease',
                    backgroundColor: tech.bg,
                    color: tech.text,
                    minWidth: '110px' // Prevent squeezing
                  }}
                >
                  <div className="fs-1" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }}>
                    {React.cloneElement(tech.icon, { 
                      className: 'icon-element',
                      style: { 
                        color: tech.text,
                        fontSize: '2.5rem'
                      } 
                    })}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStackSlider;