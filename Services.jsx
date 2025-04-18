import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaBrain,
  FaCubes,
  FaGamepad,
  FaBug
} from "react-icons/fa";
import "./Services.css";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, x: "-100%" },
  visible: {
    opacity: 1,
    x: "0%",
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.7 });

  const webDevRef = useRef(null);
  const appDevRef = useRef(null);
  const aiMlRef = useRef(null);
  const blockchainRef = useRef(null);
  const gameDevRef = useRef(null);
  const testingRef = useRef(null);

  const services = [
    {
      id: "web-development",
      icon: <FaLaptopCode />,
      title: "Web Development",
      description: "Modern and scalable web solutions tailored to your business needs.",
      color: "#0dcaf0",
      ref: webDevRef
    },
    {
      id: "app-development",
      icon: <FaMobileAlt />,
      title: "App Development",
      description: "High-performance mobile apps for iOS and Android.",
      color: "#198754",
      ref: appDevRef
    },
    {
      id: "ai-ml",
      icon: <FaBrain />,
      title: "AI/ML",
      description: "Smart solutions powered by artificial intelligence.",
      color: "#6f42c1",
      ref: aiMlRef
    },
    {
      id: "blockchain",
      icon: <FaCubes />,
      title: "Blockchain",
      description: "Secure and decentralized tech for modern apps.",
      color: "#0d6efd",
      ref: blockchainRef
    },
    {
      id: "game-development",
      icon: <FaGamepad />,
      title: "Game Development",
      description: "Engaging games built with Unity, C#, and Unreal Engine.",
      color: "#ffc107",
      ref: gameDevRef
    },
    {
      id: "testing",
      icon: <FaBug />,
      title: "Testing",
      description: "Flawless performance through rigorous testing.",
      color: "#dc3545",
      ref: testingRef
    }
  ];

  return (
    <section id="services" className="services-section" ref={ref}>
      <div className="container">
        <div className="section-Header">
          <h2>Our Services</h2>
          <p id="id1">We offer comprehensive solutions for your digital needs</p>
        </div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              id={service.id}
              ref={service.ref}
              className="service-card"
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: `0 10px 20px rgba(0,0,0,0.2)`,
                backgroundColor: `${service.color}20`,
                transition: { duration: 0.3 }
              }}
            >
              <div
                className="service-icon"
                style={{ color: service.color }}
              >
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
