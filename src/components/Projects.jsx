import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { FaGithub, FaTimes, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section projects-section">
      <div className="projects-container">
        
        {/* Horizontal Slider */}
        <div className="projects-slider">
          
          {/* Header Block in slider */}
          <div className="slider-header-block bento-card animate-fade-in">
            <h2>Selected<br />Works</h2>
            <p>Crafting digital experiences with precision and passion.</p>
            <div className="header-decoration"></div>
          </div>

          {/* Project Cards */}
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="slider-project-card bento-card animate-fade-in" 
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="card-image-placeholder">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="project-card-img" />
                ) : (
                  <div className="placeholder-text">{project.title.charAt(0)}</div>
                )}
                <div className="overlay-gradient">
                  <div className="overlay-content">
                    <p className="card-subtitle">VIEW CASE STUDY ➔</p>
                    <h3 className="card-title">{project.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* End Block */}
          <div className="slider-end-block bento-card">
            <span className="flash-icon">⚡</span>
            <p>COMING SOON</p>
            <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline end-btn">
              VIEW ALL PROJECTS
            </a>
          </div>

        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="project-modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="project-modal glass-panel" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              <FaTimes />
            </button>
            <div className="modal-header-img">
              {selectedProject.image ? (
                <img src={selectedProject.image} alt={selectedProject.title} className="project-modal-img" />
              ) : (
                <div className="modal-placeholder">{selectedProject.title}</div>
              )}
            </div>
            
            <div className="modal-content">
              <h2 className="modal-title">{selectedProject.title}</h2>
              
              <div className="modal-body">
                <div className="modal-info">
                  <h3>Overview</h3>
                  <p>{selectedProject.description}</p>
                  
                  {selectedProject.bulletPoints && (
                    <ul className="bullet-list mt-3">
                      {selectedProject.bulletPoints.map((point, idx) => (
                         <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  )}
                  
                  <div className="modal-actions mt-4">
                    {selectedProject.live && (
                       <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginRight: '10px' }}>
                         <FaExternalLinkAlt style={{ marginRight: '5px' }} /> Live Preview
                       </a>
                    )}
                    {selectedProject.github && selectedProject.github !== "#" && (
                       <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                         <FaGithub style={{ marginRight: '5px' }} /> Source Code
                       </a>
                    )}
                  </div>
                </div>
                
                <div className="modal-sidebar">
                  <div className="tech-stack-panel bento-card">
                    <h4>❖ TECH STACK</h4>
                    <div className="tech-tags">
                      {[...portfolioData.technicalSkills.frontend, ...portfolioData.technicalSkills.backend].slice(0, 4).map(tech => (
                         <span className="tech-tag" key={tech}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
