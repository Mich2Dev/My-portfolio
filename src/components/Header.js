import React, { useEffect } from 'react';
import './Header.css';

export default function Header() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add('animate');
      },
      { threshold: 0.35 }
    );

    const el = document.querySelector('.header');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <header className="header fade-in">
      <div className="hero-inner">
        <div className="hero-card">
          <div className="hero-left">
            <h1 className="name">Michael Menco Cuello</h1>
            <p className="subtitle">Desarrollador Web • Visión Artificial • Integración Industrial</p>
            <p className="brief">Creo interfaces limpias y soluciones que conectan sensores y cámaras con aplicaciones inteligentes.</p>

            <div className="tech-list" aria-hidden>
              <span className="tech">React</span>
              <span className="tech">Python</span>
              <span className="tech">OpenCV</span>
              <span className="tech">Embedded</span>
            </div>

            {/* CTA moved to About section; keep header compact */}

            <div className="socials">
              <a href="https://github.com/Mich2Dev" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/michael-menco-cuello-732877226/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>

          <div className="hero-right" aria-hidden>
            <div className="avatar" title="Michael Menco Cuello">
              <svg viewBox="0 0 100 100" width="100" height="100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Avatar">
                <rect width="100" height="100" rx="12" fill="#0b1220" />
                <text x="50" y="57" fontSize="36" textAnchor="middle" fill="#3b82f6" fontFamily="Segoe UI, sans-serif">MM</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
