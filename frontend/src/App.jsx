import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <div className="bg-dark min-h-screen text-white overflow-x-hidden selection:bg-primary selection:text-dark font-sans">
      
      {/* Background Blobs */}
      <div className="blob-cont">
        <div className="blob bg-primary w-96 h-96 top-0 left-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="blob bg-secondary w-96 h-96 bottom-0 right-0 translate-x-1/2 translate-y-1/2"></div>
      </div>

      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />

      <footer className="py-8 text-center text-gray-600 border-t border-gray-800 bg-dark">
        <p>&copy; 2026 Red Bilung. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;