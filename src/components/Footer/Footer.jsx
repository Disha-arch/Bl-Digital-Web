import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhone, FaLocationDot } from "react-icons/fa6"; 
import { FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        
        <div className="footer-brand">
          <div className="footer-logo">
            <img src="/logo.png" alt="BL Digital Solutions" className="footer-logo-img" />
            <span>BL <strong>Digital</strong> Solutions</span>
          </div>
          <p className="footer-description">
            Crafting digital experiences that help businesses grow and thrive
            in the modern world.
          </p>
        </div>

        
        <div className="footer-col">
          <h3>Services</h3>
          <ul>
            <li>Social Media Management</li>
            <li>Meta & Instagram Ads</li>
            <li>Amazon Listing</li>
            <li>Blinkit Optimization</li>
            <li>Website Design</li>
            <li>Brand Identity</li>
          </ul>
        </div>

        
        <div className="footer-col">
          <h3>Company</h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#process">Our Process</a></li>
            <li>Case Studies</li>
            <li>Blog</li>
          </ul>
        </div>

        
        <div className="footer-col">
          <h3>Contact</h3>
          <ul className="footer-contact-list">
            <li>
              <span className="footer-contact-icon email"><MdEmail /></span>
              <a href="mailto:hello@bldigital.com">bldigitalsolution@gmail.com</a>
            </li>
            <li>
              <span className="footer-contact-icon phone"><FaPhone /></span>
              <span>+91 92665 19979</span>
            </li>
            <li>
              <span className="footer-contact-icon phone"><FaInstagram /></span>
              <a href="https://www.instagram.com/bldigitalco?igsh=Y3h6NTI5ZTYycjFr&utm_source=qr">bldigitalco</a>
            </li>
            
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