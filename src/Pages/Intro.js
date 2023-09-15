import React  from 'react'

import '../css/Intro.css'
import '../image/bj.png'

const Intro = () => {
    
  return (
    <div className='intro'>
        <div className='intro-details'>
          <h1>Hello, I'm</h1>
          <p className='tracking-out-contract '>Bijay Gurung</p>
          <p id='details'>A Full Stack web developer and content creator based in the Nepal.</p>
        </div>
        <div className='intro-img'>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/011/153/368/small/3d-website-developer-working-on-laptop-illustration-png.png" alt='profilepic'/>
        </div>
    </div>
  )
}

export default Intro