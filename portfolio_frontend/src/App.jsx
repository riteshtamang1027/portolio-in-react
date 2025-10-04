import React from 'react'
import Navbar from './components/navbar'
import HeroSection from './components/heroSection'

export default function App() {
  return (
  <div className="h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900">      <Navbar/>
  <HeroSection/>
    </div>
  )
}
