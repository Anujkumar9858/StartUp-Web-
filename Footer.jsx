import React, { useEffect } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Footer.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      delay: 300,
      once: true,
    });
  }, []);

  return (
    <footer className="py-5 animated-gradient">
      <div className="container py-5">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {/* Logo Section */}
          <div className="col" data-aos="fade-up">
            <h2
              className="text-3xl font-bold mb-4 font-serif"
              style={{ color: "red" }}
            >
              CodeCraft Solutions
            </h2>
            <p
              className="text-sm font-semibold"
              style={{
                color: "#ffff",
                textShadow: "1px 1px 4px rgba(0,0,0,0.6)",
              }}
            >
              Crafting code with passion and precision.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="col" data-aos="fade-up">
            <h3 className="text-xl font-semibold" style={{ color: "red" }}>
              Home
            </h3>
            <a
              href="#"
              className="text-sm text-white hover:text-blue-400 transition"
            >
              Go to Home
            </a>
          </div>

          <div className="col" data-aos="fade-up">
            <h3 className="text-xl font-semibold" style={{ color: "red" }}>
              About
            </h3>
            <a
              href="#"
              className="text-sm text-white hover:text-blue-400 transition"
            >
              Our Journey
            </a>
          </div>

          <div className="col" data-aos="fade-up">
            <h3 className="text-xl font-semibold" style={{ color: "red" }}>
              Services
            </h3>
            <a
              href="#"
              className="text-sm text-white hover:text-blue-400 transition"
            >
              What We Offer
            </a>
          </div>

          {/* Careers Section */}
          <div className="col" data-aos="fade-up">
            <h3 className="text-xl font-semibold" style={{ color: "red" }}>
              Careers
            </h3>
            <div className="d-flex flex-column gap-2 mt-2">
              <a
                href="#"
                className="text-sm text-white hover:text-blue-400 transition"
              >
                Join Us
              </a>
              <a
                href="#"
                className="text-sm text-white hover:text-blue-400 transition"
              >
                Job Openings
              </a>
              <a
                href="#"
                className="text-sm text-white hover:text-blue-400 transition"
              >
                Life at CodeCraft
              </a>
              <a
                href="#"
                className="text-sm text-white hover:text-blue-400 transition"
              >
                Internship Opportunities
              </a>
            </div>
          </div>
        </div>

        {/* Contact Info and Form Section */}
        <div className="row row-cols-1 row-cols-md-2 g-4 mt-4">
          {/* Contact Info */}
          <div className="col" data-aos="fade-right">
            <h3 className="text-2xl font-semibold" style={{ color: "red" }}>
              Contact Info
            </h3>
            <p className="text-lg text-white">📍 Indore, MP, India</p>
            <p className="text-lg text-white">📧 contact@codecraft.com</p>
            <p className="text-lg text-white">☎ +91 96934 31715</p>
          </div>

          {/* Contact Form */}
          <div className="col" data-aos="fade-left">
            <h3 className="text-3xl font-semibold mb-2 font-mono" style={{ color: "red" }}>
              Contact Us
            </h3>
            <p
              className="text-sm font-semibold"
              style={{
                color: "#ffff",
                textShadow: "1px 1px 4px rgba(0,0,0,0.6)",
              }}
            >
              Have any questions? Feel free to send us a message!
            </p>
            <form className="space-y-3">
              <div className="w-100">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="form-control w-100 p-3 rounded-lg bg-white text-black mb-3"
                  required
                />
              </div>
              <div className="w-100">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="form-control w-100 p-3 rounded-lg bg-white text-black mb-3"
                  required
                />
              </div>
              <div className="w-100">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="form-control w-100 p-3 rounded-lg bg-white text-black mb-3"
                  required
                />
              </div>
              <div className="w-100">
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="form-control w-100 p-3 rounded-lg bg-white text-black resize-none mb-3"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary px-4 py-2 rounded-lg font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center mt-5" data-aos="fade-up">
          <hr className="border-t border-gray-600 w-1/2 mx-auto mb-4" />
          <p
            className="text-sm font-semibold"
            style={{
              color: "#ffff",
              textShadow: "1px 1px 4px rgba(0,0,0,0.6)",
            }}
          >
            &copy; 2025 CodeCraft Solutions. All rights reserved.
          </p>

          {/* Social Media Icons */}
          <div className="d-flex justify-content-center gap-4 text-5xl">
            <a
              href="https://www.facebook.com"
              className="text-white hover:text-blue-500 transition transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.twitter.com"
              className="text-white hover:text-blue-400 transition transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com"
              className="text-white hover:text-pink-400 transition transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com"
              className="text-white hover:text-blue-600 transition transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com"
              className="text-white hover:text-gray-400 transition transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
