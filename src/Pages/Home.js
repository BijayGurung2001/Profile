import React from 'react'
import Navbar from '../Components/Navbar'
import Education from './Education'
import Footer from './Footer'
import Intro from './Intro'
import Projects from './Projects'
import Testimonial from './Testimonial'
import Work from './Work'
import Message from '../Components/Message'
import'../css/Home.css';

const Home = () => {
  return (
    <div className='home'>
       <Navbar/>
        <Intro/>
        <Projects/>
        <Education/>
        <Work/>
        <Testimonial/>
        <Message/>
        <Footer/>
        
    </div>
  )
}

export default Home