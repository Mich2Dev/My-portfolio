import React, { useEffect, useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [typedText, setTypedText] = useState('');
  const [showElements, setShowElements] = useState({
    greeting: false,
    name: false,
    subtitle: false,
    typing: false,
    brief: false,
    contact: false,
    socials: false,
    avatar: false
  });
  
  const fullText = "Construyendo el futuro con React, Python, IA y sistemas embebidos. De la idea al código, del código a la realidad.";
  
  useEffect(() => {
    // Estrategia de aparición progresiva
    const timers = [];
    
    // 1. Avatar aparece primero (0ms)
    timers.push(setTimeout(() => setShowElements(prev => ({ ...prev, avatar: true })), 0));
    
    // 2. Saludo (300ms)
    timers.push(setTimeout(() => setShowElements(prev => ({ ...prev, greeting: true })), 300));
    
    // 3. Nombre (600ms)
    timers.push(setTimeout(() => setShowElements(prev => ({ ...prev, name: true })), 600));
    
    // 4. Subtítulo (1000ms)
    timers.push(setTimeout(() => setShowElements(prev => ({ ...prev, subtitle: true })), 1000));
    
    // 5. Contenedor de typing (1400ms) y comenzar a escribir
    timers.push(setTimeout(() => {
      setShowElements(prev => ({ ...prev, typing: true }));
      let index = 0;
      const typingTimer = setInterval(() => {
        if (index <= fullText.length) {
          setTypedText(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(typingTimer);
          // 6. Brief aparece después del typing (200ms después)
          setTimeout(() => setShowElements(prev => ({ ...prev, brief: true })), 200);
        }
      }, 30);
    }, 1400));
    
    // 7. Contacto (después del brief, 2800ms)
    timers.push(setTimeout(() => setShowElements(prev => ({ ...prev, contact: true })), 2800));
    
    // 8. Redes sociales (3200ms)
    timers.push(setTimeout(() => setShowElements(prev => ({ ...prev, socials: true })), 3200));
    
    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  return (
    <header className="header">
      <div className="hero-inner">
        <div className="hero-card">
          <div className="hero-left">
            <div className={`greeting ${showElements.greeting ? 'show' : ''}`}>Hola, soy</div>
            <h1 className={`name ${showElements.name ? 'show' : ''}`}>Michael Menco Cuello</h1>
            <p className={`subtitle ${showElements.subtitle ? 'show' : ''}`}>
              Full Stack Developer • AI & Computer Vision • Industrial Automation
            </p>
            
            <div className={`typing-container ${showElements.typing ? 'show' : ''}`}>
              <p className="typing-text">
                {typedText}
                {typedText.length < fullText.length && <span className="cursor"></span>}
              </p>
            </div>

            <p className={`brief ${showElements.brief ? 'show' : ''}`}>
              Ingeniero de software que domina el stack completo: desde APIs REST con Node.js y 
              Express hasta interfaces dinámicas con React. Especializado en integrar inteligencia 
              artificial (YOLO, TensorFlow, LangChain) con sistemas embebidos y automatización industrial. 
              Transformo desafíos complejos en soluciones elegantes que escalan.
            </p>

            <div className={`contact-info ${showElements.contact ? 'show' : ''}`}>
              <a href="mailto:mencocuellomaicol@gmail.com" className="contact-link">
                <FontAwesomeIcon icon={faEnvelope} />
                <span>mencocuellomaicol@gmail.com</span>
              </a>
              <a href="tel:+573013137911" className="contact-link">
                <FontAwesomeIcon icon={faPhone} />
                <span>+57 301 313 7911</span>
              </a>
              <div className="contact-link location">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span>Barranquilla, Colombia</span>
              </div>
            </div>

            <div className={`socials ${showElements.socials ? 'show' : ''}`}>
              <a href="https://github.com/Mich2Dev" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FontAwesomeIcon icon={faGithub} className="social-icon" title="GitHub" />
              </a>
              <a href="https://www.linkedin.com/in/maicol-menco-cuello-9a4248308/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} className="social-icon" title="LinkedIn" />
              </a>
            </div>
          </div>

          <div className={`hero-right ${showElements.avatar ? 'show' : ''}`} aria-hidden>
            <div className="avatar" title="Michael Menco Cuello">
              <div className="avatar-glow"></div>
              <img 
                src="/images/perfil_!.jpg" 
                alt="Michael Menco Cuello" 
                className="avatar-img" 
                style={{ 
                    borderRadius: '50%', 
                    width: '220px',
                    height: '220px', 
                    objectFit: 'cover' 
                }} 
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}