"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const smoothScroll = (e, href) => {
  e.preventDefault();

  const target = document.querySelector(href);

  if (!target) return;

  const targetPosition =
    target.getBoundingClientRect().top + window.scrollY - 80;

  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  const duration = 800;

  let startTime = null;

  const easeInOut = (t) => {
    return t < 0.5
      ? 2 * t * t
      : 1 - Math.pow(-2 * t + 2, 2) / 2;
  };

  const animation = (currentTime) => {
    if (startTime === null) {
      startTime = currentTime;
    }

    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    const easedProgress = easeInOut(progress);

    window.scrollTo(
      0,
      startPosition + distance * easedProgress
    );

    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);

  setIsOpen(false);
};

  return (
    <header className="main-header">
      <div className="main-header-div">

        {/* Logo */}
        <a href="/" className="Website-Logo">
          Shivam
        </a>

        {/* Desktop Menu */}
        <nav className="main-nav-menu">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="main-nav-link"
              onClick={(e) => smoothScroll(e, link.href)}
            >
              {link.name}
            </a>
          ))}

          <a
            href="/resume.pdf"
            className="resume-button"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-menu-button"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu-div fixed top-0 left-0 h-screen w-72 bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col px-6 py-5 gap-5">

          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="self-end"
            aria-label="Close menu"
          >
            <X size={30} />
          </button>

          {/* Mobile Navigation */}
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => smoothScroll(e, link.href)}
              className="font-medium"
            >
              {link.name}
            </a>
          ))}

          {/* Resume */}
          <a
            href="/resume.pdf"
            className="resume-button-mobile"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </a>

        </div>
      </div>
    </header>
  );
}