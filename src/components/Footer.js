import React, { useEffect } from 'react';
import './Footer.css';

export default function Footer() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add('animate');
      },
      { threshold: 0.2 }
    );

    const el = document.querySelector('.footer');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="footer fade-in" id="footer">
      <div className="container footer-card">
        <div className="footer-contacts" aria-label="Contacto principal">
          <div className="contact-item">
            <svg className="contact-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M3 6.5A2.5 2.5 0 015.5 4h13A2.5 2.5 0 0121 6.5v11A2.5 2.5 0 0118.5 20h-13A2.5 2.5 0 013 17.5v-11z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M21 6.5l-9 6-9-6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="contact-label">Correo:</span>
            <a href="mailto:mencocuellomaicol@gmail.com">mencocuellomaicol@gmail.com</a>
          </div>

          <div className="contact-item">
            <svg className="contact-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.9 1.54 2.36 1.1 2.94.84.09-.66.35-1.1.63-1.35-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.115 2.51.338 1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .26.18.58.69.48A10 10 0 0022 12c0-5.52-4.48-10-10-10z" fill="currentColor" />
            </svg>
            <span className="contact-label">GitHub:</span>
            <a href="https://github.com/Mich2Dev" target="_blank" rel="noreferrer">Mich2Dev</a>
          </div>

          <div className="contact-item">
            <svg className="contact-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M4.98 3.5C4.98 5 3.85 6.12 2.35 6.12 0.85 6.12 0 5 0 3.5 0 2 1.12 0.88 2.62 0.88 4.12 0.88 4.98 2 4.98 3.5zM.5 8.88h3.75V24H.5zM8.12 8.88h3.59v2.05h.05c.5-.95 1.73-1.95 3.56-1.95 3.81 0 4.51 2.5 4.51 5.76V24h-3.75v-7.12c0-1.7-.03-3.88-2.36-3.88-2.36 0-2.72 1.84-2.72 3.75V24H8.12V8.88z" fill="currentColor" />
            </svg>
            <span className="contact-label">LinkedIn:</span>
            <a href="https://www.linkedin.com/in/michael-menco-cuello-732877226/" target="_blank" rel="noreferrer">Michael Menco</a>
          </div>
        </div>

        <p className="copyright">&copy; 2025 Michael Menco Cuello</p>
      </div>
    </footer>
  );
}