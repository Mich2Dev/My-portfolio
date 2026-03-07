import React, { useState, useEffect } from 'react';
import './About.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faJsSquare,
  faHtml5,
  faCss3Alt,
  faPython,
  faNodeJs,
  faGitAlt,
  faDocker,
  faPhp,
  faAws,
  // faGithub, // No usado actualmente
  faBootstrap,
  // faLaravel, // No usado actualmente
  faMicrosoft,
  // faGitlab // No usado actualmente
} from '@fortawesome/free-brands-svg-icons';

import {
  faCogs,
  faMicrochip,
  faBrain,
  faRobot,
  faDatabase,
  faCode,
  faNetworkWired,
  faMedal
} from '@fortawesome/free-solid-svg-icons';

export default function About() {
  const [typedLead, setTypedLead] = useState('');
  const [typedTease, setTypedTease] = useState('');
  const [showButton, setShowButton] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [visibleSkills, setVisibleSkills] = useState([]);
  
  // Hooks para animaciones al hacer scroll
  const [titleRef, titleVisible] = useScrollAnimation(0.1);
  // const [textRef, textVisible] = useScrollAnimation(0.1); // No usado actualmente
  // const [skillsRef, skillsVisible] = useScrollAnimation(0.1); // No usado actualmente
  
  const leadText = "Desarrollador Full Stack con dominio completo del ecosistema tecnológico moderno. Combino backend robusto (Node.js, Python, .NET), interfaces de usuario excepcionales (React, TailwindCSS) e inteligencia artificial de vanguardia (YOLO, LangChain, TensorFlow). Mi experiencia en automatización industrial y visión por computadora me permite crear soluciones que van más allá del código tradicional: sistemas que piensan, aprenden y se adaptan.";
  
  const teaseText = "Con herramientas como Docker para contenedores, AWS para la nube, y frameworks de IA para machine learning, construyo arquitecturas escalables que resuelven problemas reales. Desde APIs REST que manejan millones de peticiones hasta sistemas de visión artificial embebidos que procesan datos en tiempo real. Mi código no solo funciona, transforma negocios y automatiza procesos complejos.";
  
  useEffect(() => {
    let leadIndex = 0;
    let teaseIndex = 0;
    
    // Mostrar skills inmediatamente sin esperar al texto
    setTimeout(() => {
      setShowSkills(true);
      // Animar skills una por una
      const totalSkills = 20;
      for (let i = 0; i < totalSkills; i++) {
        setTimeout(() => {
          setVisibleSkills(prev => [...prev, i]);
        }, i * 80);
      }
    }, 500); // Aparecen después de medio segundo
    
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
        
        {/* Primer bloque: Texto a la izquierda, Skills Backend a la derecha */}
        <div className="about-row">
          <div className="about-text-block">
            <p className="lead">
              {typedLead}
              {typedLead.length < leadText.length && <span className="cursor-inline"></span>}
            </p>
          </div>
          
          <aside className={`skills-block ${showSkills ? 'show' : ''}`}>
            <h3 className="skills-title">Backend & DevOps</h3>
            <div className="skills-grid">
              <div className={`skill-item ${visibleSkills.includes(0) ? 'show' : ''}`}>
                <FontAwesomeIcon icon={faMicrosoft} className="skill-icon microsoft" />
                <span>.NET / C#</span>
              </div>
              <div className={`skill-item ${visibleSkills.includes(1) ? 'show' : ''}`}>
                <FontAwesomeIcon icon={faPython} className="skill-icon python" />
                <span>Python</span>
              </div>
              <div className={`skill-item ${visibleSkills.includes(2) ? 'show' : ''}`}>
                <FontAwesomeIcon icon={faPhp} className="skill-icon php" />
                <span>PHP</span>
              </div>
              <div className={`skill-item ${visibleSkills.includes(3) ? 'show' : ''}`}>
                <FontAwesomeIcon icon={faNodeJs} className="skill-icon nodejs" />
                <span>Node.js</span>
              </div>
              <div className={`skill-item ${visibleSkills.includes(4) ? 'show' : ''}`}>
                <FontAwesomeIcon icon={faDatabase} className="skill-icon database" />
                <span>SQL / DB</span>
              </div>
              <div className={`skill-item ${visibleSkills.includes(5) ? 'show' : ''}`}>
                <FontAwesomeIcon icon={faDocker} className="skill-icon docker" />
                <span>Docker</span>
              </div>
              <div className={`skill-item ${visibleSkills.includes(6) ? 'show' : ''}`}>
                <FontAwesomeIcon icon={faGitAlt} className="skill-icon git" />
                <span>Git</span>
              </div>
              <div className={`skill-item ${visibleSkills.includes(7) ? 'show' : ''}`}>
                <FontAwesomeIcon icon={faAws} className="skill-icon aws" />
                <span>AWS</span>
              </div>
            </div>
          </aside>
        </div>

        {/* Segundo bloque: Skills Frontend a la izquierda, Texto a la derecha */}
        <div className="about-row reverse">
          <aside className={`skills-block ${showSkills ? 'show' : ''}`}>
            <h3 className="skills-title">Frontend & UI</h3>
            <div className="skills-grid">
              <div className={`skill-item ${visibleSkills.includes(8) ? 'show' : ''}`}>
                <FontAwesomeIcon icon={faReact} className="skill-icon react" />
                <span>React</span>
              </div>
              <div className={`skill-item ${visibleSkills.includes(9) ? 'show' : ''}`}>
                <FontAwesomeIcon icon={faJsSquare} className="skill-icon javascript" />
                <span>JavaScript</span>
              </div>
              <div className={`skill-item ${visibleSkills.includes(10) ? 'show' : ''}`}>
                <FontAwesomeIcon icon={faHtml5} className="skill-icon html" />
                <span>HTML5</span>
              </div>
              <div className={`skill-item ${visibleSkills.includes(11) ? 'show' : ''}`}>
                <FontAwesomeIcon icon={faCss3Alt} className="skill-icon css" />
                <span>CSS3</span>
              </div>
              <div className={`skill-item ${visibleSkills.includes(12) ? 'show' : ''}`}>
                <FontAwesomeIcon icon={faBootstrap} className="skill-icon bootstrap" />
                <span>Bootstrap</span>
              </div>
              <div className={`skill-item ${visibleSkills.includes(13) ? 'show' : ''}`}>
                <FontAwesomeIcon icon={faCode} className="skill-icon" />
                <span>TailwindCSS</span>
              </div>
            </div>
          </aside>

          <div className="about-text-block">
            <p className="tease">
              {typedTease}
              {typedTease.length < teaseText.length && <span className="cursor-inline"></span>}
            </p>
          </div>
        </div>

        {/* Tercer bloque: Botón centrado */}
        <div className="about-row center">
          <div className="about-cta" style={{ opacity: showButton ? 1 : 0, transition: 'opacity 0.5s ease' }}>
            <a href="/cv.pdf" className="btn primary" download>
              Descargar CV
            </a>
          </div>
        </div>

        {/* Cuarto bloque: Skills AI horizontal - Full Width */}
        <div className="about-row-full">
          <aside className={`skills-block-wide ${showSkills ? 'show' : ''}`}>
            <h3 className="skills-title-main">AI & Machine Learning</h3>
            <p className="skills-subtitle">Inteligencia Artificial de Vanguardia</p>
            <div className="skills-grid-horizontal">
              <div className={`skill-item ${visibleSkills.includes(14) ? 'show' : ''}`}>
                <FontAwesomeIcon icon={faBrain} className="skill-icon ai" />
                <span>LangChain</span>
              </div>
              <div className={`skill-item ${visibleSkills.includes(15) ? 'show' : ''}`}>
                <FontAwesomeIcon icon={faRobot} className="skill-icon ai" />
                <span>RPA</span>
              </div>
              <div className={`skill-item ${visibleSkills.includes(16) ? 'show' : ''}`}>
                <FontAwesomeIcon icon={faMicrochip} className="skill-icon ai" />
                <span>YOLO</span>
              </div>
              <div className={`skill-item ${visibleSkills.includes(17) ? 'show' : ''}`}>
                <FontAwesomeIcon icon={faPython} className="skill-icon python" />
                <span>TensorFlow</span>
              </div>
              <div className={`skill-item ${visibleSkills.includes(18) ? 'show' : ''}`}>
                <FontAwesomeIcon icon={faCogs} className="skill-icon ai" />
                <span>OpenCV</span>
              </div>
              <div className={`skill-item ${visibleSkills.includes(19) ? 'show' : ''}`}>
                <FontAwesomeIcon icon={faNetworkWired} className="skill-icon ai" />
                <span>IoT</span>
              </div>
            </div>
          </aside>
        </div>
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
