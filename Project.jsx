import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Project.css";
import { FiShoppingCart, FiPieChart } from "react-icons/fi";
import ecommerceImg from "./Image/ecommerce.jpg";
import dashboardImg from "./Image/dashboard.jpg";

function Projects() {
  const projectRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.7, // Trigger when 70% visible
      rootMargin: "0px 0px -100px 0px" // Adjusts the detection zone
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const addToRefs = (el, index) => {
    if (el && !projectRefs.current.includes(el)) {
      projectRefs.current[index] = el;
    }
  };

  return (
    <div className="webcraft-projects">
      <div className="container">
        <div className="section-header">
          <span className="Project">Our Experties</span>
          <div className="title-divider"></div>
        </div>

        <div className="project-list">
          {/* E-commerce Platform */}
          <div 
            className="project-item slide-from-left" 
            ref={(el) => addToRefs(el, 0)}
          >
            <div className="project-image-container">
              <img src={ecommerceImg} alt="E-commerce Platform" className="project-image" />
              <div className="project-icon">
                <FiShoppingCart />
              </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">E-commerce Platform</h3>
              <p className="project-description">
                React-based online store with cart functionality and payment integration.
              </p>
            </div>
          </div>

          <div className="divider-line"></div>

          {/* Analytics Dashboard */}
          <div 
            className="project-item slide-from-right" 
            ref={(el) => addToRefs(el, 1)}
          >
            <div className="project-image-container">
              <img src={dashboardImg} alt="Analytics Dashboard" className="project-image" />
              <div className="project-icon">
                <FiPieChart />
              </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">Analytics Dashboard</h3>
              <p className="project-description">
                Real-time data visualization dashboard with React and Bootstrap.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;