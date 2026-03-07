import React, { useState, useEffect } from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function ProjectCard({ title, description, link, image, index }) {
  const [typedTitle, setTypedTitle] = useState('');
  const [typedDesc, setTypedDesc] = useState('');
  const [showButton, setShowButton] = useState(false);
  
  useEffect(() => {
    // Delay inicial basado en el índice de la tarjeta
    const initialDelay = index * 200;
    
    // Typing del título
    const titleTimer = setTimeout(() => {
      let titleIndex = 0;
      const titleInterval = setInterval(() => {
        if (titleIndex <= title.length) {
          setTypedTitle(title.slice(0, titleIndex));
          titleIndex++;
        } else {
          clearInterval(titleInterval);
          // Iniciar typing de descripción
          let descIndex = 0;
          const descInterval = setInterval(() => {
            if (descIndex <= description.length) {
              setTypedDesc(description.slice(0, descIndex));
              descIndex++;
            } else {
              clearInterval(descInterval);
              setShowButton(true);
            }
          }, 15);
        }
      }, 50);
    }, initialDelay);
    
    return () => clearTimeout(titleTimer);
  }, [title, description, index]);

  return (
    <article className="project-card">
      {image && <img src={image} alt={title} className="project-image" />}
      <div className="project-content">
        <h3 className="project-title">
          {typedTitle}
          {typedTitle.length < title.length && <span className="cursor-inline"></span>}
        </h3>
        <p className="project-description">
          {typedDesc}
          {typedDesc.length < description.length && <span className="cursor-inline"></span>}
        </p>
        <a 
          href={link} 
          target="_blank" 
          rel="noreferrer" 
          className={`github-link ${showButton ? 'show' : ''}`}
        >
          <FontAwesomeIcon icon={faGithub} /> Ver en GitHub
        </a>
      </div>
    </article>
  );
}

export default function Projects() {
  const [typedTitle, setTypedTitle] = useState('');
  const titleText = "Proyectos & Repositorio";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= titleText.length) {
        setTypedTitle(titleText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    
    return () => clearInterval(timer);
  }, []);
  const projects = [
    {
      title: 'Mich2dev',
      description: 'Repositorio técnico con implementaciones avanzadas, demos interactivas y documentación de arquitecturas escalables. Showcase de soluciones full stack y patrones de diseño.',
      link: 'https://github.com/Mich2Dev/Mich2dev',
      image: '/images/dashboard.svg',
    },
    {
      title: 'Tienda E-commerce',
      description: 'Plataforma de comercio electrónico full stack con React, gestión de estado avanzada, carrito de compras dinámico y sistema de pagos integrado. Arquitectura modular y escalable.',
      link: 'https://github.com/Mich2Dev/tienda',
      image: '/images/startup-landing.svg',
    },
    {
      title: 'Sistema de Calibración IA',
      description: 'Herramienta de visión por computadora para calibración automática mediante detección de dígitos analógicos. Implementa YOLO y procesamiento de imágenes en tiempo real.',
      link: 'https://github.com/Mich2Dev/vanti',
      image: '/images/task-manager.svg',
    },
    {
      title: 'Cargo - Gestión Logística',
      description: 'Backend robusto para gestión logística con Node.js, Express y PostgreSQL. Incluye autenticación JWT, middleware de seguridad, tracking en tiempo real y arquitectura RESTful escalable.',
      link: 'https://github.com/Mich2Dev/cargo',
      image: '/images/task-manager.svg',
    },
  ];

  return (
    <section className="projects container" id="projects">
      <h2 className="animate-slide-up">
        <span className="typing-title-projects">{typedTitle}</span>
        {typedTitle.length < titleText.length && <span className="cursor-projects"></span>}
      </h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            index={index}
            title={project.title}
            description={project.description}
            link={project.link}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
}