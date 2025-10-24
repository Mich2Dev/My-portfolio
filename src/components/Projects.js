import React, { useEffect } from 'react';
import './Projects.css';

function ProjectCard({ title, description, link, image }) {
  return (
    <article className="project-card fade-in">
      {image && <img src={image} alt={title} className="project-image" />}
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noreferrer">Ver en GitHub</a>
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
      description: 'Tienda demo de productos — catálogo y carrito de ejemplo.',
      link: 'https://github.com/Mich2Dev/tienda',
      image: '/images/startup-landing.svg',
    },
    {
      title: 'vanti',
      description:
        'Herramienta para calibración de medidores de gas: extracción de lecturas y comparación con caudal.',
      link: 'https://github.com/Mich2Dev/vanti',
      image: '/images/task-manager.svg',
    },
  ];

  return (
    <section className="projects container" id="projects">
      <h2>Proyectos Destacados</h2>
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