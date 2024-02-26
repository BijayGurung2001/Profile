import React from 'react'
import '../css/Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../image/2.png'
import { TfiAlignJustify } from "react-icons/tfi";

const Navbar = () => {
  return (
    <div className='navigation'>
      <div className='logo'>
       <img src={logo} id='logoimg' />
      </div>
      <div className='links'>
        <ul className='ulnavbar'>
            
            <li><Link to='/skils' id='link'>Skills</Link></li>
            <li><Link to='/resume'id='link'>Resume</Link></li>
            <li><Link to='/testimonial'id='link'>Testimonial</Link></li>
            <li><Link to='/projects'id='link'>Projects</Link></li>
            <li ><Link to='/message' id='contact'>contact</Link></li>
            <li id='list'><TfiAlignJustify /></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar