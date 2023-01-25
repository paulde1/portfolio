import React from 'react'
import {About,Footer,Header,Testimonials,Work,Skills} from './container' 
import { Navbar } from './components'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App