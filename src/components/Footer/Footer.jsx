import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand Column */}
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="footer-logo-box"></div>
            <span>BL <strong>Digital</strong> Solutions</span>
          </div>
          <p className="footer-description">
            Crafting digital experiences that help businesses grow and thrive
            in the modern world.
          </p>
        </div>

        {/* Services */}
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

        {/* Company */}
        <div className="footer-col">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Our Process</li>
            <li>Case Studies</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h3>Contact</h3>
          <ul className="footer-contact-list">
            <li>
              <span className="footer-contact-icon email"><MdEmail /></span>
              <a href="mailto:hello@bldigital.com">hello@bldigital.com</a>
            </li>
            <li>
              <span className="footer-contact-icon phone"><FaPhone /></span>
              <span>+91 92665 19979</span>
            </li>
            <li>
              <span className="footer-contact-icon location"><FaLocationDot /></span>
              <span>Remote</span>
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