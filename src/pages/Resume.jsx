import React from 'react'
import '../styles/Resume.css'
import resumePDF from '../../Axel_VandenHeuvel_2025 copy.pdf'

function Resume() {
  return (
    <div className="resume-page">
      <div className="resume-content">
        <h1 className="page-title">Resume</h1>
        
        <div className="resume-section">
          <h2 className="section-heading">Experience</h2>
          
          <div className="resume-item">
            <div className="resume-item-header">
              <h3 className="item-title">Cloud Solution Intern</h3>
              <span className="item-date">Summer 2025</span>
            </div>
            <p className="item-company">Tenet Healthcare</p>
            <p className="item-description">
            Developed and integrated DocuSign API functionality to automate user notifications for outstanding documents,
            streamlining the signing process. Created and optimized PowerShell scripts to automate licensing-related processes, including identifying users with
errors, mapping group memberships, retrieving primary licenses, extracting on-premises group data, and report the
outstanding cost of reserved licenses throughout the fiscal year.
            </p>
          </div>
        
        </div>
        
        <div className="resume-section">
          <h2 className="section-heading">Education</h2>
          
          <div className="resume-item">
            <div className="resume-item-header">
              <h3 className="item-title">Bachelor of Science in Computer Science</h3>
              <span className="item-date">Expected May 2026</span>
            </div>
            <p className="item-company">University of Colorado Boulder</p>
          </div>
        </div>
        
        <div className="resume-section">
          <h2 className="section-heading">Skills</h2>
          <div className="skills-grid">
            <span className="skill-tag">React</span>
            <span className="skill-tag">JavaScript/TypeScript</span>
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">Python</span>
            <span className="skill-tag">C/C++</span>
            <span className="skill-tag">Java</span>
            <span className="skill-tag">Git</span>
            <span className="skill-tag">PostgreSQL</span>
          </div>
        </div>
        
        <div className="resume-download">
          <a 
            href={resumePDF} 
            download="Axel_VandenHeuvel_Resume.pdf"
            className="download-button"
          >
            Download PDF Resume →
          </a>
        </div>
      </div>
    </div>
  )
}

export default Resume

