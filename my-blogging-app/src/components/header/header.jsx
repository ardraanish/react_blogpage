import React from 'react'
import './header.css'


function header() {
  return (
    <div className='sec'>
       <div className="container">
        <div className="header">
            <h1 className='logo'>Food   Blogger</h1>
            <ul className='header_ul'>
                <li className='liList'>Home </li>
                <li className='liList'>product</li>
                <li className='liList'>about</li>
                <li className='liList'>contact</li>
            </ul>
            <button className='btn'>signup</button>
        </div>
        </div>

    </div>
  )
}

export default header