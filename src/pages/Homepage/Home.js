import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import BannerSlider from '../../components/Banners/BannerSlider'
import HomeCategories from '../../components/Category/HomeCategories'
import Product_Sidebar from '../../components/Products/Product_Sidebar'

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <BannerSlider /> */}
      <HomeCategories />
      <Product_Sidebar />
      Home
    </div>
  )
}

export default Home
