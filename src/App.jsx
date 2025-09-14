import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Studies from './components/Studies'
import TechnicalSkillsSection from './components/TechnicalSkillsSection'
import Contact from './components/Contact'
import Fun from './components/Fun'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  // We'll use localStorage to keep dark mode consistent across pages
  return (
    <>  
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/skills" element={<TechnicalSkillsSection/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/fun" element={<Fun/>}/>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

// Home component that combines all sections
function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <TechnicalSkillsSection />
      <Studies />
      <Contact />
    </>
  );
}

export default App