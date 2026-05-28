// src/App.jsx

import Navbar     from "./components/Navbar.jsx";
import Footer     from "./components/Footer.jsx";
import Hero       from "./sections/Hero.jsx";
import About      from "./sections/About.jsx";
import Skills     from "./sections/Skills.jsx";
import Projects   from "./sections/Projects.jsx";
import Experience from "./sections/Experience.jsx";
import Contact    from "./sections/Contact.jsx";
import React from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Hero from './sections/Hero.jsx'

export default function App() {
  return (
    <div style={{ background: "#08080c", minHeight: "100vh" }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
