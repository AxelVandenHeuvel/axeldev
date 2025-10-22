import React from 'react'
import SocialLinks from './SocialLinks'
import '../styles/ProfileCard.css'
import profileImage from '../../images/profile.jpeg'

function ProfileCard() {
  return (
    <section id="home" className="profile-section">
      <div className="profile-card">
        <div className="profile-image-container">
          <img 
            src={profileImage} 
            alt="Profile" 
            className="profile-image"
          />
        </div>
        
        <h1 className="profile-name">Axel VandenHeuvel</h1>
        <p className="profile-subtitle">Developer</p>
        
        <div className="profile-location">
          <svg 
            className="location-icon" 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M8 0C5.24 0 3 2.24 3 5C3 8.5 8 14 8 14C8 14 13 8.5 13 5C13 2.24 10.76 0 8 0ZM8 6.75C7.31 6.75 6.75 6.19 6.75 5.5C6.75 4.81 7.31 4.25 8 4.25C8.69 4.25 9.25 4.81 9.25 5.5C9.25 6.19 8.69 6.75 8 6.75Z" 
              fill="currentColor"
            />
          </svg>
          <span>Boulder, CO</span>
        </div>
        
        <SocialLinks />
      </div>
    </section>
  )
}

export default ProfileCard

