import React, { useEffect, useRef } from 'react';
import './ParticlesBackground.css';

export default function ParticlesBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    // Configurar tamaño del canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight; // Solo altura de viewport, no todo el scroll
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Clase Partícula optimizada
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2.5 + 1.5;
        this.speedX = (Math.random() - 0.5) * 0.8;
        this.speedY = (Math.random() - 0.5) * 0.8;
        this.opacity = Math.random() * 0.5 + 0.4;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around en lugar de rebotar (más eficiente)
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = `rgba(139, 92, 246, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Aumentar número de partículas para más magia
    const particleCount = Math.min(150, Math.floor((canvas.width * canvas.height) / 15000));
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Conectar partículas cercanas (optimizado) - más conexiones para más magia
    const connectParticles = () => {
      const maxDistance = 160;
      const maxDistanceSquared = maxDistance * maxDistance; // Evitar sqrt
      
      for (let i = 0; i < particles.length; i++) {
        let connectionsCount = 0;
        for (let j = i + 1; j < particles.length; j++) {
          if (connectionsCount >= 5) break; // Más conexiones por partícula
          
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distanceSquared = dx * dx + dy * dy;

          if (distanceSquared < maxDistanceSquared) {
            const opacity = (1 - Math.sqrt(distanceSquared) / maxDistance) * 0.4;
            ctx.strokeStyle = `rgba(79, 70, 229, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            connectionsCount++;
          }
        }
      }
    };

    // Animación con throttling
    let lastTime = 0;
    const fps = 30; // Limitar a 30 FPS
    const interval = 1000 / fps;

    const animate = (currentTime) => {
      animationFrameId = requestAnimationFrame(animate);
      
      const deltaTime = currentTime - lastTime;
      if (deltaTime < interval) return;
      
      lastTime = currentTime - (deltaTime % interval);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      connectParticles();
    };

    animate(0);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="particles-canvas" />;
}
