import React from 'react'
import Projectdata from '../Components/Projectdata'
import '../css/Work.css'
import {FaEye} from 'react-icons/fa'

const Work = () => {
  return (
    <div className='work'>
      <h10>My Recent Work</h10>
      <p>Here are a few past design projects I've worked on. Want to see more? <spam>Email me.</spam></p>
      <div className='project-container'>
        {Projectdata.map((data)=>{
          return(
            <>
             <div className='project-card'>
          <img className='project-img' src={data.img} alt={data.title}/>
        
         <div className='overlay-work'>
          <h2 id='project-title'>{data.title}</h2>
          <button >Visit Website</button>
         </div>
         </div>
            </>
          )
        })}
         </div>
      <button id='button_icon'><spam ><FaEye/></spam>See more on Projects</button>
    </div>
  )
}

export default Work