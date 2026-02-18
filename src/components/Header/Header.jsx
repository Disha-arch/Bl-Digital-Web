import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div className='header-main'>
      <div className="logo">BL <span>Digital</span></div>
      <div className='header-second'>
        <p>Services</p>
        <p>About</p>
        <p>Process</p>
        <p>Contact</p>
        <button>Get Started</button>
      </div>
    </div>
  )
}

export default Header
