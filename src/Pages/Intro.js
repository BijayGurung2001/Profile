import React  from 'react'

import '../css/Intro.css'
import profile from '../image/bj.png'
const Intro = () => {
    
  return (
    <div className='intro'>
        <div className='intro-details'>
          <h1>Hello, I'm</h1>
          <p className='tracking-out-contract '>Bijay Gurung</p>
          <p id='details'>A Full Stack web developer and content creator based in the Nepal.</p><br/>
          <button id='resumebutton'>Resume</button>
          

        </div>
        <div className='intro-img'>
            <img src={profile} alt='profilepic' id='intro-imgone'/>
        </div>
    </div>
  )
}

export default Intro