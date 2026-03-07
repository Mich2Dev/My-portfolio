import React, { useState, useEffect, useMemo } from 'react';
import './AIBot.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRobot, faBrain, faCode, faLaptopCode, faTrophy, faRocket,
  faEnvelope, faDownload,
  faEye, faAward, faProjectDiagram, faFilePdf, faRoute
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin as faLinkedinBrand, faGithub as faGithubBrand, faWhatsapp as faWhatsappBrand } from '@fortawesome/free-brands-svg-icons';

// Mensajes globales - definidos fuera del componente para evitar recreación
const ALL_MESSAGES = [
  '🤖 Portafolio profesional de mi creador',
  '💼 Te guiaré por su experiencia y proyectos',
  '😏 Me programó con React y hooks. Código con actitud',
  '👆 Tócame. Tengo herramientas útiles',
  '💻 Full Stack Developer especializado en IA y Computer Vision',
  '⚡ Stack: React, Python, Node.js, TensorFlow, YOLO',
  '📜 Desliza hacia abajo. Hay mucho por ver',
  '🏆 Primer lugar en Hackathon de IA 2024',
  '🌎 Proyectos desplegados desde Barranquilla',
  '🧠 Arquitecturas modernas: React + IA integrados',
  '👇 Explora las secciones. Cada una tiene sorpresas',
  '💡 Compitió contra equipos completos en Universidad del Norte',
  '🎓 Portfolio: e-commerce, IA aplicada, automatización',
  '⚙️ Automatización industrial + Computer Vision avanzada',
  '🔥 APIs REST, microservicios, arquitectura de contenedores',
  '🌟 YOLO para detección de objetos en tiempo real',
  '💼 Backend escalable + frontend intuitivo + IA funcional',
  '✨ Sistemas inteligentes con procesamiento de lenguaje natural',
  '📖 Integración de PLC, IoT y sensores industriales',
  '🔥 Computer Vision: YOLO, TensorFlow, OpenCV en producción',
  '☁️ Infraestructura cloud: AWS, Docker, CI/CD automatizado',
  '🎯 Procesamiento de video en tiempo real, latencia mínima',
  '💼 Experiencia: IoT, RPA, calibración automática, e-commerce',
  '⚙️ Backend: Node.js, Express, Python, .NET, PHP',
  '🎨 Frontend: React, TailwindCSS, Bootstrap',
  '📊 Bases de datos: SQL, PostgreSQL, MongoDB',
  '🔧 LangChain para procesamiento de lenguaje natural',
  '💡 Sistemas embebidos + visión artificial',
  '🚀 Proyectos desplegados resolviendo problemas reales',
  '👆 Presióname. Mis herramientas funcionan',
  '💼 E-commerce completo: carrito, pagos, inventario',
  '🤖 Calibración automática con detección YOLO',
  '📦 Backend logístico: Node.js + PostgreSQL, alto tráfico',
  '🏗️ Arquitecturas diseñadas para escalar',
  '🔧 APIs: autenticación JWT, middleware, documentación',
  '⚙️ Clean code, testing automatizado, documentación técnica',
  '🎯 Ciclo completo: concepto hasta deploy en AWS',
  '💡 Código en GitHub: limpio, documentado, production-ready',
  '🔥 Tracking en tiempo real, procesamiento de imágenes',
  '⚡ DevOps: Docker, CI/CD, deployments automatizados',
  '🎨 UX/UI optimizado para conversión y satisfacción',
  '😎 Herramientas útiles. Úsalas, no solo mires',
  '📜 Sigue bajando. Proyectos y premios esperan',
  '😏 Me diseñó con useState y useEffect. Elegante, no?',
  '🎨 Este portafolio: React desde cero. Sin plantillas',
  '💅 CSS puro para animaciones. Nada de librerías pesadas',
  '🤖 Mis expresiones faciales: CSS animations. Pura magia',
  '⚡ Typewriter effect: JavaScript vanilla. Rápido y limpio',
  '🎯 Posicionamiento dinámico: cálculos matemáticos precisos',
  '✨ Partículas y efectos: Canvas y transformaciones CSS',
  '🔧 Herramientas circulares: trigonometría aplicada',
  '💡 Todo responsive: media queries bien pensadas',
  '🚀 Optimizado para performance: 60fps constantes',
  '😎 Me creó en horas. Mientras otros usan templates',
  '🏆 Hackathon Barranqui-IA 2024: primer lugar, Google organizó',
  '🥇 Competencia regional contra equipos universitarios',
  '🥉 Tercer lugar en Hackathon 2025',
  '⭐ Soluciones bajo presión extrema en horas',
  '💪 Resolución rápida de problemas complejos',
  '🧠 IA aplicada a casos reales, más allá de teoría',
  '🚀 Innovación técnica + velocidad + calidad de código',
  '🎯 Preparación técnica sólida + código limpio',
  '🌟 Contribución activa al ecosistema tech de Barranquilla',
  '🔥 Soluciones completas y funcionales en tiempo récord',
  '💡 Liderazgo técnico efectivo, colaboración en equipos',
  '🤓 Tócame. Herramientas que funcionan de verdad',
  '📧 Comunicación eficiente: respuesta en menos de 24 horas',
  '🤝 Disponible para proyectos técnicamente desafiantes',
  '💼 Email: mencocuellomaicol@gmail.com',
  '🌟 Transformación de ideas en software funcional y escalable',
  '📱 WhatsApp: +57 301 313 7911',
  '💡 Motivado por desafíos técnicos y proyectos innovadores',
  '🚀 Contacto: LinkedIn, GitHub, Email, WhatsApp',
  '🎯 Respuestas rápidas por eficiencia y pasión por el código',
  '⚡ Barranquilla, Colombia - Trabajo remoto disponible',
  '🔥 Especialización: Full Stack, IA, Computer Vision',
  '🌐 Proyectos locales e internacionales',
  '💻 Modalidades: Freelance, colaboraciones, full-time',
  '🎨 Consultoría técnica o desarrollo end-to-end',
  '🎭 Mis animaciones: keyframes CSS. Suaves y fluidas',
  '💫 Efectos de hover: transiciones calculadas al milisegundo',
  '🎪 Tour guiado: scroll programático con smooth behavior',
  '📦 Bot mensajero del CV: animación secuencial coordinada',
  '🎨 Gradientes y sombras: diseño visual sin imágenes',
  '⚙️ Estado manejado con hooks: useState, useEffect maestría',
  '🔄 Ciclo de mensajes: setInterval inteligente sin memory leaks',
  '👇 Navega por las secciones. Interactúa',
];

export default function AIBot() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIcon, setCurrentIcon] = useState(0);
  const [message, setMessage] = useState('');
  const [tempMessage, setTempMessage] = useState(''); // Mensajes temporales que no interrumpen el ciclo
  const [displayedMessage, setDisplayedMessage] = useState(''); // Mensaje con efecto typewriter
  const [currentSection, setCurrentSection] = useState('header');
  const [showTools, setShowTools] = useState(false);
  const [faceExpression, setFaceExpression] = useState('happy'); // happy, talking, thinking, excited, surprised
  const [botAnimation, setBotAnimation] = useState(''); // spin, bounce, shake, wiggle
  const [sparkles, setSparkles] = useState([]); // Partículas de brillo al hacer clic
  const [showDeliveryBot, setShowDeliveryBot] = useState(false); // Bot mensajero
  const [cvIcon, setCvIcon] = useState(false); // Icono de CV flotante
  const [deliveryComplete, setDeliveryComplete] = useState(false); // Entrega completada
  const [hasGreeted, setHasGreeted] = useState(false); // Si ya saludó
  const [isActive, setIsActive] = useState(false); // Si el bot está activo (después del saludo)
  // lastSectionMessageTime removido - ya no se usa
  
  const icons = useMemo(() => [faRobot, faBrain, faCode, faLaptopCode, faTrophy, faRocket], []);
  
  // Función para hacer un tour guiado por las secciones
  const startTour = () => {
    setTempMessage('🎯 Recorrido iniciado. Sígueme');
    setFaceExpression('excited');
    setBotAnimation('spin');
    
    setTimeout(() => {
      setFaceExpression('happy');
      setBotAnimation('');
      setTempMessage('');
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
          setTempMessage(section.message);
          setFaceExpression('talking');
          
          setTimeout(() => {
            setFaceExpression('happy');
            setTimeout(() => setTempMessage(''), 4000);
          }, 2000);
        }
      }, section.delay);
    });
    
    // Mensaje final
    setTimeout(() => {
      setTempMessage('✨ Recorrido completo. Preguntas?');
      setFaceExpression('excited');
      setTimeout(() => {
        setFaceExpression('happy');
        setTempMessage('');
      }, 5000);
    }, 28000);
  };
  
  // Efecto typewriter para escribir el mensaje letra por letra
  useEffect(() => {
    const currentMessage = tempMessage || message; // Priorizar mensaje temporal
    
    if (!currentMessage) {
      setDisplayedMessage('');
      return;
    }
    
    let index = 0;
    setDisplayedMessage('');
    
    // Velocidad de escritura variable para más naturalidad
    const baseSpeed = 25; // Velocidad base más rápida
    
    const typeNextChar = () => {
      if (index <= currentMessage.length) {
        setDisplayedMessage(currentMessage.slice(0, index));
        index++;
        
        // Velocidad variable: más rápido en espacios, más lento en puntuación
        const char = currentMessage[index - 1];
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
  }, [message, tempMessage]);
  
  
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
      
      // Ya NO saludar automáticamente - esperar a que el usuario haga clic
      // El bot aparece pero permanece inactivo hasta el primer clic
    }, 2000);

    // Detectar sección actual con scroll
    const handleScroll = () => {
      // Ya NO activar bot con scroll - solo con clic
      
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const sections = ['header', 'about', 'projects', 'contact'];
      
      let newSection = 'header';
      sections.forEach(section => {
        const element = document.getElementById(section) || document.querySelector(`.${section}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;
          
          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            newSection = section;
          }
        }
      });

      // Detectar sección de premios
      const awardsElement = document.querySelector('.awards-section');
      if (awardsElement) {
        const rect = awardsElement.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          newSection = 'awards';
        }
      }

      // Detectar botón de CV - activar animación de entrega SOLO en sección "about"
      if (newSection === 'about' && !deliveryComplete && isVisible && isActive) {
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
                  
                  // El bot principal muestra el CV y cambia mensaje temporalmente
                  setTimeout(() => {
                    setFaceExpression('happy');
                    setTempMessage('📄 Curriculum Vitae disponible para descarga');
                    
                    // El icono de CV desaparece después de 5 segundos
                    setTimeout(() => {
                      setCvIcon(false);
                      setTempMessage(''); // Limpiar mensaje temporal
                    }, 5000);
                  }, 1000);
                }, 1500);
              }, 2000);
            }, 1000);
          }
        }
      }

      if (newSection !== currentSection) {
        setCurrentSection(newSection);
        setShowTools(false); // Cerrar herramientas al cambiar de sección
        
        // Mensajes contextuales DESACTIVADOS para evitar interferencias al deslizar
        // El bot solo habla con su ciclo de mensajes principal
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
      clearTimeout(appearTimer);
      clearTimeout(iconTimer);
      clearTimeout(animTimer);
    };
  }, [currentSection, isVisible, showTools, faceExpression, showDeliveryBot, isActive, hasGreeted, deliveryComplete]);

  // Cambiar mensaje en secuencia continua - independiente de la sección
  useEffect(() => {
    // Solo mostrar mensajes si el bot está activo
    if (!isActive) return;
    
    let messageIndex = 0;
    let timeoutId = null;

    // Esperar tiempo después de activarse para mostrar primer mensaje
    const initialDelay = hasGreeted ? 2000 : 0;
    
    const initialTimer = setTimeout(() => {
      // Mostrar primer mensaje
      setMessage(ALL_MESSAGES[messageIndex]);
      setFaceExpression('talking');
      
      // Primer mensaje se queda 5 segundos
      setTimeout(() => setFaceExpression('happy'), 5000);
      
      // Función para cambiar al siguiente mensaje
      const changeMessage = () => {
        messageIndex = (messageIndex + 1) % ALL_MESSAGES.length;
        
        // Expresión de pensamiento antes de cambiar mensaje
        setFaceExpression('thinking');
        
        setTimeout(() => {
          setMessage(ALL_MESSAGES[messageIndex]);
          setFaceExpression('talking');
          
          // Calcular tiempo que el mensaje estará visible basado en su longitud
          const messageLength = ALL_MESSAGES[messageIndex].length;
          let displayTime;
          
          if (messageLength < 50) {
            displayTime = 4000 + Math.random() * 1000; // 4-5 segundos
          } else if (messageLength < 80) {
            displayTime = 5500 + Math.random() * 1500; // 5.5-7 segundos
          } else {
            displayTime = 7000 + Math.random() * 2000; // 7-9 segundos
          }
          
          // Cambiar expresión a happy después de un tiempo
          setTimeout(() => setFaceExpression('happy'), displayTime * 0.4);
          
          // Programar el siguiente cambio de mensaje
          timeoutId = setTimeout(changeMessage, displayTime);
        }, 800);
      };
      
      // Primer cambio de mensaje después de 7-9 segundos
      timeoutId = setTimeout(changeMessage, 7000 + Math.random() * 2000);
    }, initialDelay);

    return () => {
      clearTimeout(initialTimer);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isActive, hasGreeted]); // ALL_MESSAGES es constante, no necesita estar en dependencias

  // Calcular posición CSS
  const getPositionStyle = () => {
    const positions = {
      header: { bottom: '120px', left: '20%' },
      about: { bottom: '150px', left: '75%' },
      projects: { bottom: '100px', left: '25%' },
      awards: { bottom: '130px', left: '50%' },
      contact: { bottom: '110px', left: '70%' }
    };

    const pos = positions[currentSection] || positions.header;
    
    return {
      bottom: pos.bottom,
      left: pos.left,
      transition: 'bottom 1.2s cubic-bezier(0.4, 0, 0.2, 1), left 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
    };
  };

  const handleBotClick = () => {
    // Activar bot con el clic SOLO si no ha saludado
    if (!hasGreeted) {
      activateBot();
      return; // No abrir herramientas en el primer clic
    }
    
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

  const handleToolClick = (tool) => {
    // Ejecutar la acción de la herramienta
    tool.action();
    
    // Reacción del bot con mensaje temporal
    setTempMessage(tool.message);
    setFaceExpression('excited');
    setBotAnimation('jump');
    
    // Crear confeti
    createConfetti();
    
    // Volver a normal y limpiar mensaje temporal
    setTimeout(() => {
      setFaceExpression('happy');
      setBotAnimation('');
      setTempMessage(''); // Limpiar mensaje temporal después de 3 segundos
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

  // Activar bot con el primer evento (scroll, hover o clic) - SOLO UNA VEZ
  const activateBot = () => {
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
  };

  return (
    <div 
      className={`ai-bot ${isVisible ? 'visible' : ''} ${isActive ? 'active' : ''}`}
      style={getPositionStyle()}
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
            {tools.map((tool, index) => (
              <div 
                key={index}
                className="tool-item"
                style={{ '--tool-index': index }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleToolClick(tool);
                }}
              >
                <FontAwesomeIcon icon={tool.icon} />
                <span className="tool-label">{tool.label}</span>
              </div>
            ))}
          </div>
        )}
        
        {/* Mensaje flotante */}
        {!hasGreeted && !displayedMessage && (
          <div className="bot-message">
            👆 Haz clic para comenzar
          </div>
        )}
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
