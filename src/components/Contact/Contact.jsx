import React from "react";
import "./Contact.css";

const Contact = () => {
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

          <button className="contact-btn-primary">
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

    </section>
  );
};

export default Contact;
