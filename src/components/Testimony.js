import React from 'react'
import '../css/testimony.css'
function Testimony(props) {
  return (
      <div className='container-testimony'>
        <img
            alt='Picture Shawn'
            className='img-testimony'
            src={require(`../images/${props.imageStudent}.png`)}/>
        <div className='container-presentation'>
          <p className="name">{props.nameStudent} in <span className='country-job'>{props.country}</span> </p>
          <p className='job'>{props.job} at <span className='enterprise'>{props.enterprise}</span> </p>
          <p className='resume'>"{props.resumeStudent} "</p>
        </div>
      </div>
  )
}

export default Testimony