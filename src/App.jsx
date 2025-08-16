import { useState } from 'react'

import './App.css'
import Header from './components/header'
import Hero from './components/hero'
import About from './components/2ndHero'
import Project from './components/project'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Project/>
      <Contact/>
    </>
  )
}

export default App
