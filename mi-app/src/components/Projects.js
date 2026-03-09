import React from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEye, faRocket, faRobot, faGaugeHigh, faTruck, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

function ProjectCard({ title, description, link, icon, index, tags }) {
  return (
    <article className="modern-project-card">
      
      <div className="card-image-wrapper">
        <div className="card-icon-display">
          <FontAwesomeIcon icon={icon} />
        </div>
        <div className="image-overlay">
          <a href={link} target="_blank" rel="noreferrer" className="view-icon">
            <FontAwesomeIcon icon={faEye} />
          </a>
        </div>
      </div>

      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        
        <div className="tech-tags">
          {tags.map((tag, i) => (
            <span key={i} className="tech-tag">{tag}</span>
          ))}
        </div>

        <p className="card-description">{description}</p>

        <div className="card-footer">
          <a href={link} target="_blank" rel="noreferrer" className="github-button">
            <FontAwesomeIcon icon={faGithub} />
            <span>Ver Repositorio</span>
          </a>
          <div className="rocket-icon">
            <FontAwesomeIcon icon={faRocket} />
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const projects = [
    {
      title: 'Gecko Agent',
      description: 'Chat conversacional con IA para extracción de datos de imágenes. Sistema de rastreo, monitoreo y búsqueda de personas perdidas.',
      link: 'https://github.com/Mich2Dev/gecko_agent',
      icon: faRobot,
      tags: ['IA', 'LangChain', 'Hackathon']
    },
    {
      title: 'Sistema de Calibración Vanti',
      description: 'Sistema de visión por computadora para calibración automática de medidores de gas en laboratorio usando YOLO.',
      link: 'https://github.com/Mich2Dev/vanti',
      icon: faGaugeHigh,
      tags: ['YOLO', 'Computer Vision', 'IoT']
    },
    {
      title: 'Cargo - Transporte de Carga',
      description: 'Plataforma para camioneros y transporte de carga. Backend robusto con autenticación JWT y tracking en tiempo real.',
      link: 'https://github.com/Mich2Dev/cargo',
      icon: faTruck,
      tags: ['Node.js', 'PostgreSQL', 'REST API']
    },
    {
      title: 'Tienda de Accesorios',
      description: 'E-commerce de accesorios desarrollado con arquitectura MVC en PHP. Sistema completo de gestión de productos y ventas.',
      link: 'https://github.com/Mich2Dev/Lalau',
      icon: faShoppingBag,
      tags: ['PHP', 'MVC', 'E-commerce']
    },
  ];

  return (
    <section className="projects container" id="projects">
      <h2 className="section-title">Proyectos & Repositorio</h2>
      <div className="modern-project-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            index={index}
            title={project.title}
            description={project.description}
            link={project.link}
            icon={project.icon}
            tags={project.tags}
          />
        ))}
      </div>
    </section>
  );
}
