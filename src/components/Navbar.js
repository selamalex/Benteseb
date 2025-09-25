import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
     
      <div className="logo">
        <img src="/images/logo.png" alt="Logo" />
      </div>
      <ul className="nav-links desktop">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#programs">Programs</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#membership">Membership</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="join-btn desktop">Join Us</button>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-links mobile ${menuOpen ? "active" : ""}`}>
        <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
        <li><a href="#programs" onClick={() => setMenuOpen(false)}>Programs</a></li>
        <li><a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a></li>
        <li><a href="#membership" onClick={() => setMenuOpen(false)}>Membership</a></li>
        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        <li>
          <button className="join-btn" onClick={() => setMenuOpen(false)}>
            Join Us
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
