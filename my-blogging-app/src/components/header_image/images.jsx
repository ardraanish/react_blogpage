import React from 'react';
import img from '../../images/food.jpg'
import './images.css'

function images() {
  return (
    <div className='sec'>
        <div className="container">
        <img className='headImg' src={img} alt="images" />
        </div>
    </div>
  )
}

export default images