import React, { useEffect } from 'react';
import './theme.css';
import './App.css';
import Header from './components/Header';
import About from './components/about';
import Process from './components/Process';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SocialSidebar from './components/SocialSidebar';
import ParticlesBackground from './components/ParticlesBackground';
import AIBot from './components/AIBot';

function App() {
  useEffect(() => {
    // Scroll al inicio cuando se recarga la página
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='App'>
      <ParticlesBackground />
      <SocialSidebar />
      <AIBot />
      <div className='mi-container'>
        <Header />
        <About />
        <Process />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
