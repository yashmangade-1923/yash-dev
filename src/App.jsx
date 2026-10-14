import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="bg-bg-dark text-white selection:bg-accent selection:text-white">
      {/* Global Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent-secondary to-pink-500 z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />

      {/* Sections with unique IDs for navigation */}
      <Hero />
      <Projects />
      <Skills />
      <Footer />
    </main>
  );
}

export default App;
