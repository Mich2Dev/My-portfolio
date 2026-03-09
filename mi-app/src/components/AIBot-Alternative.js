import React, { useState, useEffect } from 'react';
import './AIBot-Alternative.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRobot, faBrain, faCode, faLaptopCode, faTrophy, faRocket,
  faEnvelope, faDownload, faEye, faAward, faProjectDiagram
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function AIBotAlternative() {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [displayedMessage, setDisplayedMessage] = useState('');
  const [currentFace, setCurrentFace] = useState(0);
  const [isRotating, setIsRotating] = useState(true);
  const [glowIntensity, setGlowIntensity] = useState(1);

  const faces = [
    { icon: faRobot, color: '#4f46e5', label: 'Inicio' },
    { icon: faBrain, color: '#8b5cf6', label: 'IA' },
    { icon: faCode, color: '#ec4899', label: 'Código' },
    { icon: faLaptopCode, color: '#f59e0b', label: 'Proyectos' },
    { icon: faTrophy, color: '#10b981', label: 'Logros' },
    { icon: faRocket, color: '#06b6d4', label: 'Contacto' },
  ];

  const messages = [
    '🎯 Bot holográfico de Michael Menco',
    '💎 Diseño 3D con efectos de cristal',
    '🌈 Cada cara representa una sección',
    '✨ Rotación automática activada',
    '🔮 Tecnología: CSS 3D transforms',
    '⚡ Animaciones fluidas a 60fps',
  ];

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 500);

    // Cambiar mensaje cada 4 segundos
    const messageInterval = setInterval(() => {
      const randomMsg = messages[Math.floor(Math.random() * messages.length)];
      setMessage(randomMsg);
    }, 4000);

    // Cambiar cara cada 3 segundos
    const faceInterval = setInterval(() => {
      setCurrentFace(prev => (prev + 1) % faces.length);
    }, 3000);

    // Pulso de brillo
    const glowInterval = setInterval(() => {
      setGlowIntensity(prev => (prev === 1 ? 1.5 : 1));
    }, 2000);

    return () => {
      clearInterval(messageInterval);
      clearInterval(faceInterval);
      clearInterval(glowInterval);
    };
  }, []);

  // Efecto typewriter
  useEffect(() => {
    if (!message) return;
    
    let index = 0;
    setDisplayedMessage('');
    
    const typeInterval = setInterval(() => {
      if (index < message.length) {
        setDisplayedMessage(message.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 30);

    return () => clearInterval(typeInterval);
  }, [message]);

  const handleCubeClick = () => {
    setIsRotating(!isRotating);
    setMessage(isRotating ? '⏸️ Rotación pausada' : '▶️ Rotación activada');
  };

  return (
    <div className={`ai-bot-alt ${isVisible ? 'visible' : ''}`}>
      <div className="cube-container" onClick={handleCubeClick}>
        <div 
          className={`cube ${isRotating ? 'rotating' : ''}`}
          style={{ '--glow-intensity': glowIntensity }}
        >
          {faces.map((face, index) => (
            <div 
              key={index}
              className={`cube-face face-${index} ${currentFace === index ? 'active' : ''}`}
              style={{ '--face-color': face.color }}
            >
              <FontAwesomeIcon icon={face.icon} />
              <span className="face-label">{face.label}</span>
            </div>
          ))}
        </div>

        {/* Anillos orbitales */}
        <div className="orbital-ring ring-1"></div>
        <div className="orbital-ring ring-2"></div>
        <div className="orbital-ring ring-3"></div>

        {/* Partículas flotantes */}
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="floating-particle"
            style={{ '--particle-delay': `${i * 0.5}s` }}
          />
        ))}
      </div>

      {displayedMessage && (
        <div className="hologram-message">
          <div className="message-content">
            {displayedMessage}
            {displayedMessage.length < message.length && (
              <span className="cursor-blink">▋</span>
            )}
          </div>
          <div className="hologram-lines">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="holo-line" />
            ))}
          </div>
        </div>
      )}

      {/* Herramientas en hexágonos */}
      <div className="hex-tools">
        <div className="hex-tool" onClick={() => window.open('/cv.pdf', '_blank')}>
          <FontAwesomeIcon icon={faDownload} />
        </div>
        <div className="hex-tool" onClick={() => window.open('https://github.com/Mich2Dev', '_blank')}>
          <FontAwesomeIcon icon={faGithub} />
        </div>
        <div className="hex-tool" onClick={() => window.open('https://www.linkedin.com/in/maicol-menco-cuello-9a4248308/', '_blank')}>
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
      </div>
    </div>
  );
}
