import React from 'react'
import Marquee from "react-fast-marquee";
import './Marquee.css'

const Marque = () => {
  return (
    <div className='marquee'>
    <Marquee gradientColor={false} pauseOnHover={true}>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Annadata - Your Personal Grocery Website for Learning and Visualization Purposes Only. We want to emphasize that our website is purely educational and not intended for commercial purposes. The products you see in our item list are for visualization purposes only. Enjoy learning and exploring with Annadata!
</Marquee>
</div>
  )
}

export default Marque
