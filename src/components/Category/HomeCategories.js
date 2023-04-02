import React from 'react'
import './HomeCategories.css'
import img1 from '../../assets/Images/1.png'
import img2 from '../../assets/Images/2.png'
import img3 from '../../assets/Images/3.png'
import img4 from '../../assets/Images/4.png'

const HomeCategories = () => {
  return (
    <div className='homecategories'>
      <div className='container'>
        <img src={img1} alt='img1' />
        <div className='content'>
            <h1>Get 61% off on Dettol Refresh Body Wash and Shower Gel</h1>
            <p>Limited time offer, don't miss out!</p>
        </div>
      </div>
      <div className='container'>
        <img src={img2} alt='img2' />
        <div className='content'>
            <h1>Get ready to cook up a storm with Fortune Sunlite Refined Sunflower Oil!</h1>
            <p>For a limited time, enjoy a whopping 16% off!</p>
        </div>
      </div>
      <div className='container'>
        <img src={img3} alt='img3' />
        <div className='content'>
            <h1>Get your taste buds tingling with Lays American Style Cream and Onion Chips</h1>
            <p>Now at an unbeatable discount of 29% off! </p>
        </div>
      </div>
      <div className='container'>
      <img src={img4} alt='img4' />
      <div className='content'>
            <h1>Revitalize Your Skin with Vaseline Intensive Care Aloe Soothe Body Lotion</h1>
            <p>Have a Look!</p>
        </div>

      </div>
    </div>
  )
}

export default HomeCategories
