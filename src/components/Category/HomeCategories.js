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
            <h1>Premium Quality Rice for Your Daily Meals upto 20% off</h1>
            <p>Sounds Interesting?</p>
        </div>
      </div>
      <div className='container'>
        <img src={img2} alt='img2' />
        <div className='content'>
            <h1>10% of on all Healthy and Delicious Cooking Oils</h1>
            <p>Health is our Priority.</p>
        </div>
      </div>
      <div className='container'>
        <img src={img3} alt='img3' />
        <div className='content'>
            <h1>Indulge in our Irresistible Cookie Selection (XX% Off)</h1>
            <p>Can you Guess the discount?</p>
        </div>
      </div>
      <div className='container'>
      <img src={img4} alt='img4' />
      <div className='content'>
            <h1>Quench Your Thirst with Our Refreshing Beverage Range</h1>
            <p>Have a Look!</p>
        </div>

      </div>
    </div>
  )
}

export default HomeCategories
