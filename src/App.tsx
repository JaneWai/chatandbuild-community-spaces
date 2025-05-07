import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Communities from './components/Communities'
import FeaturedProjects from './components/FeaturedProjects'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Communities />
      <FeaturedProjects />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
