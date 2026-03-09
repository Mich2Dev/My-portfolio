import React from 'react';
import './SkillBars.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faReact, faJs, faPython, faNode, faHtml5, faCss3Alt, faPhp, faGitAlt, faDocker, faAws, faBootstrap
} from '@fortawesome/free-brands-svg-icons';
import { 
  faDatabase, faBrain, faEye, faRobot, faMicrochip, faCog, faServer, faInfinity
} from '@fortawesome/free-solid-svg-icons';

export default function SkillBars() {
  const skillCategories = [
    {
      title: 'Frontend',
      color: '#61dafb',
      skills: [
        { name: 'React', icon: faReact, color: '#61dafb' },
        { name: 'JavaScript', icon: faJs, color: '#f7df1e' },
        { name: 'TypeScript', icon: faJs, color: '#3178c6' },
        { name: 'Next.js', icon: faReact, color: '#000000' },
        { name: 'HTML5', icon: faHtml5, color: '#e34f26' },
        { name: 'CSS3', icon: faCss3Alt, color: '#1572b6' },
        { name: 'Bootstrap', icon: faBootstrap, color: '#7952b3' },
        { name: 'Tailwind', icon: faCss3Alt, color: '#06b6d4' },
      ]
    },
    {
      title: 'Backend',
      color: '#339933',
      skills: [
        { name: 'Node.js', icon: faNode, color: '#339933' },
        { name: 'Express', icon: faServer, color: '#000000' },
        { name: 'Python', icon: faPython, color: '#3776ab' },
        { name: '.NET/C#', icon: faCog, color: '#512bd4' },
        { name: 'PHP', icon: faPhp, color: '#777bb4' },
        { name: 'PostgreSQL', icon: faDatabase, color: '#336791' },
        { name: 'SQL', icon: faDatabase, color: '#4479a1' },
      ]
    },
    {
      title: 'IA & Vision',
      color: '#ff6f00',
      skills: [
        { name: 'YOLO', icon: faEye, color: '#00ffff' },
        { name: 'TensorFlow', icon: faBrain, color: '#ff6f00' },
        { name: 'OpenCV', icon: faEye, color: '#5c3ee8' },
        { name: 'LangChain', icon: faRobot, color: '#1c3c3c' },
      ]
    },
    {
      title: 'DevOps & Tools',
      color: '#2496ed',
      skills: [
        { name: 'Git', icon: faGitAlt, color: '#f05032' },
        { name: 'Docker', icon: faDocker, color: '#2496ed' },
        { name: 'Kubernetes', icon: faServer, color: '#326ce5' },
        { name: 'AWS', icon: faAws, color: '#ff9900' },
        { name: 'CI/CD', icon: faInfinity, color: '#00c853' },
        { name: 'RPA', icon: faRobot, color: '#ff6b6b' },
        { name: 'IoT', icon: faMicrochip, color: '#00c9a7' },
        { name: 'Excel', icon: faDatabase, color: '#217346' },
      ]
    },
  ];

  return (
    <section className="skill-bars-section">
      <h2 className="skill-bars-title">Stack Tecnológico</h2>
      
      <div className="skills-categories">
        {skillCategories.map((category, catIndex) => (
          <div key={catIndex} className="skill-category">
            <h3 
              className="category-title"
              style={{ '--category-color': category.color }}
            >
              {category.title}
            </h3>
            <div className="category-skills">
              {category.skills.map((skill, skillIndex) => (
                <div 
                  key={skillIndex} 
                  className="skill-badge"
                  style={{ '--skill-color': skill.color }}
                >
                  <FontAwesomeIcon icon={skill.icon} className="skill-badge-icon" />
                  <span className="skill-badge-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
