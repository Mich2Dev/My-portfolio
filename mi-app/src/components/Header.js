import React, { useEffect } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faPython, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCamera, faMicrochip } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add('animate');
      },
      { threshold: 0.35 }
    );

    const el = document.querySelector('.header');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <header className="header fade-in">
      <div className="hero-inner">
        <div className="hero-card">
          <div className="hero-left">
            <h1 className="name">Michael Menco Cuello</h1>
            <p className="subtitle">Desarrollador Web • Visión Artificial • Integración Industrial</p>
            {/* Clase 'brief' añadida para el estilo del texto de resumen */}
            <p className="brief">Desarrollador Full Stack que transforma ideas en soluciones digitales mediante el uso de inteligencia artificial y tecnologías avanzadas.</p>

            <div className="tech-list" aria-hidden>
              {/* Se eliminó el clamp en el CSS, se usa el tamaño del CSS */}
              <FontAwesomeIcon icon={faReact} className="tech-icon" title="React" />
              <FontAwesomeIcon icon={faPython} className="tech-icon" title="Python" />
              <FontAwesomeIcon icon={faCamera} className="tech-icon" title="OpenCV" />
              <FontAwesomeIcon icon={faMicrochip} className="tech-icon" title="Embedded" />
            </div>

            <div className="socials">
              <a href="https://github.com/Mich2Dev" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FontAwesomeIcon icon={faGithub} className="social-icon" title="GitHub" />
              </a>
              <a href="https://www.linkedin.com/in/michael-menco-cuello-732877226/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} className="social-icon" title="LinkedIn" />
              </a>
            </div>
          </div>

          <div className="hero-right" aria-hidden>
            <div className="avatar" title="Michael Menco Cuello">
              {/* Estilos en línea eliminados y movidos a CSS */}
              <img 
                src="/images/perfil_!.jpg" 
                alt="Michael Menco Cuello" 
                className="avatar-img" 
                style={{ 
                    borderRadius: '50%', 
                    width: '180px', /* Aumentado el tamaño por defecto */
                    height: '180px', 
                    objectFit: 'cover' 
                }} 
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}