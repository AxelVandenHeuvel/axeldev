import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CircleNameBadge from './components/CircleNameBadge'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Footer from './components/Footer'
import './styles/App.css'

function App() {
  return (
    <div className="app">
      <CircleNameBadge />
      <Nav />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </main>
    </div>
  )
}

export default App
