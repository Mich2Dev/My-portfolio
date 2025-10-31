import React, { useEffect } from 'react';
import './About.css';
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
  faGithub,
  faBootstrap,
  faLaravel,
  faMicrosoft,
  faGitlab
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
          <p className="lead">
            Desarrollador Full Stack con enfoque en soluciones integradas que
            combinan backend, frontend e inteligencia artificial. Busco crear
            experiencias tecnológicas escalables y eficientes.
          </p>
          <p className="tease">
            Mi trabajo une la automatización industrial, la visión artificial y
            la programación moderna para transformar ideas en productos reales.
          </p>
          <div className="about-cta">
            <a href="/cv.pdf" className="btn primary" download>
              Descargar CV
            </a>
          </div>
        </div>

        {/* ----------- CINTA GIRATORIA DE HERRAMIENTAS ----------- */}
        <aside className="about-side">
          <h3>Herramientas y habilidades</h3>
          <div className="skills-carousel-wrapper">

            {/* Fila superior → Backend + DevOps */}
            <div className="skills-track top">
              <FontAwesomeIcon icon={faMicrosoft} className="skill-icon" title=".NET / C#" />
              <FontAwesomeIcon icon={faPython} className="skill-icon python" title="Python / Flask" />
              <FontAwesomeIcon icon={faPhp} className="skill-icon" title="PHP / Laravel" />
              <FontAwesomeIcon icon={faNodeJs} className="skill-icon nodejs" title="Node.js" />
              <FontAwesomeIcon icon={faDatabase} className="skill-icon database" title="SQL / DB" />
              <FontAwesomeIcon icon={faDocker} className="skill-icon docker" title="Docker" />
              <FontAwesomeIcon icon={faGitAlt} className="skill-icon git" title="Git" />
              <FontAwesomeIcon icon={faGithub} className="skill-icon" title="GitHub" />
              <FontAwesomeIcon icon={faGitlab} className="skill-icon" title="SonarQube / CI" />
              <FontAwesomeIcon icon={faAws} className="skill-icon" title="AWS / Cloud" />
              <FontAwesomeIcon icon={faCogs} className="skill-icon" title="Automation / RPA" />
              <FontAwesomeIcon icon={faNetworkWired} className="skill-icon" title="Network Systems" />
            </div>

            {/* Fila inferior → Frontend + IA */}
            <div className="skills-track bottom">
              <FontAwesomeIcon icon={faReact} className="skill-icon react" title="React" />
              <FontAwesomeIcon icon={faJsSquare} className="skill-icon javascript" title="JavaScript" />
              <FontAwesomeIcon icon={faHtml5} className="skill-icon html" title="HTML" />
              <FontAwesomeIcon icon={faCss3Alt} className="skill-icon css" title="CSS / TailwindCSS" />
              <FontAwesomeIcon icon={faBootstrap} className="skill-icon" title="Bootstrap" />
              <FontAwesomeIcon icon={faCode} className="skill-icon" title="JQuery / Fetch API" />
              <FontAwesomeIcon icon={faBrain} className="skill-icon" title="LangChain / LangGraph" />
              <FontAwesomeIcon icon={faRobot} className="skill-icon" title="RPA / Automation" />
              <FontAwesomeIcon icon={faMicrochip} className="skill-icon" title="YOLO / Embedded AI" />
              <FontAwesomeIcon icon={faPython} className="skill-icon python" title="PyTorch / TensorFlow" />
            </div>

          </div>
        </aside>
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
