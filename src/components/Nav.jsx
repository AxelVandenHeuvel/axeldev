import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Nav.css'

function Nav() {
  return (
    <nav className="top-nav">
      <NavLink 
        to="/about" 
        className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
      >
        About
      </NavLink>
      <NavLink 
        to="/projects" 
        className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
      >
        Projects
      </NavLink>
      <NavLink 
        to="/resume" 
        className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
      >
        Resume
      </NavLink>
    </nav>
  )
}

export default Nav

