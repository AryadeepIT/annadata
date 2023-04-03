import React from 'react'
import footer from '../../../src/assets/Footer/footer.png'
import './Footer1.css'

const Footer1 = () => {
  return (
    
    <div className='footer1'>
        <div className='left'>
            <img src={footer} alt='footer' />
        </div>
        <div className='right'>
            <h1>Fresh Grocery and Many More at Your Doorstep!</h1>
            <p>Order Groceries from Annadata Now!</p>
        </div>   
    </div>
    
  )
}

export default Footer1
