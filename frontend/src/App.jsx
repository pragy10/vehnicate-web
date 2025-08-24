import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import WaitlistPage from './pages/WaitlistPage'
import './styles/globals.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/waitlist" element={<WaitlistPage />} />
      </Routes>
    </div>
  )
}

export default App
