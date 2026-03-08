import React from "react";
import "./Contact.css";
import { useState } from "react";
import { MdEmail } from "react-icons/md"
import { FaPhone } from "react-icons/fa6"
import { IoClose } from "react-icons/io5" 

const Contact = () => {

  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <section id="contact" className="contact">

      <div className="contact-container">

        
        <h2>
          Ready to Build Something <span>Amazing?</span>
        </h2>

        
        <p>
          Let's discuss your project. Get a free consultation and a custom quote
          within 24 hours.
        </p>

        
        <div className="contact-buttons">

          <button className="contact-btn-primary" onClick={() => setPopupOpen(true)} >
            Get in Touch →
          </button>

          <button className="contact-btn-secondary" onClick={()=>{
            document.getElementById("services").scrollIntoView({
              behavior:"smooth"
            })
          }}>
            View Services
          </button>

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

    </section>
  );
};

export default Contact;
