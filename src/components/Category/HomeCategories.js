import React from "react";
import "./HomeCategories.css";
import img1 from "../../assets/Images/1.png";
import img2 from "../../assets/Images/2.png";
import img3 from "../../assets/Images/3.png";
import img4 from "../../assets/Images/4.png";
import img5 from "../../assets/Images/5.png";
import img6 from "../../assets/Images/6.png";
import img7 from "../../assets/Images/7.png";
import img8 from "../../assets/Images/8.png";

const HomeCategories = () => {
  return (
    <div className="homecategories">
      <div className="container">
        <img src={img1} alt="img1" />
        <div className="content">
          <h1>Get 61% off on Dettol Refresh Body Wash and Shower Gel</h1>
          <p>Limited time offer, don't miss out!</p>
        </div>
      </div>

      <div className="container">
        <img src={img5} alt="img5" />
        <div className="content">
          <h1>Fresh Chandramukhi Potato at 15% off</h1>
          <p>Bag it before gone!</p>
        </div>
      </div>

      <div className="container">
        <img src={img2} alt="img2" />
        <div className="content">
          <h1>
            Fortune Sunlite Refined Sunflower
            Oil
          </h1>
          <p>For a limited time, enjoy a whopping 16% off!</p>
        </div>
      </div>

      <div className="container">
        <img src={img6} alt="img6" />
        <div className="content">
          <h1>Buy 1 Get 1 Free on Fresh Bananas</h1>
          <p>Offer valid for today!</p>
        </div>
      </div>

      <div className="container">
        <img src={img3} alt="img3" />
        <div className="content">
          <h1>
            Lays American Style Cream and
            Onion Chips
          </h1>
          <p>Now at an unbeatable discount of 29% off! </p>
        </div>
      </div>


      <div className="container">
        <img src={img7} alt="img7" />
        <div className="content">
          <h1>Fresh Eggs Directly from farms at flat 20% Off</h1>
          <p>Enrich the Protein intake with EGGOZ Fresh Eggs!</p>
        </div>
      </div>

      

      <div className="container">
        <img src={img4} alt="img4" />
        <div className="content">
          <h1>
            Revitalize Your Skin with Vaseline Intensive Care Aloe Soothe Body
            Lotion
          </h1>
          <p>Have a Look!</p>
        </div>
      </div>

      

      
      
      <div className="container">
        <img src={img8} alt="img8" />
        <div className="content">
          <h1>Worship God with our Combo Puja Plan</h1>
          <p>Get 1pc Coconut and 2p bel patta at Rs 83!</p>
        </div>
      </div>
      

    </div>
  );
};

export default HomeCategories;
