import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className='descriptionbox-nav-box'>Description</div>
            <div className='descriptionbox-nav-box'>Reviews (122)</div>
        </div>
        <div className='descriptionbox-description'>
            <p>An e-commerce website is an platform that facilitates 
              buying and selling of products over the internet 
              serves a virtual marketplace where business and individual
              showcase their products, interact with customers, and conduction 
              transactions without the need for a physical presence.
              E-commerce websites have gained immense popularity due to their conventional
              accessibility, and the global reach they offer.</p>
        </div>
    </div>
  )
}

export default DescriptionBox