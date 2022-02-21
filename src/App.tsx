import { useState } from 'react'
import { Hero } from './Components/Hero';
import { Info } from './Components/Info';
import { Navbar } from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Info/>
    </div>
  )
}

export default App
