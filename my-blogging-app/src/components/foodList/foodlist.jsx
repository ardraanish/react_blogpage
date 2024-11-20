import React from 'react'
import './foodList.css'

function foodlist() {
  return (
    <div className='sec'>
    <div className='container'>
        <div className="food_sec">
            <div className="food_list">
        <div className="foodList">
            <ul className='ul_list'>
                <li>Biriyani</li>
                <li>Ice cream</li>
                <li>Shake</li>
                <li>Momos</li>
            </ul>
        </div>
        <div className="foodList">
            <ul className='ul_list' >
                <li>french fries</li>
                <li>fresh juice</li>
                <li>bugger</li>
                <li>sandwich</li>
            </ul>
        </div>
        <div className="foodList">
            <ul className='ul_list'>
                <li>Biriyani</li>
                <li>Ice cream</li>
                <li>Shake</li>
                <li>Momos</li>
            </ul>
        </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default foodlist