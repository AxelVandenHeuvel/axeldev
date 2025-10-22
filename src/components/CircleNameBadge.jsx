import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/CircleNameBadge.css'

function CircleNameBadge() {
  // Create the circular text path
  const radius = 45
  const circumference = 2 * Math.PI * radius
  
  // Text to repeat around the circle
  const text = 'AXEL VANDENHEUVEL • '
  const repeatedText = (text + text).trim() + ' '
  
  return (
    <Link 
      to="/" 
      className="circle-badge-link"
      aria-label="Axel VandenHeuvel home link"
    >
      <svg 
        className="circle-badge" 
        viewBox="0 0 120 120" 
        width="120" 
        height="120"
      >
        {/* Define the circular path */}
        <defs>
          <path
            id="circlePath"
            d={`M 60, 60 m -${radius}, 0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
          />
        </defs>
        
        {/* Outer circle border */}
        <circle
          cx="60"
          cy="60"
          r="58"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.3"
        />
        
        {/* Circular text */}
        <text className="circle-text">
          <textPath href="#circlePath" startOffset="0%">
            {repeatedText}
          </textPath>
        </text>
      </svg>
    </Link>
  )
}

export default CircleNameBadge

