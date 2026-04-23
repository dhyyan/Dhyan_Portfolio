import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>Dhyan<span>.</span></h2>
            <p>Building scalable and robust web experiences.</p>
          </div>
          
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#services">Services</a>
          </div>
          
          <div className="footer-socials">
            <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub size={20} />
            </a>
            <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </a>
            <a href={`mailto:${portfolioData.email}`} aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} {portfolioData.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
