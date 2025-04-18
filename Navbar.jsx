import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cursorVariant, setCursorVariant] = useState("default");
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    let throttleTimeout = null;
    const throttledScroll = () => {
      if (throttleTimeout === null) {
        throttleTimeout = setTimeout(() => {
          handleScroll();
          throttleTimeout = null;
        }, 100);
      }
    };
    window.addEventListener("scroll", throttledScroll);
    return () => window.removeEventListener("scroll", throttledScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg fixed-top ${
          isScrolled ? "scrolled" : ""
        }`}
      >
        <div className="container">
          <a
            className="navbar-brand"
            href="#"
            onClick={() => scrollToSection("home")}
            onMouseEnter={() => {
              setCursorVariant("hover");
              setHoveredItem("brand");
            }}
            onMouseLeave={() => {
              setCursorVariant("default");
              setHoveredItem(null);
            }}
          >
            <motion.span className="brand-text" whileHover={{ scale: 1.1 }}>
              CrueSync
            </motion.span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            <motion.span
              className="navbar-toggler-icon"
              animate={mobileMenuOpen ? { rotate: 90 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>

          <div
            className={`collapse navbar-collapse ${
              mobileMenuOpen ? "show" : ""
            }`}
          >
            <ul className="navbar-nav ms-auto">
              <NavItem
                text="Home"
                onClick={() => scrollToSection("home")}
                {...sharedProps()}
              />
              <NavItem
                text="About"
                onClick={() => scrollToSection("about")}
                {...sharedProps()}
              />
              <DropdownNavItem
                title="Services"
                items={[
                  { href: "#web-development", text: "Web Development" },
                  { href: "#app-development", text: "App Development" },
                  { href: "#blockchain", text: "Blockchain" },
                  { href: "#ai-ml", text: "AI/ML" },
                  { href: "#testing", text: "Testing" },
                ]}
                {...sharedProps()}
              />
              <NavItem
                text="Products"
                onClick={() => scrollToSection("products")}
                {...sharedProps()}
              />
              <DropdownNavItem
                title="Talk to Us"
                items={[
                  { href: "tel:+91 62055 25758", text: "Call Us" },
                  { href: "https://wa.me/9065155371", text: "WhatsApp" },
                ]}
                specialStyle={true} // Add this prop
                {...sharedProps()}
              />
            </ul>
          </div>
        </div>
      </nav>

      <CursorEffect variant={cursorVariant} />
    </>
  );

  function sharedProps() {
    return {
      setCursorVariant,
      setHoveredItem,
      isScrolled,
      isHovered: hoveredItem,
    };
  }
};

const NavItem = ({
  text,
  onClick,
  setCursorVariant,
  setHoveredItem,
  isScrolled,
  isHovered,
}) => {
  const itemKey = text.toLowerCase();
  return (
    <li className="nav-item">
      <a
        href="#"
        className={`nav-link ${isScrolled ? "scrolled" : ""} ${
          isHovered === itemKey ? "hover-glow" : ""
        }`}
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
        onMouseEnter={() => {
          setCursorVariant("hover");
          setHoveredItem(itemKey);
        }}
        onMouseLeave={() => {
          setCursorVariant("default");
          setHoveredItem(null);
        }}
      >
        <motion.span className="nav-text" whileHover={{ scale: 1.1 }}>
          {text}
        </motion.span>
      </a>
    </li>
  );
};

const DropdownNavItem = ({
  title,
  items,
  setCursorVariant,
  setHoveredItem,
  isScrolled,
  isHovered,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const itemKey = title.toLowerCase();

  return (
    <li
      className="nav-item dropdown"
      onMouseEnter={() => {
        setIsOpen(true);
        setCursorVariant("hover");
        setHoveredItem(itemKey);
      }}
      onMouseLeave={() => {
        setIsOpen(false);
        setCursorVariant("default");
        setHoveredItem(null);
      }}
    >
      <span
        className={`nav-link ${isScrolled ? "scrolled" : ""} ${
          isHovered === itemKey ? "hover-glow" : ""
        }`}
      >
        {title}
      </span>
      <motion.div
        className={`dropdown-menu ${isOpen ? "show" : ""}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {items.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="dropdown-item"
            onMouseEnter={() => setCursorVariant("hover")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            <motion.span whileHover={{ x: 5 }}>{item.text}</motion.span>
          </a>
        ))}
      </motion.div>
    </li>
  );
};

const CursorEffect = ({ variant }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  useEffect(() => {
    setIsHovering(variant === "hover");
  }, [variant]);

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      scale: 1,
      backgroundColor: "#ffffff",
      mixBlendMode: "difference",
    },
    hover: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 2,
      backgroundColor: "#ffffff",
      mixBlendMode: "difference",
    },
  };

  return (
    <motion.div
      className="cursor"
      variants={variants}
      animate={isHovering ? "hover" : "default"}
      transition={{ type: "spring", damping: 20, stiffness: 300 }}
    />
  );
};

export default Navbar;
