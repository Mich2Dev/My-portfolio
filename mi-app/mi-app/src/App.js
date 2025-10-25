import React from 'react';
import './theme.css';
import './App.css';
import Header from './components/Header';
import About from './components/about';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <div className='mi-container'>
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
