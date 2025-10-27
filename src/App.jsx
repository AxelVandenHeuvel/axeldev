import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import CircleNameBadge from './components/CircleNameBadge'
import Nav from './components/Nav'
import ThemeToggle from './components/ThemeToggle'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Footer from './components/Footer'
import vaporwaveBg from '../images/vaporwavebg.jpg'
import './styles/App.css'

function App() {
  const [isVaporwaveMode, setIsVaporwaveMode] = useState(false)
  
  const handleToggle = () => {
    setIsVaporwaveMode(!isVaporwaveMode)
  }
  
  const appStyle = isVaporwaveMode 
    ? { backgroundImage: `url(${vaporwaveBg})` }
    : {}
  
  return (
    <div 
      className={`app ${isVaporwaveMode ? 'vaporwave-mode' : ''}`}
      style={appStyle}
    >
      <ThemeToggle isVaporwaveMode={isVaporwaveMode} onToggle={handleToggle} />
      <aside className="sidebar">
        <CircleNameBadge />
        <Nav isVaporwaveMode={isVaporwaveMode} />
      </aside>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home isVaporwaveMode={isVaporwaveMode} />} />
          <Route path="/about" element={<About isVaporwaveMode={isVaporwaveMode} />} />
          <Route path="/projects" element={<Projects isVaporwaveMode={isVaporwaveMode} />} />
          <Route path="/resume" element={<Resume isVaporwaveMode={isVaporwaveMode} />} />
        </Routes>
        <Footer />
      </main>
    </div>
  )
}

export default App
