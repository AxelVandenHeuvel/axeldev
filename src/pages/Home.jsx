import React from 'react'
import ProfileCard from '../components/ProfileCard'
import '../styles/Home.css'

function Home({ isVaporwaveMode }) {
  return (
    <div className="home-page">
      <ProfileCard isVaporwaveMode={isVaporwaveMode} />
    </div>
  )
}

export default Home

