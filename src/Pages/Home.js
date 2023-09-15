import React from 'react'
//import Navbar from '../Components/Navbar'
import Education from './Education'
import Footer from './Footer'
import Intro from './Intro'
import Projects from './Projects'
import Testimonial from './Testimonial'
import Work from './Work'

const Home = () => {
  return (
    <div>
       
        <Intro/>
        <Projects/>
        <Education/>
        <Work/>
        <Testimonial/>
        <Footer/>
        
    </div>
  )
}

export default Home