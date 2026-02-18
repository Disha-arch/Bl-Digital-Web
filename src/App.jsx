import React from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'
import Services from './components/Services/Services'
import About from './components/About/About'
import Process from './components/Process/Process'
import Contact from './components/Contact/Contact'

const App = () => {

  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <About />
      <Process />
      <Contact/>
      <Footer />
    </div>
  )
}

export default App 
