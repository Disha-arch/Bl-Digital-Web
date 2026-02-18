import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div className='header-main'>
      <div className="logo">BL <span>Digital</span></div>
      <div className='header-second'>
        <p onClick={() => {
          document.getElementById("services").scrollIntoView({
          behavior: "smooth"
          });
        }}>Services</p>
        <p onClick={()=>{
          document.getElementById("about").scrollIntoView({
            behavior:"smooth"
          });
        }}>About</p>
        <p onClick={()=>{
          document.getElementById("process").scrollIntoView({
            behavior:"smooth"
          });
        }}>Process</p>
        <p>Contact</p>
        <button>Get Started</button>
      </div>
    </div>
  )
}

export default Header
