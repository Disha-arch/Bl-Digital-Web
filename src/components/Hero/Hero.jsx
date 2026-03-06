import React from 'react'
import { GoDotFill } from "react-icons/go";
import "./Hero.css"

const Hero = () => {
  return (
    <div className="hero-main">
      <div className="hero-content">
        <div className="hero-badge">
          <GoDotFill color='green' size={"10px"} /> INDIA'S GROWTH-FIRST DIGITAL AGENCY
        </div>
        <h1>
          We Build Digital <br />
          <span>Experiences</span><br />
          That Matter
        </h1>
        <p>From idea to launch — we craft social media strategies, e-commerce listings, paid ads, and brand identities that help startups and businesses grow in the digital world.</p>
        
        <div className="hero-buttons">
          <button 
            className="hero-btn-primary"
            onClick={()=>{document.getElementById("services").scrollIntoView({
              behavior:"smooth"
            })}}
          >
            Explore Our Services
          </button>
          <button 
            className="hero-btn-outline"
            onClick={()=>{document.getElementById("contact").scrollIntoView({
              behavior:"smooth"
            })}}
          >
            Let's Talk →
          </button>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <h2>50+</h2>
            <p>Projects Delivered</p>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <h2>30+</h2>
            <p>Happy Clients</p>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <h2>99%</h2>
            <p>Client Satisfaction</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero