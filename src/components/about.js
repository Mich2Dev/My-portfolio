import React, { useEffect } from 'react';
import './About.css';

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add('animate');
      },
      { threshold: 0.35 }
    );

    const el = document.querySelector('.about');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about fade-in" id="about">
      <div className="container about-grid">
        <div className="about-main">
          <h2>Sobre mí</h2>
          <p className="lead">Soy Michael Menco Cuello: conecto visión artificial, sistemas embebidos y aplicaciones web para ofrecer soluciones industriales y productos digitales.</p>

          <p className="tease">Explora mis proyectos y descubre cómo combino hardware, software y datos para resolver problemas reales.</p>
          <div className="about-cta">
            <a href="/cv.pdf" className="btn primary" download>Descargar CV</a>
          </div>
        </div>

        <aside className="about-side">
          <h3>Herramientas y habilidades</h3>
          <div className="skills">
            <span className="skill">React</span>
            <span className="skill">JavaScript</span>
            <span className="skill">HTML</span>
            <span className="skill">CSS</span>
            <span className="skill">Python</span>
            <span className="skill">Flask</span>
            <span className="skill">Node.js</span>
            <span className="skill">Laravel</span>
            <span className="skill">.NET</span>
            <span className="skill">C#</span>
            <span className="skill">C++</span>
            <span className="skill">OpenCV</span>
            <span className="skill">YOLO</span>
            <span className="skill">TensorFlow</span>
            <span className="skill">PyTorch</span>
            <span className="skill">LangChain</span>
            <span className="skill">Docker</span>
            <span className="skill">Git</span>
            <span className="skill">GitHub Actions</span>
            <span className="skill">MQTT</span>
            <span className="skill">SQL / NoSQL</span>
            <span className="skill">Pandas / NumPy</span>
          </div>
        </aside>
      </div>
    </section>
  );
}