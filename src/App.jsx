import { useState } from 'react'
import {Link} from 'react-scroll'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Contact from './components/Contact'
import './App.css'


function App() {
 

  return (
    <>
    <div className='flex flex-col'>
     <Navbar/>
     <About/>
     <Skills/>
     <Contact/>
     <Footer/>
     
     </div>
    </>
  )
}

export default App
