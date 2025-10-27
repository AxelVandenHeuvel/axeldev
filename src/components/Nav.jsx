import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Nav.css'

function Nav({ isVaporwaveMode }) {
  return (
    <nav className={`top-nav ${isVaporwaveMode ? 'vaporwave-mode' : ''}`}>
      <NavLink 
        to="/about" 
        className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
      >
        {isVaporwaveMode ? 'A B O U T' : 'About'}
      </NavLink>
      <NavLink 
        to="/projects" 
        className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
      >
        {isVaporwaveMode ? 'P R O J E C T S' : 'Projects'}
      </NavLink>
      <NavLink 
        to="/resume" 
        className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
      >
        {isVaporwaveMode ? 'R E S U M E' : 'Resume'}
      </NavLink>
    </nav>
  )
}

export default Nav

