import React from 'react'
import '../css/Footer.css'
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaMailBulk, FaReact } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
     <div className='footer-contact'>
        <h1>Start a project</h1>
        <p>Interested in working together?<br/>We should queue up a time to <br/> chat. I’ll buy the coffee.</p>
        <button>Let's do this</button>
     </div>
     <img src="https://mattfarley.ca/img/mf-avatar.svg" alt="aaaaaaaa" />
     <h2>Living, learning, & leveling up <br/>
     one day at a time.</h2>
     <ul className='footer-link-list'>
        <li><FaGithub/></li>
        <li><FaMailBulk/></li>
        <li><FaFacebook/></li>
        <li><FaInstagram/></li>
        <li><FaLinkedin/></li>
     </ul>
     <p>Handcrafted by <spam id='name'>Bijay Gurung </spam> </p>
     <p>Made with <spam id="react"> <FaReact/> React Js</spam></p>
    </div>

  )
}

export default Footer