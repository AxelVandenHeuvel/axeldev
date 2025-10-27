import React from 'react'
import '../styles/ThemeToggle.css'
import vapeImage from '../../images/vape.jpeg'

function ThemeToggle({ isVaporwaveMode, onToggle }) {
  return (
    <button 
      className={`theme-toggle ${isVaporwaveMode ? 'active' : ''}`}
      onClick={onToggle}
      aria-label="Toggle theme"
      type="button"
    >
      <div className="toggle-switch">
        {!isVaporwaveMode && (
          <img src={vapeImage} alt="Classic mode" className="toggle-image" />
        )}
        <span className="toggle-slider"></span>
      </div>
    </button>
  )
}

export default ThemeToggle

