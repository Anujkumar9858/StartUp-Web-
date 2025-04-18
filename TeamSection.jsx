import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TeamSection.css";

import profile1 from "./Image/Gaurav.jpg";
import profile2 from "./Image/Subhash.jpg";
import profile3 from "./Image/Chandan.jpg";
import profile4 from "./Image/Sugandh.jpg";
import profile5 from "./Image/Anuj.jpg";
import profile6 from "./Image/Prkash.jpg";
import profile7 from "./Image/Somya.jpg";

function TeamSection() {
  const [startScroll, setStartScroll] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  const teamMembers = [
    { name: "Gaurav Verma", position: "Senior React Developer", image: profile1 },
    { name: "Subhash Mehta", position: "Frontend Architect", image: profile2 },
    { name: "Chandan Sharma", position: "UI/UX Specialist", image: profile3 },
    { name: "Sugandh Kushwaha", position: "App Development", image: profile4 },
    { name: "Anuj Mehta", position: "Blockchain", image: profile5 },
    { name: "Prakash Gupta", position: "Testing", image: profile6 },
    { name: "Shivam mishra", position: "Game development", image: profile3 },
    { name: "Somya Prakash", position: "UI/UX Specialist", image: profile7 },
  ];

  const duplicatedMembers = [...teamMembers, ...teamMembers];

  useEffect(() => {
    // Start infinite scroll after initial animation
    const timer = setTimeout(() => {
      setStartScroll(true);
    }, 4000); // Adjust timing based on the intro animation duration

    return () => clearTimeout(timer);
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true); // Pause animation on hover
  };

  const handleMouseLeave = () => {
    setIsHovered(false); // Resume animation on hover leave
  };

  return (
    <section className="team-section py-5">
      <div className="container text-center mb-5">
        <h2 className="section-title">Development Team</h2>
        <div className="title-divider"></div>
      </div>

      <div className="scroll-wrapper">
        <AnimatePresence>
          {!startScroll && (
            <motion.div
              className="scroll-track"
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 3.5, ease: "easeInOut" }}
            >
              {teamMembers.map((member, index) => (
                <div
                  className="team-card text-center"
                  key={index}
                  onMouseEnter={handleMouseEnter} // Add hover enter
                  onMouseLeave={handleMouseLeave} // Add hover leave
                >
                  <div className="team-image-container">
                    <img
                      src={member.image}
                      alt="Team Member"
                      className="team-image"
                    />
                  </div>
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-position">{member.position}</p>
                </div>
              ))}
            </motion.div>
          )}

          {startScroll && (
            <motion.div
              className="scroll-track"
              animate={{
                x: isHovered ? "0%" : ["0%", "-50%"], // Pause or move based on hover state
              }}
              transition={{
                duration: 40,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {duplicatedMembers.map((member, index) => (
                <div
                  className="team-card text-center"
                  key={index}
                  onMouseEnter={handleMouseEnter} // Add hover enter
                  onMouseLeave={handleMouseLeave} // Add hover leave
                >
                  <div className="team-image-container">
                    <img
                      src={member.image}
                      alt="Team Member"
                      className="team-image"
                    />
                  </div>
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-position">{member.position}</p>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default TeamSection;
