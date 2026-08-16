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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="main-header"
    >
      <div className="main-header-div">
        {/* Logo */}
        <a href="#home" className="Website-Logo">
          Shivam
        </a>

        {/* Desktop Menu */}
        <nav className="main-nav-menu">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="main-nav-link"
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
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu-div fixed top-0 left-0 h-screen w-72 bg-white shadow-xl z-50
    transform transition-transform duration-300
    ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-col px-6 py-5 gap-5">

          <button
            onClick={() => setIsOpen(false)}
            className="self-end"
          >
            <X size={30} />
          </button>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-medium"
            >
              {link.name}
            </a>
          ))}

          <a
            href="/resume.pdf"
            className="resume-button-mobile"
          >
            Resume
          </a>

        </div>
      </div>
    </header>
  );
}