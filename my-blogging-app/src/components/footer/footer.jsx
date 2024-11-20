import React from 'react'
import './footer.css'

function footer() {
  return (
    <div className='sec'>
      <div class="container">
        <div class="footer_above">
            <div class="footer_info">
                <h5>Company info</h5>
             <div class="links">
                 <ul className='links_ul'>
                     <li>About Us</li>
                     <li>Carrier</li>
                     <li>We are hiring</li>
                     <li>Blog</li>
                 </ul>
             </div>
            </div>
            <div class="footer_info">
                <h5>Legal</h5>
                <div class="links">
                    <ul className='links_ul'>
                        <li>About Us</li>
                        <li>Carrier</li>
                        <li>We are hiring</li>
                        <li>Blog</li>
                    </ul>
                </div>
            </div>
            <div class="footer_info">
                <h5>Features</h5>
                <div class="links">
                    <ul className='links_ul'>
                        <li>Business Marketing</li>
                        <li>User Analytic</li>
                        <li>Live Chat</li>
                        <li>Unlimited Support</li>
                    </ul>
                </div>
            </div>
            <div class="footer_info">
                <h5>Resourses</h5>
                <div class="links">
                    <ul className='links_ul'>
                        <li>IOS & Android</li>
                        <li>Watch a Demo</li>
                        <li>Customers</li>
                        <li>API</li>
                    </ul>
                </div>
            </div>
            <div class="footer_info">
                <h5>Get In Touch</h5>
               <div class="links">
                   <ul class="contact">
                       <li>
                           <span><i class="fa-solid fa-phone"></i></span>
                           (480) 555-0103            
                       </li>
                       <li>
                          <span><i class="fa-solid fa-location-dot"></i></span>
                          4517 Washington Ave. Manchester,
                           Kentucky 39495                           
                       </li>
                       <li>
                           <span><i class="fa-solid fa-envelope"></i></span>
                           debra.holt@example.com                  
                       </li>       
                   </ul>
               </div>
            </div>
         </div>
    </div>
    </div>
  )
}

export default footer