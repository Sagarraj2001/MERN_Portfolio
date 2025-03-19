import React from 'react'
import { useEffect } from "react";
import Navbar from './Component/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Education from './Pages/Education';
import Skills from './Pages/Skills';
import Project from './Pages/Project';
import Contact from './Pages/Contact';
import Footer from './Component/Footer';



const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='bg-dark'>
      <Navbar/>
      <Home/>
      <About/>
      <Education/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
