import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Working from '../components/sections/Working'
import Team from '../components/sections/Team'
import Community from '../components/sections/Community'
import Contact from '../components/sections/Contact'
import Waitlist from '../components/sections/Waitlist'

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <About />
      <Working />
      <Team />
      <Community />
      <Waitlist/>
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
