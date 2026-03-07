import React from 'react';
import './SocialSidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileDownload } from '@fortawesome/free-solid-svg-icons';

export default function SocialSidebar() {
  return (
    <div className="social-sidebar">
      <a 
        href="https://github.com/Mich2Dev" 
        target="_blank" 
        rel="noreferrer" 
        className="social-sidebar-link"
        aria-label="GitHub"
      >
        <FontAwesomeIcon icon={faGithub} />
        <span className="tooltip">GitHub</span>
      </a>
      
      <a 
        href="https://www.linkedin.com/in/maicol-menco-cuello-9a4248308/" 
        target="_blank" 
        rel="noreferrer" 
        className="social-sidebar-link"
        aria-label="LinkedIn"
      >
        <FontAwesomeIcon icon={faLinkedin} />
        <span className="tooltip">LinkedIn</span>
      </a>
      
      <a 
        href="https://wa.me/573013137911" 
        target="_blank" 
        rel="noreferrer" 
        className="social-sidebar-link"
        aria-label="WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
        <span className="tooltip">WhatsApp</span>
      </a>
      
      <a 
        href="mailto:mencocuellomaicol@gmail.com" 
        className="social-sidebar-link"
        aria-label="Email"
      >
        <FontAwesomeIcon icon={faEnvelope} />
        <span className="tooltip">Email</span>
      </a>
      
      <a 
        href="/cv.pdf" 
        download 
        className="social-sidebar-link"
        aria-label="Descargar CV"
      >
        <FontAwesomeIcon icon={faFileDownload} />
        <span className="tooltip">Descargar CV</span>
      </a>
    </div>
  );
}
