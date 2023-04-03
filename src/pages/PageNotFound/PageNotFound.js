import React from "react";
import "./PageNotFound.css";
import image404 from '../../../src/assets/Images/image404.webp'

const PageNotFound = () => {
  return (
    <div>
      <section class="page_404">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 ">
              <div class="col-sm-10 col-sm-offset-1  text-center">
                
                <div class="four_zero_four_bg">
    
                <img src={image404} alt='image404' />
                </div>

                <div class="contant_box_404">
                 
                  <h1>404</h1>
                  <h3 class="h2">Look like you're lost</h3>

                  <p>the page you are looking for not available!</p>

                  <a href="/home" class="link_404">
                    Go to Home
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PageNotFound;
