import React from 'react'
import './Footer2.css'
import paymenticon from '../../../src/assets/Footer/payments.png'
import logo from '../../../src/assets/annadata.png'
import socialimg from '../../../src/assets/Footer/social.png'

const Footer2 = () => {
  return (
    <div className='footer'>
      <div className='footerin1'>
        <div className='f1'>
          <img src={logo} alt='logo' className='logo' />
          <p>Annadata is an Indian leading online grocery store that connects local shops to the online. We are commited to provide better quality products on time at better price.</p>
          <img src={socialimg} alt='socialimg' className='socialimg' />
        </div>
        <div className='f2'>
          <h3>About Us</h3>
          <p>Who We Are</p>
          <p>About Team</p>
          <p>Investor Relations</p>
          <p>Customer Support</p>
        
        </div>
        <div className='f2'>
          <h3>Our Information</h3>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Return Policy</p>
          <p>Site Map</p>
        </div>
        <div className='f2'>
          <h3>Community</h3>
          <p>Announcements</p>
          <p>Answer Center</p>
          <p>Discussion Boards</p>
          <p>Collaborations</p>
        </div>
        <div className='f2'>
          <h3>Subscribe Now</h3>
          <p id='subscribe'>Subscribe your email for newsletter and featured news based on your interest</p>
          <div className='inputcontainer'>
            <span className='icon1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
</svg>

            </span>
            <input type='text' placeholder='Enter your email' />
            <span className='icon2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
</svg>

            </span>
            </div>
                  </div>

      </div>
      <div className='footerin2'>
        <h3>© Copyright 2023 <span>Annadata</span> - <span>অন্নদাতা</span> -  
<span> अन्नदाता</span>, Inc. All rights reserved</h3>
<img src={paymenticon} alt='paymenticon' />

        </div>
      
    </div>
  )
}

export default Footer2
