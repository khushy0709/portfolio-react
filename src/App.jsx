import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero'
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <About/>
      <Services/>
      <MyWork/>
    </div>
  )
}

export default App
