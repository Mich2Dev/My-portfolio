import React from 'react';
import './Achievements.css';

export default function Achievements() {
  const achievements = [
    {
      title: 'Ganador de la Primera Hackatón de IA en el Caribe Colombiano',
      year: 2025,
      description: 'Participé en la primera hackatón de inteligencia artificial en el Caribe, donde lideré un equipo para desarrollar una solución innovadora que destacó entre los participantes.',
      link: 'https://www.uninorte.edu.co/web/grupo-prensa/w/primera-hackaton-de-ia-en-el-caribe-traza-la-ruta-de-barranquilla-como-epicentro-tecnologico#:~:text=Universidad%20Internacional-,Primera%20hackat%C3%B3n%20de%20IA%20en%20el%20Caribe%20traza%20la%20ruta,inteligencia%20artificial%20como%20herramienta%20principal.'
    },
    {
      title: 'Tercer lugar en competencia de tecnología',
      year: 2025,
      description: 'Obtuve el tercer lugar en una competencia nacional de tecnología, destacándome por mi enfoque en soluciones prácticas y efectivas.'
    },
    {
      title: 'Reconocimiento por Google Developer Group',
      year: 2025,
      description: 'Premiado por mi capacidad de resolver problemas con un enfoque innovador y orientado a resultados competitivos.'
    },
  ];

  return (
    <section className="achievements" id="achievements">
      <h3>Noticias y Logros</h3>
      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <div className="achievement-card" key={index}>
            <h4>{achievement.title} ({achievement.year})</h4>
            <p>{achievement.description}</p>
            {achievement.link && (
              <a href={achievement.link} target="_blank" rel="noopener noreferrer">
                Leer más
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}