import React, { useEffect } from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCopyright, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) entry.target.classList.add('animate');
    }, { threshold: 0.2 });

    const el = document.querySelector('.footer');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="footer fade-in" id="footer">
      <div className="footer-card">
        <div className="footer-info">
          <div className="footer-contact-details">
            <div className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} />
              <a href="mailto:mencocuellomaicol@gmail.com">mencocuellomaicol@gmail.com</a>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faPhone} />
              <a href="tel:+573013137911">+57 301 313 7911</a>
            </div>
          </div>
          
          <div className="footer-contacts">
            <a href="https://github.com/Mich2Dev" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/maicol-menco-cuello-9a4248308/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://wa.me/573013137911" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            <FontAwesomeIcon icon={faCopyright} /> 2025 Michael Menco Cuello
          </p>
          <p className="version">v2.0.0</p>
        </div>
      </div>
    </footer>
  );
}
