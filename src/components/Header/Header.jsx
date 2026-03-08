import React, { useState } from 'react'
import { MdEmail } from "react-icons/md"
import { FaPhone } from "react-icons/fa6"
import { IoClose } from "react-icons/io5" 
import "./Header.css"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [popupOpen, setPopupOpen] = useState(false)

  return (
    <>
      <div className='header-main'>
        <div className="logo">
          <img src="/logo.png" alt="BL Digital Solutions" className="logo-img" />
          <div className="logo-text">
            <div className="logo-title">BL <span>Digital</span> Solutions</div>
            <div className="logo-subtitle">DIGITAL MARKETING AGENCY</div>
          </div>
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`header-second ${menuOpen ? 'open' : ''}`}>
          <p onClick={() => { document.getElementById("services").scrollIntoView({ behavior: "smooth" }); setMenuOpen(false) }}>Services</p>
          <p onClick={() => { document.getElementById("about").scrollIntoView({ behavior: "smooth" }); setMenuOpen(false) }}>About</p>
          <p onClick={() => { document.getElementById("process").scrollIntoView({ behavior: "smooth" }); setMenuOpen(false) }}>Process</p>
          <p onClick={() => { document.getElementById("contact").scrollIntoView({ behavior: "smooth" }); setMenuOpen(false) }}>Contact</p>
          <button onClick={() => setPopupOpen(true)}>Get Started</button>
        </div>
      </div>

      
      {popupOpen && (
        <div className="popup-overlay" onClick={() => setPopupOpen(false)}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>

            <button className="popup-close" onClick={() => setPopupOpen(false)}>
              <IoClose />
            </button>

            <div className="popup-emoji">🚀</div>
            <h2>Let's Get Started!</h2>
            <p>Reach out to us via email or phone and we'll get back to you within 24 hours.</p>

            <div className="popup-options">
              <a href="mailto:hello@bldigital.com" className="popup-option email">
                <div className="popup-option-icon"><MdEmail /></div>
                <div className="popup-option-text">
                  <span className="popup-option-label">Send us an Email</span>
                  <span className="popup-option-value">bldigitalsolution@gmail.com</span>
                </div>
              </a>

              <div className="popup-divider">or</div>

              <a href="tel:+919266519979" className="popup-option phone">
                <div className="popup-option-icon"><FaPhone /></div>
                <div className="popup-option-text">
                  <span className="popup-option-label">Give us a Call</span>
                  <span className="popup-option-value">+91 92665 19979</span>
                </div>
              </a>
            </div>

          </div>
        </div>
      )}
    </>
  )
}

export default Header