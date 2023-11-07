import React from 'react'
import '../css/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navigation'>
      <div className='logo'>
       <h1>Gurung Bijay</h1>
      </div>
      <div className='links'>
        <ul>
            
            <li><Link to='/skils' id='link'>Skills</Link></li>
            <li><Link to='/resume'id='link'>Resume</Link></li>
            <li><Link to='/testimonial'id='link'>Testimonial</Link></li>
            <li><Link to='/projects'id='link'>Projects</Link></li>
            <li ><Link to='/message' id='contact'>contact</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar