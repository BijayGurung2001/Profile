import React from 'react'
import '../css/Navbar.css'

const Navbar = () => {
  return (
    <div className='navigation'>
      <div className='logo'>
       <h1>Gurung Bijay</h1>
      </div>
      <div className='links'>
        <ul>
            
            <li>Skills</li>
            <li>Projects</li>
            <li>Contribute</li>
            <li>Resume</li>
            <li id='contact'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar