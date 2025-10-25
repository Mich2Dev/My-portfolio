import React, { useEffect } from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function ProjectCard({ title, description, link, image }) {
  return (
    <article className="project-card fade-in">
      {image && <img src={image} alt={title} className="project-image" />}
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <a href={link} target="_blank" rel="noreferrer" className="github-link">
          <FontAwesomeIcon icon={faGithub} /> Ver en GitHub
        </a>
      </div>
    </article>
  );
}

export default function Projects() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('animate');
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll('.project-card');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'Mich2dev',
      description: 'Repositorio principal con demos, utilidades y documentación de proyectos.',
      link: 'https://github.com/Mich2Dev/Mich2dev',
      image: '/images/dashboard.svg',
    },
    {
      title: 'Tienda',
      description: 'Plataforma de comercio electrónico con catálogo de productos y funcionalidad de carrito.',
      link: 'https://github.com/Mich2Dev/tienda',
      image: '/images/startup-landing.svg',
    },
    {
      title: 'Sis Calibración',
      description:
        'Herramienta para calibración bajo detección de dígitos analógicos.',
      link: 'https://github.com/Mich2Dev/vanti',
      image: '/images/task-manager.svg',
    },
  ];

  return (
    <section className="projects container" id="projects">
      <h2>Proyectos & Repositorio</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
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