import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./aboutus.css";
import Image5 from './Image/Aboutus.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const Aboutus = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT */}
          <div className="col-lg-6">
            <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"}>
              <motion.h2 className="section-title" variants={fadeInUp} custom={0}>
                About Us
              </motion.h2>

              <motion.p className="about-text" variants={fadeInUp} custom={1}>
                At <strong>CrueSync</strong>, technology is not just our profession—it's our passion. 
                We are a team of talented software engineers, developers, and designers 
                who share a common goal: to create solutions that are both functional 
                and delightful to use.
              </motion.p>

              <motion.p className="about-text" variants={fadeInUp} custom={2}>
                We believe in building long-lasting partnerships with our clients, 
                driven by our commitment to quality and innovation.
              </motion.p>

              <motion.button className="btn btn-primary" variants={fadeInUp} custom={3}>
                Learn More About Us
              </motion.button>
            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <img
                src={Image5}
                alt="About CrueSync"
                className="img-fluid about-image"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Aboutus;
