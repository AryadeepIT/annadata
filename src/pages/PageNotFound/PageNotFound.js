import React from 'react'
import './PageNotFound.css'




const PageNotFound = () => {
  return (
    




    <div>
      <div class="moon"></div>
<div class="moon__crater moon__crater1"></div>
<div class="moon__crater moon__crater2"></div>
<div class="moon__crater moon__crater3"></div>

<div class="star star1"></div>
<div class="star star2"></div>
<div class="star star3"></div>
<div class="star star4"></div>
<div class="star star5"></div>

<div class="error">
  <div class="error__title">404</div>
  <div class="error__subtitle">Hmmm...</div>
  <div class="error__description">
    Oops! Looks like you've stumbled upon a page <br/> 
    that has gone missing. <br/>
    Don't worry, our team of digital detectives are <br/> 
  on the case and we'll try our best to locate the <br />
  missing content. <br />
  In the meantime, why not explore some of our <br />
  other pages and see if there's something else <br/>
  that catches your eye?</div>
  <a href='/home'><button class="error__button error__button--active" >HOME</button></a>
  <button class="error__button">CONTACT</button>
</div>

<div class="astronaut">
  <div class="astronaut__backpack"></div>
  <div class="astronaut__body"></div>
  <div class="astronaut__body__chest"></div>
  <div class="astronaut__arm-left1"></div>
  <div class="astronaut__arm-left2"></div>
  <div class="astronaut__arm-right1"></div>
  <div class="astronaut__arm-right2"></div>
  <div class="astronaut__arm-thumb-left"></div>
  <div class="astronaut__arm-thumb-right"></div>
  <div class="astronaut__leg-left"></div>
  <div class="astronaut__leg-right"></div>
  <div class="astronaut__foot-left"></div>
  <div class="astronaut__foot-right"></div>
  <div class="astronaut__wrist-left"></div>
  <div class="astronaut__wrist-right"></div>
  
  <div class="astronaut__cord">
    <canvas id="cord" height="500px" width="500px"></canvas>
  </div>
  
  <div class="astronaut__head">
    <canvas id="visor" width="60px" height="60px"></canvas>
    <div class="astronaut__head-visor-flare1"></div>
    <div class="astronaut__head-visor-flare2"></div>
  </div>
</div>





    </div>
  )
}

export default PageNotFound
