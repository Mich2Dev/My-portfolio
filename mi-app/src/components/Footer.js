import React, { useEffect } from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

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
            <a href="mailto:mencocuellomaicol@gmail.com" aria-label="Correo">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
          <div className="contact-item">
            <a href="https://github.com/Mich2Dev" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <div className="contact-item">
            <a href="https://www.linkedin.com/in/maicol-menco-cuello-9a4248308/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
          <div className="contact-item">
            <a href="https://wa.me/573022289180" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>

        <p className="copyright">
          <FontAwesomeIcon icon={faCopyright} /> 2025 Michael Menco Cuello
        </p>
      </div>
    </footer>
  );
}