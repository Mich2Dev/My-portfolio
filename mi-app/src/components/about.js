import React, { useState, useEffect } from 'react';
import './About.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SkillBars from './SkillBars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMedal
} from '@fortawesome/free-solid-svg-icons';

export default function About() {
  const [typedLead, setTypedLead] = useState('');
  const [typedTease, setTypedTease] = useState('');
  const [showButton, setShowButton] = useState(false);
  
  // Hooks para animaciones al hacer scroll
  const [titleRef, titleVisible] = useScrollAnimation(0.1);
  
  const leadText = "Desarrollador Full Stack con enfoque en IA y automatización. Creo soluciones completas que integran backend escalable, interfaces intuitivas y visión por computadora. Especializado en transformar procesos industriales complejos en sistemas inteligentes y eficientes.";
  
  const teaseText = "Desde APIs que procesan millones de peticiones hasta sistemas de visión artificial en tiempo real. Trabajo con arquitecturas cloud, contenedores y frameworks de machine learning para construir productos que resuelven problemas reales y generan valor medible.";
  
  useEffect(() => {
    let leadIndex = 0;
    let teaseIndex = 0;
    
    // Typing del lead
    const leadTimer = setInterval(() => {
      if (leadIndex <= leadText.length) {
        setTypedLead(leadText.slice(0, leadIndex));
        leadIndex++;
      } else {
        clearInterval(leadTimer);
        // Iniciar typing del tease
        const teaseTimer = setInterval(() => {
          if (teaseIndex <= teaseText.length) {
            setTypedTease(teaseText.slice(0, teaseIndex));
            teaseIndex++;
          } else {
            clearInterval(teaseTimer);
            setShowButton(true);
          }
        }, 15);
      }
    }, 15);
    
    return () => clearInterval(leadTimer);
  }, []);

  return (
    <section className="about" id="about">
      <div className="container">
        <h2 ref={titleRef} className={`animate-glow ${titleVisible ? '' : ''}`}>Sobre mí</h2>
        
        {/* Texto descriptivo */}
        <div className="about-text-content">
          <p className="lead">
            {typedLead}
            {typedLead.length < leadText.length && <span className="cursor-inline"></span>}
          </p>
          
          <p className="tease">
            {typedTease}
            {typedTease.length < teaseText.length && <span className="cursor-inline"></span>}
          </p>
        </div>

        {/* Botón CV */}
        <div className="about-cta-center" style={{ opacity: showButton ? 1 : 0, transition: 'opacity 0.5s ease' }}>
          <a href="/cv.pdf" className="btn primary" download>
            Descargar CV
          </a>
        </div>

        {/* Tecnologías */}
        <SkillBars />
      </div>

      {/* ----------- PREMIOS ----------- */}
      <div className="awards-section">
        <h3 className="awards-title">Premios y Reconocimientos</h3>
        <div className="awards-row awards-three">
          <div className="award-card bordered">
            <FontAwesomeIcon icon={faMedal} className="award-icon gold" />
            <div className="award-content">
              <h4 className="award-title">
                Hackathon Barranqui-IA – 1er Lugar (2024)
              </h4>
              <p className="award-description">
                Otorgado por Google Developer Group
              </p>
              <a
                href="https://www.uninorte.edu.co/web/grupo-prensa/w/primera-hackaton-de-ia-en-el-caribe-traza-la-ruta-de-barranquilla-como-epicentro-tecnologico"
                target="_blank"
                rel="noreferrer"
                className="btn secondary"
              >
                Leer más
              </a>
            </div>
          </div>

          <div className="award-card bordered placeholder">
            <FontAwesomeIcon icon={faMedal} className="award-icon gold" />
            <div className="award-content">
              <p className="award-description">Próximamente...</p>
            </div>
          </div>

          <div className="award-card bordered">
            <FontAwesomeIcon icon={faMedal} className="award-icon gold" />
            <div className="award-content">
              <h4 className="award-title">
                Hackathon Barranqui-IA – 3er Lugar (2025)
              </h4>
              <p className="award-description">
                Otorgado por Google Developer Group
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
