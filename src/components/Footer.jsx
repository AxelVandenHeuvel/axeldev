import React from 'react'
import '../styles/Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <p className="footer-text">
        © {currentYear} Axel VandenHeuvel. All rights reserved.
      </p>
      <p className="footer-subtext">
        Built with React + Vite
      </p>
    </footer>
  )
}

export default Footer

