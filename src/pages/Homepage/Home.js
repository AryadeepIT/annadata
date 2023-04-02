import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import BannerSlider from '../../components/Banners/BannerSlider'
import HomeCategories from '../../components/Category/HomeCategories'
import Product_Sidebar from '../../components/Products/Product_Sidebar'
import Footer1 from '../../components/Footer/Footer1'
import Footer2 from '../../components/Footer/Footer2'

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <BannerSlider /> */}
      <HomeCategories />
      <Product_Sidebar />
      <Footer1 />
      <Footer2 />
    </div>
  )
}

export default Home
