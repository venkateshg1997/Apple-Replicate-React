import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Section from './components/Section'
import Footer from './components/Footer'
import Button from './components/Button'
import macImage from './assets/macbook.jpg';
import iphoneImage from './assets/iphone.jpg';

function App() {


  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
      <Nav/>
      <Hero/>
     <Section
  title="MacBook Air M5"
  description="Sky high performance in a sleek new design."
  image={macImage}/>
 

<Section
  title="iPhone Air"
  description="Thinnest iPhone ever. Powered by Pro."
  image={iphoneImage}
  reverse
/>
      <div className="text-center my-10">
        <Button label="Explore More"/>
      </div>
      <Footer/>
      </div>
    </>
  )
}

export default App
