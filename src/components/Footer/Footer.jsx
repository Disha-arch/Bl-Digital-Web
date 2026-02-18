import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        
        <div className="footer-col">
          <h2 className="footer-logo">
            BL <span>Digital</span>
          </h2>

          <p className="footer-description">
            Crafting digital experiences that help businesses grow and thrive
            in the modern world.
          </p>
        </div>

        
        <div className="footer-col">
          <h3>Services</h3>

          <ul>
            <li>Web Development</li>
            <li>Mobile Apps</li>
            <li>UI/UX Design</li>
            <li>Digital Marketing</li>
            <li>SEO</li>
            <li>Branding</li>
          </ul>
        </div>

        
        <div className="footer-col">
          <h3>Company</h3>

          <ul>
            <li>About Us</li>
            <li>Our Process</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>

        
        <div className="footer-col">
          <h3>Contact</h3>

          <ul>
            <li>✉ hello@bldigital.com</li>
            <li>📞 +1 (555) 123-4567</li>
            <li>📍 Remote — Worldwide</li>
          </ul>
        </div>

      </div>


      
      <div className="footer-bottom">
        © 2026 BL Digital Solutions. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
