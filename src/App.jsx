import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Team from './components/Team'
import Footer from './components/Footer'
import Contact from './components/Contact'
import ImageGallery from './components/Pictures'

function App() {

  return (
    <>
       <Navbar />
       <Hero />
       <About />
       <Projects />
       <ImageGallery />
       <Team />
       <Contact />
       <Footer />

    </>
  )
}

export default App
