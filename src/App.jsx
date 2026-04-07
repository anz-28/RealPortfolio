import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Analytics } from "@vercel/analytics/react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: 'ease-out-cubic',
      offset: 120,
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <>
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
    <Analytics />
    </>
  );
}

export default App;
