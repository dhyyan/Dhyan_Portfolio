import React from 'react';
import { Download, CodeXml } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import heroImg from '../assets/dhyan_profile.jpeg';
import { portfolioData } from '../data/portfolioData';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container animate-fade-in">
        
        {/* Left Content Area */}
        <div className="hero-content">
          <div className="availability-badge">
            <span className="dot"></span>
            AVAILABLE FOR HIRE
          </div>
          
          <h1 className="hero-name">
            <span className="first-name">{portfolioData.name.split(' ')[0]}</span>
            <br />
            <span className="last-name">{portfolioData.name.split(' ').slice(1).join(' ') || portfolioData.name}</span>
          </h1>
          
          <p className="hero-description">
            A <strong>{portfolioData.title}</strong> focused on high-performance digital experiences— where minimalism meets engineering excellence.
          </p>
          
          <div className="hero-actions">
            <a href="/resume.pdf" download="Dhyan-Resume.pdf" className="btn btn-primary dwn-btn">
              DOWNLOAD CV <Download size={16} />
            </a>
            
            <div className="hero-socials">
              <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedin size={18} />
              </a>
              <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaGithub size={18} />
              </a>

              <a href={`mailto:${portfolioData.email}`} className="social-icon">
                <FaEnvelope size={18} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Right Visual Area */}
        <div className="hero-visual">
          <div className="avatar-wrapper">
            <div className="code-badge glass-panel">
              <CodeXml size={24} color="var(--text-secondary)" />
            </div>
            
            <div className="avatar-circle">
              <img src={heroImg} alt="Profile" className="avatar-image" />
            </div>
            
            <div className="status-badge glass-panel">
              <span className="dot green"></span>
              Open to work
            </div>
          </div>
        </div>
        
      </div>
      
      <div className="scroll-indicator">
        <span className="scroll-text">SCROLL</span>
      </div>
    </section>
  );
};

export default Hero;
