import React from 'react'
import Review from '../Components/Review'
import '../css/Testimonial.css'
const Testimonial = () => {
  return (
    <div className='test'>
        <h1>Testimonials</h1>
        <p>Prople I've worked with have said some nice things...</p>
       <div className='review-list'>
          {Review.map((data)=>{
            return(
                <>
                <div className='card'>
                <img src={data.img}/>
                <p>{data.contain}</p>
                <h1>{data.name}</h1>
                </div>
               
                </>
            )
          })}
       </div>
    </div>
  )
}

export default Testimonial