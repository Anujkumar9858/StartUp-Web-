import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import "./WhyUs.css";

const Counter = ({ end, duration = 2, shouldStart }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let start = 0;
    const increment = end / (duration * 60); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 4000 / 60);

    return () => clearInterval(timer);
  }, [end, duration, shouldStart]);

  return <span>{count}</span>;
};

const WhyUs = () => {
  const [isInView, setIsInView] = useState(false);
  const [countersStarted, setCountersStarted] = useState(false);
  const controls = useAnimation();
  const sectionRef = useRef(null);

  const handleScroll = () => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const threshold = window.innerHeight * 0.7; // Trigger when 70% is visible
      const isVisible = rect.top < window.innerHeight - threshold && rect.bottom >= 0;
      
      setIsInView(isVisible);
      
      // Only start counters once when 70% is visible
      if (isVisible && !countersStarted) {
        setCountersStarted(true);
      }
    }
  };

  useEffect(() => {
    handleScroll(); // Check on mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const stats = [
    { value: 96, label: "Client Satisfaction Rate", icon: "😊" },
    { value: 150, label: "Projects Completed", icon: "🚀" },
    { value: 87, label: "Repeat Business Rate", icon: "🔄" },
    { value: 24, label: "Expert Team Members", icon: "👨‍💻" }
  ];

  const cardVariants = {
    hidden: (custom) => ({
      opacity: 0,
      ...(custom.direction === "bottom" && { y: 100 }),
      ...(custom.direction === "left" && { x: -100 }),
      ...(custom.direction === "top" && { y: -100 }),
      ...(custom.direction === "right" && { x: 100 }),
    }),
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      }
    }
  };

  const directions = ["bottom", "left", "top", "right"];

  return (
    <section id="stats" className="stats-section" ref={sectionRef}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="section-header"
        >
          <h2>Why Choose Us?</h2>
          <p>Our numbers speak for themselves</p>
          <motion.div 
            className="header-underline"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>
        
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              custom={{ direction: directions[index] }}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
              transition={{ delay: 0.3 + index * 0.15 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
                scale: 1.03
              }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-value">
                <Counter end={stat.value} shouldStart={countersStarted} />
                <span>+</span>
              </div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-decoration"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;