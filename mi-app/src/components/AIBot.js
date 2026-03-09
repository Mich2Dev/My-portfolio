import React, { useState, useEffect, useMemo, useCallback } from 'react';
import './AIBot.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRobot, faBrain, faCode, faLaptopCode, faTrophy, faRocket,
  faEnvelope, faDownload,
  faEye, faAward, faProjectDiagram, faFilePdf, faRoute
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin as faLinkedinBrand, faGithub as faGithubBrand, faWhatsapp as faWhatsappBrand } from '@fortawesome/free-brands-svg-icons';

export default function AIBot() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIcon, setCurrentIcon] = useState(0);
  const [message, setMessage] = useState('');
  const [displayedMessage, setDisplayedMessage] = useState(''); // Mensaje con efecto typewriter
  const [currentSection, setCurrentSection] = useState(0); // Ahora es un número para alternar posiciones
  const [showTools, setShowTools] = useState(false);
  const [faceExpression, setFaceExpression] = useState('happy'); // happy, talking, thinking, excited, surprised
  const [botAnimation, setBotAnimation] = useState(''); // spin, bounce, shake, wiggle
  const [sparkles, setSparkles] = useState([]); // Partículas de brillo al hacer clic
  const [showDeliveryBot, setShowDeliveryBot] = useState(false); // Bot mensajero
  const [cvIcon, setCvIcon] = useState(false); // Icono de CV flotante
  const [deliveryComplete, setDeliveryComplete] = useState(false); // Entrega completada
  const [hasGreeted, setHasGreeted] = useState(false); // Si ya saludó
  const [isActive, setIsActive] = useState(false); // Si el bot está activo (después del saludo)
  const [hoveredZone, setHoveredZone] = useState(null); // Zona donde está el cursor
  const [lastHoveredZone, setLastHoveredZone] = useState(null); // Última zona visitada
  const [mouseDebounceTimer, setMouseDebounceTimer] = useState(null); // Timer para debounce
  const [isTyping, setIsTyping] = useState(false); // Si está escribiendo un mensaje
  const [lastZoneChangeTime, setLastZoneChangeTime] = useState(0); // Timestamp del último cambio de zona
  const [isScrolling, setIsScrolling] = useState(false); // Si el usuario está haciendo scroll
  const [scrollTimer, setScrollTimer] = useState(null); // Timer para detectar fin de scroll
  const [botPosition, setBotPosition] = useState({ x: 0, y: 0 }); // Posición del bot en pantalla
  const [isMinimized, setIsMinimized] = useState(false); // Si el bot está minimizado
  
  const icons = useMemo(() => [faRobot, faBrain, faCode, faLaptopCode, faTrophy, faRocket], []);
  
  // Calcular posición CSS y mensaje contextual basado EXACTAMENTE en el CV
  const getPositionAndMessage = useCallback(() => {
    // Mensajes organizados con COHERENCIA NARRATIVA - cada mensaje tiene contexto completo
    const zones = [
      // ZONA 1: PRESENTACIÓN INICIAL
      {
        position: { bottom: '60%', left: '50%' },
        messages: [
          '👋 Hola, soy el asistente de Michael Menco',
          '🤖 Te mostraré su portafolio profesional',
        ]
      },
      
      // ZONA 2: QUIÉN ES
      {
        position: { bottom: '58%', left: '70%' },
        messages: [
          '👨‍💻 Michael Menco - Ingeniero Full Stack',
          '📍 Desarrollador de Barranquilla, Colombia',
        ]
      },
      
      // ZONA 3: ESPECIALIZACIÓN
      {
        position: { bottom: '56%', left: '30%' },
        messages: [
          '🎯 Experto en IA y Computer Vision',
          '⚡ Desarrollador Full Stack con automatización',
        ]
      },
      
      // ZONA 4: CONTACTO PRINCIPAL
      {
        position: { bottom: '54%', left: '25%' },
        messages: [
          '📧 Contáctalo: mencocuellomaicol@gmail.com',
          '📱 WhatsApp disponible: +57 301 313 7911',
        ]
      },
      
      // ZONA 5: STACK BACKEND
      {
        position: { bottom: '50%', left: '70%' },
        messages: [
          '⚙️ Domina Backend: .NET/C#, Python, Node.js',
          '🗄️ Maneja bases de datos SQL y PostgreSQL',
        ]
      },
      
      // ZONA 6: STACK FRONTEND
      {
        position: { bottom: '48%', left: '25%' },
        messages: [
          '⚛️ Crea interfaces con React y JavaScript',
          '🎨 Diseña con HTML5, CSS3 y Bootstrap',
        ]
      },
      
      // ZONA 7: INTELIGENCIA ARTIFICIAL
      {
        position: { bottom: '46%', left: '70%' },
        messages: [
          '🤖 Implementa IA con YOLO y TensorFlow',
          '🧠 Usa LangChain para procesamiento de texto',
        ]
      },
      
      // ZONA 8: DEVOPS Y HERRAMIENTAS
      {
        position: { bottom: '44%', left: '30%' },
        messages: [
          '🐳 Trabaja con Docker, Git y AWS',
          '🔧 Automatiza procesos industriales e IoT',
        ]
      },
      
      // ZONA 9: FILOSOFÍA DE TRABAJO
      {
        position: { bottom: '42%', left: '50%' },
        messages: [
          '💡 Construye soluciones inteligentes y adaptables',
          '🏗️ Diseña arquitecturas escalables y limpias',
        ]
      },
      
      // ZONA 10: LOGRO PRINCIPAL
      {
        position: { bottom: '38%', left: '50%' },
        messages: [
          '🏆 Ganó 1er Lugar en Hackathon de IA 2024',
          '🥇 Hackathon Barranqui-IA organizado por Google',
          '⭐ Primera competencia de IA en el Caribe',
        ]
      },
      
      // ZONA 11: PROYECTO 1 - MICH2DEV
      {
        position: { bottom: '32%', left: '20%' },
        messages: [
          '💻 Mich2dev: Su repositorio de arquitecturas',
          '📚 Contiene implementaciones avanzadas',
          '🏗️ Código escalable y bien documentado',
        ]
      },
      
      // ZONA 12: PROYECTO 2 - E-COMMERCE
      {
        position: { bottom: '30%', left: '50%' },
        messages: [
          '🛒 E-commerce Full Stack funcional',
          '⚛️ Desarrollado con React y estado avanzado',
          '💳 Incluye carrito, pagos e inventario',
        ]
      },
      
      // ZONA 13: PROYECTO 3 - IA CALIBRACIÓN
      {
        position: { bottom: '28%', left: '80%' },
        messages: [
          '🤖 Sistema de Calibración con IA',
          '📹 Usa Computer Vision y YOLO en tiempo real',
          '🎯 Detecta dígitos analógicos automáticamente',
        ]
      },
      
      // ZONA 14: PROYECTO 4 - CARGO
      {
        position: { bottom: '26%', left: '35%' },
        messages: [
          '📦 Cargo: Sistema de Gestión Logística',
          '🔐 Backend con Node.js y PostgreSQL',
          '🔒 Seguridad con JWT y tracking completo',
        ]
      },
      
      // ZONA 15: MENÚ SOCIAL
      {
        position: { bottom: '50%', left: '92%' },
        messages: [
          '🌐 Visita su GitHub: Mich2Dev',
          '💼 Conéctate con él en LinkedIn',
          '📱 Escríbele por WhatsApp o Email',
        ]
      },
      
      // ZONA 16: LLAMADO A LA ACCIÓN - CONTACTO
      {
        position: { bottom: '18%', left: '50%' },
        messages: [
          '📧 ¿Tienes un proyecto? Contáctalo ahora',
          '💬 Responde rápido y trabaja remoto',
          '🤝 Está disponible para colaborar',
        ]
      },
      
      // ZONA 17: CIERRE PROFESIONAL
      {
        position: { bottom: '10%', left: '50%' },
        messages: [
          '✨ Convierte ideas en software real',
          '🚀 Busca nuevos desafíos técnicos',
          '💼 Ubicado en Barranquilla - Remoto OK',
        ]
      },
    ];

    const zone = zones[currentSection % zones.length];
    const message = zone.messages[Math.floor(Math.random() * zone.messages.length)];
    
    console.log('🤖 Bot en zona:', currentSection % zones.length, '| Mensaje:', message);
    
    return {
      position: zone.position,
      message: message
    };
  }, [currentSection]);

  // Activar bot con el primer evento (scroll, hover o clic) - SOLO UNA VEZ
  const activateBot = useCallback(() => {
    if (!hasGreeted && isVisible) {
      setHasGreeted(true);
      
      // Saludo inicial sin sonar a publicidad
      const greetings = [
        '👋 Asistente de Michael. Interactúa conmigo',
        '🤖 Bot de Michael Menco. Toca para explorar',
        '✨ Asistente virtual. Toca aquí',
        '🎯 Explora el portafolio. Toca el bot',
      ];
      
      setMessage(greetings[Math.floor(Math.random() * greetings.length)]);
      setFaceExpression('excited');
      setBotAnimation('wiggle');
      
      setTimeout(() => {
        setFaceExpression('talking');
        setBotAnimation('');
      }, 800);
      
      setTimeout(() => {
        setFaceExpression('happy');
        // Activar el bot después del saludo
        setIsActive(true);
      }, 3000);
    }
  }, [hasGreeted, isVisible]);
  
  const startTour = () => {
    setMessage('🎯 Recorrido iniciado. Sígueme');
    setFaceExpression('excited');
    setBotAnimation('spin');
    
    setTimeout(() => {
      setFaceExpression('happy');
      setBotAnimation('');
    }, 3000);
    
    // Secuencia de navegación por secciones
    const sections = [
      { id: 'about', delay: 4000, message: '👨‍💻 Stack técnico. Todo lo que domina' },
      { id: 'projects', delay: 10000, message: '🚀 Proyectos desplegados. Código real' },
      { id: null, selector: '.awards-section', delay: 16000, message: '🏆 Hackathon ganado. 1er lugar' },
      { id: 'contact', delay: 22000, message: '📧 Contacto directo. Elige tu canal' }
    ];
    
    sections.forEach(section => {
      setTimeout(() => {
        const element = section.id 
          ? document.getElementById(section.id)
          : document.querySelector(section.selector);
        
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          setMessage(section.message);
          setFaceExpression('talking');
          
          setTimeout(() => {
            setFaceExpression('happy');
          }, 2000);
        }
      }, section.delay);
    });
    
    // Mensaje final
    setTimeout(() => {
      setMessage('✨ Recorrido completo. Preguntas?');
      setFaceExpression('excited');
      setTimeout(() => {
        setFaceExpression('happy');
      }, 5000);
    }, 28000);
  };
  
  // Efecto typewriter para escribir el mensaje letra por letra
  useEffect(() => {
    if (!message) {
      setDisplayedMessage('');
      return;
    }
    
    let index = 0;
    setDisplayedMessage('');
    
    // Velocidad de escritura variable para más naturalidad
    const baseSpeed = 25; // Velocidad base más rápida
    
    const typeNextChar = () => {
      if (index <= message.length) {
        setDisplayedMessage(message.slice(0, index));
        index++;
        
        // Velocidad variable: más rápido en espacios, más lento en puntuación
        const char = message[index - 1];
        let delay = baseSpeed;
        
        if (char === ' ') delay = baseSpeed * 0.4; // Espacios muy rápidos
        else if (char === ',' || char === ';') delay = baseSpeed * 1.5; // Pausas cortas en comas
        else if (char === '.' || char === '!' || char === '?') delay = baseSpeed * 2; // Pausas en puntos
        else delay = baseSpeed + Math.random() * 10; // Variación aleatoria pequeña
        
        setTimeout(typeNextChar, delay);
      }
    };
    
    typeNextChar();
    
    return () => {}; // Cleanup si es necesario
  }, [message]);
  
  
  // Herramientas contextuales por sección - acciones útiles tipo Mickey Mouse
  const sectionTools = {
    header: [
      { 
        icon: faRoute, 
        label: 'Tour Guiado', 
        action: startTour,
        message: '🎯 Tour iniciado. Sígueme si puedes'
      },
      { 
        icon: faEye, 
        label: 'Ver CV', 
        action: () => window.open('/cv.pdf', '_blank'),
        message: '📄 CV abierto. Léelo completo'
      },
      { 
        icon: faEnvelope, 
        label: 'Enviar Email', 
        action: () => window.location.href = 'mailto:mencocuellomaicol@gmail.com',
        message: '📧 Email listo. Escribe algo bueno'
      },
      { 
        icon: faLinkedinBrand, 
        label: 'LinkedIn', 
        action: () => window.open('https://www.linkedin.com/in/maicol-menco-cuello-9a4248308/', '_blank'),
        message: '💼 LinkedIn abierto. Networking real'
      },
      { 
        icon: faProjectDiagram, 
        label: 'Ver Proyectos', 
        action: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }),
        message: '🚀 Proyectos. Código que funciona'
      },
    ],
    about: [
      { 
        icon: faDownload, 
        label: 'Descargar CV', 
        action: () => window.open('/cv.pdf', '_blank'),
        message: '💾 CV descargando. Todo está ahí'
      },
      { 
        icon: faGithubBrand, 
        label: 'Ver GitHub', 
        action: () => window.open('https://github.com/Mich2Dev', '_blank'),
        message: '💻 GitHub abierto. Código real, no demos'
      },
      { 
        icon: faProjectDiagram, 
        label: 'Ir a Proyectos', 
        action: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }),
        message: '🎯 Proyectos desplegados. Funcionan'
      },
      { 
        icon: faAward, 
        label: 'Ver Premios', 
        action: () => document.querySelector('.awards-section')?.scrollIntoView({ behavior: 'smooth' }),
        message: '🏆 Premios ganados. No participaciones'
      },
    ],
    projects: [
      { 
        icon: faGithubBrand, 
        label: 'Ver GitHub', 
        action: () => window.open('https://github.com/Mich2Dev', '_blank'),
        message: '👨‍💻 GitHub. Código limpio y documentado'
      },
      { 
        icon: faEye, 
        label: 'Más Proyectos', 
        action: () => window.open('https://github.com/Mich2Dev?tab=repositories', '_blank'),
        message: '🔍 Más repositorios. Todos funcionales'
      },
      { 
        icon: faEnvelope, 
        label: 'Contactar', 
        action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }),
        message: '📬 Contacto. Responde rápido'
      },
      { 
        icon: faDownload, 
        label: 'Descargar CV', 
        action: () => window.open('/cv.pdf', '_blank'),
        message: '📥 CV completo. Revísalo bien'
      },
    ],
    awards: [
      { 
        icon: faAward, 
        label: 'Leer Noticia', 
        action: () => window.open('https://www.uninorte.edu.co/web/grupo-prensa/w/primera-hackaton-de-ia-en-el-caribe-traza-la-ruta-de-barranquilla-como-epicentro-tecnologico', '_blank'),
        message: '📰 Noticia oficial. Google organizó'
      },
      { 
        icon: faLinkedinBrand, 
        label: 'LinkedIn', 
        action: () => window.open('https://www.linkedin.com/in/maicol-menco-cuello-9a4248308/', '_blank'),
        message: '🤝 LinkedIn. Conéctate profesionalmente'
      },
      { 
        icon: faEnvelope, 
        label: 'Contactar', 
        action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }),
        message: '✉️ Contacto. Proyectos desafiantes'
      },
      { 
        icon: faGithubBrand, 
        label: 'Ver GitHub', 
        action: () => window.open('https://github.com/Mich2Dev', '_blank'),
        message: '⭐ Código ganador. Funcional y limpio'
      },
    ],
    contact: [
      { 
        icon: faEnvelope, 
        label: 'Enviar Email', 
        action: () => window.location.href = 'mailto:mencocuellomaicol@gmail.com',
        message: '📨 Email listo. Escribe algo interesante'
      },
      { 
        icon: faWhatsappBrand, 
        label: 'WhatsApp', 
        action: () => window.open('https://wa.me/573013137911', '_blank'),
        message: '💬 WhatsApp. Directo y rápido'
      },
      { 
        icon: faLinkedinBrand, 
        label: 'LinkedIn', 
        action: () => window.open('https://www.linkedin.com/in/maicol-menco-cuello-9a4248308/', '_blank'),
        message: '🌐 LinkedIn. Networking profesional'
      },
      { 
        icon: faDownload, 
        label: 'Descargar CV', 
        action: () => window.open('/cv.pdf', '_blank'),
        message: '📑 CV descargado. Léelo completo'
      },
    ]
  };

  useEffect(() => {
    // Aparecer después de 2 segundos
    const appearTimer = setTimeout(() => {
      setIsVisible(true);
      
      // Activar automáticamente después de 1 segundo de aparecer
      setTimeout(() => {
        if (!hasGreeted) {
          activateBot();
        }
      }, 1000);
    }, 2000);

    // Detectar zona donde está el cursor del usuario con DEBOUNCE LARGO y COOLDOWN
    const handleMouseMove = (e) => {
      // No detectar si está escribiendo, haciendo scroll, o si cambió de zona recientemente
      if (!isActive || isTyping || isScrolling) return;
      
      // Cooldown: no permitir cambios de zona más frecuentes que cada 5 segundos
      const now = Date.now();
      const timeSinceLastChange = now - lastZoneChangeTime;
      if (timeSinceLastChange < 5000) return; // Mínimo 5 segundos entre cambios
      
      // Limpiar timer anterior
      if (mouseDebounceTimer) {
        clearTimeout(mouseDebounceTimer);
      }
      
      // Crear nuevo timer con debounce de 2500ms (2.5 segundos)
      const timer = setTimeout(() => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;
        
        // Calcular posición relativa del cursor
        const relativeY = (windowHeight - mouseY) / windowHeight * 100; // bottom %
        const relativeX = mouseX / windowWidth * 100; // left %
        
        // Detectar zona basada en la posición del cursor
        let detectedZone = null;
        
        // HEADER (arriba)
        if (relativeY > 70) {
          if (relativeX > 60) {
            detectedZone = 'header-avatar';
          } else if (relativeX < 40) {
            detectedZone = 'header-info';
          } else {
            detectedZone = 'header-center';
          }
        }
        // ABOUT (medio-alto)
        else if (relativeY > 40 && relativeY <= 70) {
          if (relativeX < 40) {
            detectedZone = 'about-description';
          } else if (relativeX > 60) {
            detectedZone = 'about-skills';
          } else {
            detectedZone = 'about-center';
          }
        }
        // PROJECTS (medio)
        else if (relativeY > 20 && relativeY <= 40) {
          detectedZone = 'projects';
        }
        // CONTACT/FOOTER (abajo)
        else if (relativeY <= 20) {
          detectedZone = 'contact';
        }
        
        // MENÚ LATERAL DERECHO
        if (relativeX > 90) {
          detectedZone = 'social-menu';
        }
        
        // Solo actualizar si cambió de zona Y ha pasado suficiente tiempo
        if (detectedZone && detectedZone !== hoveredZone) {
          setHoveredZone(detectedZone);
          setLastZoneChangeTime(Date.now());
        }
      }, 2500); // Esperar 2.5 segundos antes de cambiar
      
      setMouseDebounceTimer(timer);
    };
    
    // Detectar cuando el usuario está haciendo scroll
    const handleScrollStart = () => {
      setIsScrolling(true);
      
      // Limpiar timer anterior
      if (scrollTimer) {
        clearTimeout(scrollTimer);
      }
      
      // Después de 1 segundo sin scroll, permitir detección de nuevo
      const timer = setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
      
      setScrollTimer(timer);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScrollStart, { passive: true });
    
    // Detectar sección actual con scroll - simplificado
    const handleScroll = () => {
      // Detectar botón de CV - activar animación de entrega
      if (!deliveryComplete && isVisible && isActive) {
        const cvButton = document.querySelector('.about-cta');
        if (cvButton) {
          const rect = cvButton.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight - 100 && rect.bottom > 0;
          
          if (isVisible && !showDeliveryBot) {
            // Iniciar animación de entrega del CV después de 1 segundo
            setTimeout(() => {
              setShowDeliveryBot(true);
              setFaceExpression('surprised');
              
              // Después de 2 segundos, el bot mensajero entrega el CV
              setTimeout(() => {
                setCvIcon(true);
                setFaceExpression('excited');
                
                // El bot mensajero desaparece
                setTimeout(() => {
                  setShowDeliveryBot(false);
                  setDeliveryComplete(true);
                  
                  // El bot principal muestra el CV
                  setTimeout(() => {
                    setFaceExpression('happy');
                    
                    // El icono de CV desaparece después de 5 segundos
                    setTimeout(() => {
                      setCvIcon(false);
                    }, 5000);
                  }, 1000);
                }, 1500);
              }, 2000);
            }, 1000);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Ejecutar al inicio

    // Cambiar icono con intervalo aleatorio
    const changeIcon = () => {
      setCurrentIcon(prev => (prev + 1) % icons.length);
      const nextIconTime = 1800 + Math.random() * 1400; // Entre 1.8 y 3.2 segundos
      setTimeout(changeIcon, nextIconTime);
    };
    const iconTimer = setTimeout(changeIcon, 2000);

    // Animaciones aleatorias con intervalos variables - más frecuentes
    const randomAnimations = () => {
      // Solo hacer animaciones si está activo
      if (isActive && isVisible && !showTools && faceExpression === 'happy' && !showDeliveryBot) {
        const animations = ['wiggle', 'bounce', 'pulse-strong'];
        const randomAnim = animations[Math.floor(Math.random() * animations.length)];
        
        setBotAnimation(randomAnim);
        
        setTimeout(() => {
          setBotAnimation('');
        }, 800);
      }
      
      // Programar siguiente animación con tiempo aleatorio
      const nextAnimTime = 6000 + Math.random() * 6000; // Entre 6 y 12 segundos
      setTimeout(randomAnimations, nextAnimTime);
    };

    const animTimer = setTimeout(randomAnimations, 8000);
    


    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScrollStart);
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(appearTimer);
      clearTimeout(iconTimer);
      clearTimeout(animTimer);
      if (mouseDebounceTimer) clearTimeout(mouseDebounceTimer);
      if (scrollTimer) clearTimeout(scrollTimer);
    };
  }, [currentSection, isVisible, showTools, faceExpression, showDeliveryBot, isActive, hasGreeted, deliveryComplete, icons, hoveredZone, isTyping, mouseDebounceTimer, scrollTimer, lastZoneChangeTime, isScrolling, activateBot]);

  // Reaccionar cuando el usuario pasa el cursor por una zona
  useEffect(() => {
    if (!hoveredZone || !isActive || hoveredZone === lastHoveredZone || isTyping || isScrolling) return;
    
    // Mensajes contextuales organizados por zona con COHERENCIA
    const zoneMessages = {
      'header-avatar': [
        '👋 Aquí está Michael Menco Cuello',
        '📸 Ingeniero Full Stack especializado en IA',
      ],
      'header-info': [
        '📧 Información de contacto disponible',
        '📱 Email: mencocuellomaicol@gmail.com',
        '☎️ WhatsApp: +57 301 313 7911',
      ],
      'header-center': [
        '✨ Bienvenido al portafolio de Michael',
        '💼 Full Stack Developer con enfoque en IA',
        '🚀 Explora proyectos y experiencia técnica',
      ],
      'about-description': [
        '📝 Sobre Michael y su experiencia',
        '👨‍💻 Dominio completo: Backend, Frontend e IA',
        '🔧 Especialista en automatización industrial',
      ],
      'about-skills': [
        '⚙️ Stack técnico completo',
        '💻 Backend: .NET/C#, Python, Node.js, PHP',
        '⚛️ Frontend: React, JavaScript, HTML5, CSS3',
        '🤖 IA: YOLO, TensorFlow, LangChain, OpenCV',
      ],
      'about-center': [
        '🎯 Sección de habilidades técnicas',
        '💡 Tecnologías dominadas y en uso',
      ],
      'projects': [
        '🚀 Proyectos destacados de Michael',
        '💻 Mich2dev: Arquitecturas escalables',
        '🛒 E-commerce: Sistema completo funcional',
        '🤖 Calibración IA: Computer Vision con YOLO',
        '📦 Cargo: Backend logístico robusto',
      ],
      'contact': [
        '📧 Sección de contacto',
        '💬 Email, WhatsApp, LinkedIn disponibles',
        '⚡ Respuesta rápida garantizada',
        '🌍 Trabajo remoto disponible',
      ],
      'social-menu': [
        '🌐 Menú de redes sociales',
        '💼 GitHub: Mich2Dev - Código público',
        '🔗 LinkedIn para networking profesional',
        '📱 WhatsApp para contacto directo',
      ],
    };
    
    const messages = zoneMessages[hoveredZone];
    if (messages) {
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      
      // Marcar que está escribiendo
      setIsTyping(true);
      setMessage(randomMessage);
      setLastHoveredZone(hoveredZone);
      
      // Calcular tiempo de escritura basado en longitud del mensaje
      const typingTime = randomMessage.length * 25; // 25ms por carácter
      
      // Después de terminar de escribir, esperar 3 segundos antes de permitir otro cambio
      setTimeout(() => {
        setTimeout(() => {
          setIsTyping(false);
        }, 3000); // Esperar 3 segundos después de terminar de escribir
      }, typingTime);
      
      console.log('🎯 Usuario en zona:', hoveredZone, '| Mensaje:', randomMessage);
    }
  }, [hoveredZone, isActive, lastHoveredZone, isTyping, isScrolling]);
  useEffect(() => {
    if (!isActive || !isVisible) return;
    
    // Si el usuario está interactuando (cursor sobre una zona), no cambiar automáticamente
    if (hoveredZone) return;
    
    // Obtener mensaje contextual de la zona actual
    const { message: contextMessage } = getPositionAndMessage();
    console.log('📝 Actualizando mensaje automático:', contextMessage);
    setMessage(contextMessage);
    
    setFaceExpression('talking');
    setBotAnimation('wiggle');
    
    setTimeout(() => {
      setFaceExpression('happy');
      setBotAnimation('');
    }, 2000);
    
  }, [currentSection, isActive, isVisible, hoveredZone, getPositionAndMessage]);

  // Sistema de movimiento automático: cada cambio de currentSection actualiza posición y mensaje
  // SOLO si el usuario NO está interactuando con el cursor

  // Cambiar mensaje y posición cada 6 segundos (solo si no hay interacción del cursor)
  useEffect(() => {
    if (!isActive) return;
    
    const initialDelay = hasGreeted ? 2000 : 0;
    
    const initialTimer = setTimeout(() => {
      // Función para cambiar a la siguiente zona
      const moveToNextZone = () => {
        // Solo mover automáticamente si el usuario NO está interactuando
        if (!hoveredZone && !isTyping) {
          setCurrentSection(prev => {
            const next = prev + 1;
            console.log('🔄 Bot moviéndose a zona:', next);
            return next;
          });
        }
      };
      
      // Primera ejecución inmediata
      moveToNextZone();
      
      // Luego cada 6 segundos
      const interval = setInterval(moveToNextZone, 6000);
      
      return () => clearInterval(interval);
    }, initialDelay);

    return () => {
      clearTimeout(initialTimer);
    };
  }, [isActive, hasGreeted, hoveredZone, isTyping]);

  const handleBotClick = () => {
    console.log('🤖 Bot clicked! hasGreeted:', hasGreeted, 'isMinimized:', isMinimized, 'showTools:', showTools);
    
    // Activar bot con el clic SOLO si no ha saludado
    if (!hasGreeted) {
      activateBot();
      return; // No abrir herramientas en el primer clic
    }
    
    // Si está minimizado, restaurar
    if (isMinimized) {
      setIsMinimized(false);
      return;
    }
    
    // Calcular posición actual del bot en la pantalla SIEMPRE
    // Usar requestAnimationFrame para asegurar que el DOM esté actualizado
    requestAnimationFrame(() => {
      const botElement = document.querySelector('.bot-circle');
      if (botElement) {
        const rect = botElement.getBoundingClientRect();
        const newPosition = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2
        };
        setBotPosition(newPosition);
        console.log('🎯 Bot position:', newPosition, 'Rect:', rect);
      } else {
        console.error('❌ Bot element not found!');
      }
    });
    
    console.log('🔧 Toggling tools. Current showTools:', showTools, 'Will be:', !showTools);
    setShowTools(!showTools);
    
    // Crear partículas de brillo
    const newSparkles = [];
    for (let i = 0; i < 8; i++) {
      newSparkles.push({
        id: Date.now() + i,
        angle: (360 / 8) * i,
        color: '#ffd700',
      });
    }
    setSparkles(newSparkles);
    setTimeout(() => setSparkles([]), 800);
    
    if (!showTools) {
      // Al abrir herramientas: sorpresa + giro
      setFaceExpression('surprised');
      setBotAnimation('spin');
      setTimeout(() => {
        setFaceExpression('excited');
        setBotAnimation('');
      }, 600);
      setTimeout(() => setFaceExpression('happy'), 1500);
    } else {
      // Al cerrar herramientas: rebote
      setBotAnimation('bounce');
      setTimeout(() => setBotAnimation(''), 500);
    }
  };

  const handleBotHover = () => {
    // Hover desactivado - no hace nada para evitar interferencias
  };
  
  // Doble clic para minimizar el bot
  const handleBotDoubleClick = () => {
    setIsMinimized(!isMinimized);
    setShowTools(false);
    setMessage(isMinimized ? '👋 Estoy de vuelta' : '😴 Modo compacto');
  };

  const handleToolClick = (tool) => {
    // Ejecutar la acción de la herramienta
    tool.action();
    
    // Reacción del bot
    setFaceExpression('excited');
    setBotAnimation('jump');
    
    // Crear confeti
    createConfetti();
    
    // Volver a normal
    setTimeout(() => {
      setFaceExpression('happy');
      setBotAnimation('');
    }, 3000);
  };

  const createConfetti = () => {
    const newConfetti = [];
    for (let i = 0; i < 12; i++) {
      newConfetti.push({
        id: Date.now() + i,
        angle: (360 / 12) * i,
        color: ['#4f46e5', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981'][Math.floor(Math.random() * 5)],
      });
    }
    setSparkles(newConfetti);
    setTimeout(() => setSparkles([]), 1000);
  };

  const tools = sectionTools[currentSection] || sectionTools.header;

  return (
    <div 
      className={`ai-bot ${isVisible ? 'visible' : ''} ${isActive ? 'active' : ''} ${isMinimized ? 'minimized' : ''}`}
      style={{
        bottom: hoveredZone 
          ? (() => {
              const zonePositions = {
                'header-avatar': '60%',
                'header-info': '55%',
                'header-center': '58%',
                'about-description': '50%',
                'about-skills': '48%',
                'about-center': '50%',
                'projects': '30%',
                'contact': '15%',
                'social-menu': '50%',
              };
              return zonePositions[hoveredZone] || getPositionAndMessage().position.bottom;
            })()
          : getPositionAndMessage().position.bottom,
        left: hoveredZone 
          ? (() => {
              const zonePositions = {
                'header-avatar': '70%',
                'header-info': '25%',
                'header-center': '50%',
                'about-description': '25%',
                'about-skills': '70%',
                'about-center': '50%',
                'projects': '50%',
                'contact': '50%',
                'social-menu': '88%',
              };
              return zonePositions[hoveredZone] || getPositionAndMessage().position.left;
            })()
          : getPositionAndMessage().position.left,
        right: 'auto',
        top: 'auto',
      }}
      onDoubleClick={handleBotDoubleClick}
      title={isMinimized ? "Doble clic para restaurar" : "Doble clic para minimizar"}
    >
      <div className="bot-container">
        {/* Círculos de pulso */}
        <div className="pulse-ring"></div>
        <div className="pulse-ring delay-1"></div>
        <div className="pulse-ring delay-2"></div>
        
        {/* Bot principal */}
        <div 
          className={`bot-circle ${botAnimation}`} 
          onClick={handleBotClick}
          onMouseEnter={handleBotHover}
        >
          {/* Cara del bot con expresiones */}
          <div className={`bot-face ${faceExpression}`}>
            {/* Ojos */}
            <div className="bot-eyes">
              <div className="bot-eye left"></div>
              <div className="bot-eye right"></div>
            </div>
            {/* Boca */}
            <div className="bot-mouth"></div>
          </div>
          
          {/* Icono de fondo */}
          <FontAwesomeIcon icon={icons[currentIcon]} className="bot-icon-bg" />
          
          {/* Partículas orbitando */}
          <div className="orbit-particle particle-1"></div>
          <div className="orbit-particle particle-2"></div>
          <div className="orbit-particle particle-3"></div>
        </div>
        
        {/* Partículas de brillo al hacer clic */}
        {sparkles.map((sparkle) => (
          <div
            key={sparkle.id}
            className="sparkle"
            style={{
              '--angle': `${sparkle.angle}deg`,
              '--sparkle-color': sparkle.color || '#ffd700',
            }}
          />
        ))}
        
        {/* Bot mensajero que trae el CV */}
        {showDeliveryBot && (
          <div className="delivery-bot">
            <div className="delivery-bot-circle">
              <div className="bot-face happy">
                <div className="bot-eyes">
                  <div className="bot-eye left"></div>
                  <div className="bot-eye right"></div>
                </div>
                <div className="bot-mouth"></div>
              </div>
              {/* CV en sus manos */}
              <div className="cv-package">
                <FontAwesomeIcon icon={faFilePdf} />
              </div>
            </div>
          </div>
        )}
        
        {/* Icono de CV flotante después de la entrega */}
        {cvIcon && !showDeliveryBot && (
          <div className="cv-floating">
            <FontAwesomeIcon icon={faFilePdf} />
            <span className="cv-label">¡Aquí está su CV!</span>
          </div>
        )}
        
        {/* Herramientas tipo Mickey Mouse */}
        {showTools && (
          <div className="bot-tools">
            {tools.map((tool, index) => {
              // Calcular posición en círculo alrededor del bot
              const angle = (360 / tools.length) * index;
              const radius = 110; // Radio del círculo
              const radian = (angle - 90) * (Math.PI / 180);
              const x = botPosition.x + Math.cos(radian) * radius;
              const y = botPosition.y + Math.sin(radian) * radius;
              
              return (
                <div 
                  key={index}
                  className="tool-item"
                  style={{ 
                    '--tool-index': index,
                    left: `${x}px`,
                    top: `${y}px`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleToolClick(tool);
                  }}
                >
                  <FontAwesomeIcon icon={tool.icon} />
                  <span className="tool-label">{tool.label}</span>
                </div>
              );
            })}
          </div>
        )}
        
        {/* Mensaje flotante */}
        {displayedMessage && !showTools && (
          <div className="bot-message">
            {displayedMessage}
            {displayedMessage.length < message.length && <span className="typing-cursor">|</span>}
          </div>
        )}
      </div>
    </div>
  );
}
