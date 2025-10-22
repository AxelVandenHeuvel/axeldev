import React from 'react'
import '../styles/Projects.css'

function Projects() {
  const projects = [
    {
      title: 'Minimalist Portfolio',
      description: 'A clean portfolio website built with React and Vite. Features routing and responsive design.',
      link: 'https://github.com/AxelVandenHeuvel/personal-site'
    },
    {
      title: 'VLMs for Deep Space Spacecraft',
      description: 'Currenlty working on a project to optimize VLMs to run on deep space spacecrafts.',
      link: 'https://github.com/ksuoo/NASA-JPL-Capstone'
    },
    {
      title: 'Fact-Checker Chrome Extension',
      description: 'A chrome extension that checks if the text on a website is factually correct.',
      link: 'https://github.com/imaddar/hack_cu_public/tree/main'
    },
    {
      title: 'Sports Snap',
      description: 'A chrome extension that allows you to take a screenshot of a player in a sports game and get their data.',
      link: 'https://devpost.com/software/sportssnap'
    }
  ]

  return (
    <div className="projects-page">
      <div className="projects-content">
        <h1 className="page-title">Projects</h1>
        
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects

