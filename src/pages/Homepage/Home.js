import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import BannerSlider from '../../components/Banners/BannerSlider'
import HomeCategories from '../../components/Category/HomeCategories'

const Home = () => {
  return (
    <div>
      <Navbar />
      <BannerSlider />
      <HomeCategories />
      
    </div>
  )
}

export default Home
