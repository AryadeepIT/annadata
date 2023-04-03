import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
// import BannerSlider from '../../components/Banners/BannerSlider'
import HomeCategories from '../../components/Category/HomeCategories'
import ProductSidebar from '../../components/Products/Product_Sidebar'
import Footer1 from '../../components/Footer/Footer1'
import Footer2 from '../../components/Footer/Footer2'
import Marque from '../../components/Marquee/Marquee'

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <BannerSlider /> */}
      <HomeCategories />
      <ProductSidebar />
      <Footer1 />
      <Marque />
      <Footer2 />
    </div>
  )
}

export default Home
