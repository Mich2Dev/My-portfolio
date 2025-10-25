import React, { useEffect } from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJsSquare, faHtml5, faCss3Alt, faPython, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faMedal } from '@fortawesome/free-solid-svg-icons';

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add('animate');
      },
      { threshold: 0.35 }
    );

    const el = document.querySelector('.about');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about fade-in" id="about">
      <div className="container about-grid">
        <div className="about-main">
          <h2>Sobre mí</h2>
          <p className="lead">Apasionado por la tecnología, diseño soluciones innovadoras que integran inteligencia artificial y hardware avanzado para resolver problemas empresariales.</p>
          <p className="tease">Explora mis proyectos para conocer cómo aplico tecnología avanzada para resolver problemas empresariales e industriales.</p>
          <div className="about-cta">
            <a href="/cv.pdf" className="btn primary" download>Descargar CV</a>
          </div>
        </div>

        <aside className="about-side">
          <h3>Herramientas y habilidades</h3>
          <div className="skills-carousel-wrapper">
            <div className="skills-carousel">
              <div className="carousel-track">
                <FontAwesomeIcon icon={faReact} className="skill-icon react" />
                <FontAwesomeIcon icon={faJsSquare} className="skill-icon javascript" />
                <FontAwesomeIcon icon={faHtml5} className="skill-icon html" />
                <FontAwesomeIcon icon={faCss3Alt} className="skill-icon css" />
                <FontAwesomeIcon icon={faPython} className="skill-icon python" />
                <FontAwesomeIcon icon={faNodeJs} className="skill-icon nodejs" />
                {/* Duplicate icons for seamless looping */}
                <FontAwesomeIcon icon={faReact} className="skill-icon react" />
                <FontAwesomeIcon icon={faJsSquare} className="skill-icon javascript" />
                <FontAwesomeIcon icon={faHtml5} className="skill-icon html" />
                <FontAwesomeIcon icon={faCss3Alt} className="skill-icon css" />
                <FontAwesomeIcon icon={faPython} className="skill-icon python" />
                <FontAwesomeIcon icon={faNodeJs} className="skill-icon nodejs" />
              </div>
            </div>
          </div>
        </aside>
      </div>
      <div className="awards-section">
        <h3 className="awards-title">Premios y Reconocimientos</h3>
        <div className="awards-row awards-three">
          <div className="award-card bordered">
            <FontAwesomeIcon icon={faMedal} className="award-icon gold" />
            <div className="award-content">
              <h4 className="award-title">Hackathon Barranqui-IA – 1er Lugar (2024)</h4>
              <p className="award-description">Otorgado por Google Developer Group</p>
              <a href="https://www.uninorte.edu.co/web/grupo-prensa/w/primera-hackaton-de-ia-en-el-caribe-traza-la-ruta-de-barranquilla-como-epicentro-tecnologico#:~:text=Universidad%20Internacional-,Primera%20hackat%C3%B3n%20de%20IA%20en%20el%20Caribe%20traza%20la%20ruta,inteligencia%20artificial%20como%20herramienta%20principal." target="_blank" rel="noreferrer" className="btn secondary">Leer más</a>
            </div>
          </div>
          <div className="award-card bordered placeholder">
            <FontAwesomeIcon icon={faMedal} className="award-icon gold" />
            <div className="award-content">
              <h4 className="award-title"></h4>
              <p className="award-description">Próximamente...</p>
            </div>
          </div>
          <div className="award-card bordered">
            <FontAwesomeIcon icon={faMedal} className="award-icon gold" />
            <div className="award-content">
              <h4 className="award-title">Hackathon Barranqui-IA – 3er Lugar (2025)</h4>
              <p className="award-description">Otorgado por Google Developer Group</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}