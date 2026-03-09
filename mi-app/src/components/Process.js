import React from 'react';
import './Process.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRocket,
  faCode,
  faCogs
} from '@fortawesome/free-solid-svg-icons';

export default function Process() {
  return (
    <section className="process-section">
      <div className="container">
        <h2 className="process-title">Mi Enfoque de Desarrollo</h2>
        
        <div className="process-grid">
          {/* Arquitectura y Diseño */}
          <div className="process-card">
            <div className="process-icon">
              <FontAwesomeIcon icon={faCode} />
            </div>
            <h3>Arquitectura Escalable</h3>
            <p>
              Diseño sistemas pensando en crecimiento futuro. Separo responsabilidades 
              en capas: presentación, lógica de negocio y datos. Uso patrones como MVC 
              y arquitectura de microservicios cuando el proyecto lo requiere. Priorizo 
              código limpio, modular y fácil de mantener.
            </p>
          </div>

          {/* Integración y Testing */}
          <div className="process-card">
            <div className="process-icon">
              <FontAwesomeIcon icon={faCogs} />
            </div>
            <h3>Integración Continua</h3>
            <p>
              Implemento flujos de trabajo automatizados desde desarrollo hasta producción. 
              Uso control de versiones para rastrear cambios y colaborar eficientemente. 
              Valido código con pruebas antes de cada deploy. Mantengo ambientes separados 
              para desarrollo, staging y producción.
            </p>
          </div>

          {/* Optimización y Rendimiento */}
          <div className="process-card">
            <div className="process-icon">
              <FontAwesomeIcon icon={faRocket} />
            </div>
            <h3>Optimización Constante</h3>
            <p>
              Monitoreo rendimiento y identifico cuellos de botella. Optimizo consultas 
              de base de datos y cacheo datos frecuentes. Comprimo assets y uso lazy loading 
              en frontend. Implemento índices y estructuras de datos eficientes para 
              respuestas rápidas bajo carga.
            </p>
          </div>
        </div>

        {/* Metodología */}
        <div className="methodology-section">
          <h3 className="methodology-title">Proceso de Trabajo</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker">
                <span className="timeline-number">01</span>
              </div>
              <div className="timeline-content">
                <h4>Entender el Problema</h4>
                <p>
                  Antes de escribir código, analizo el problema real que necesita solución. 
                  Identifico requisitos funcionales y no funcionales. Defino casos de uso 
                  y flujos de usuario. Documento restricciones técnicas y de negocio para 
                  tomar decisiones informadas sobre arquitectura.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">
                <span className="timeline-number">02</span>
              </div>
              <div className="timeline-content">
                <h4>Diseñar la Solución</h4>
                <p>
                  Elijo la arquitectura más adecuada según el problema. Diseño modelos de 
                  datos normalizados y eficientes. Defino APIs RESTful con endpoints claros. 
                  Planifico la estructura de componentes en frontend. Considero escalabilidad, 
                  seguridad y mantenibilidad desde el inicio.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">
                <span className="timeline-number">03</span>
              </div>
              <div className="timeline-content">
                <h4>Desarrollar Iterativamente</h4>
                <p>
                  Construyo funcionalidad en incrementos pequeños y probables. Implemento 
                  primero el flujo principal, luego casos edge. Refactorizo código cuando 
                  detecto duplicación o complejidad innecesaria. Mantengo commits atómicos 
                  con mensajes descriptivos para historial claro.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">
                <span className="timeline-number">04</span>
              </div>
              <div className="timeline-content">
                <h4>Validar y Desplegar</h4>
                <p>
                  Pruebo funcionalidad manualmente y con casos de prueba automatizados. 
                  Reviso código para detectar vulnerabilidades de seguridad. Optimizo 
                  rendimiento antes de producción. Despliego en staging primero, valido, 
                  y luego paso a producción con rollback plan preparado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
