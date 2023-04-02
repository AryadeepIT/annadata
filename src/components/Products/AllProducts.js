import React from 'react'
import ProductCard from './ProductCard'
import './AllProducts.css'
import img1 from '../../assets/Images/Products/1.png'
import img2 from '../../assets/Images/Products/2.png'
import img3 from '../../assets/Images/Products/3.png'
import img4 from '../../assets/Images/Products/4.png'
import img5 from '../../assets/Images/Products/5.png'
import img6 from '../../assets/Images/Products/6.png'
import img7 from '../../assets/Images/Products/7.png'
import img8 from '../../assets/Images/Products/8.png'
import img9 from '../../assets/Images/Products/9.png'
import img10 from '../../assets/Images/Products/10.png'
import img11 from '../../assets/Images/Products/11.png'
import img12 from '../../assets/Images/Products/12.png'
import img13 from '../../assets/Images/Products/13.png'
import img14 from '../../assets/Images/Products/14.png'
import img15 from '../../assets/Images/Products/15.png'
import img16 from '../../assets/Images/Products/16.png'

const AllProducts = () => {
  const products = [
    {
      id: 1,
      productimage: img1,
      productname: 'Fortune Hamesha Basmati Rice',
      productprice: 380,
      discountpercent: 10,
      counttype: '5 kg'
    },
    {
      id: 2,
      productimage: img2,
      productname: 'Tata Vacuum Evaporated Iodized Salt',
      productprice: 28,
      discountpercent: 10,
      counttype: '1 kg'
    },
    {
      id: 13,
      productimage: img13,
      productname: 'Chandramukhi Potato',
      productprice: 27,
      discountpercent: 15,
      counttype: '1 kg'
    },
    {
      id: 3,
      productimage: img3,
      productname: 'Fortune Sunlite Refined Sunflower Oil Can',
      productprice: 875,
      discountpercent: 16,
      counttype: '5 L'
    },
    {
      id: 4,
      productimage: img4,
      productname: 'Lays American Style Cream and Onion Chips',
      productprice: 150,
      discountpercent: 29,
      counttype: '270 g'
    },

    {
      id: 14,
      productimage: img14,
      productname: 'Brown Coconut + Bel Patra Combo',
      productprice: 104,
      discountpercent: 20,
      counttype: 'Combo'
    },
    {
      id: 5,
      productimage: img5,
      productname: 'MiRiNDA Plastic Bottle',
      productprice: 94,
      discountpercent: 27,
      counttype: '2.25 L'
    },
    {
      id: 6,
      productimage: img6,
      productname: 'Vaseline Intensive Care Aloe Soothe Body Lotion',
      productprice: 435,
      discountpercent: 59,
      counttype: '400 ml'
    },
    {
      id: 7,
      productimage: img7,
      productname: 'BRITANNIA Little Hearts Classic Sweet & Salty',
      productprice: 30,
      discountpercent: 16,
      counttype: '75g'
    },
    { 
      id: 8,
      productimage: img8,
      productname: 'Tata Agni Strong Leaf Black Tea Pouch',
      productprice: 200,
      discountpercent: 14,
      counttype: '1 kg'
    },
    {
      id: 9,
      productimage: img9,
      productname: 'Kelloggs Corn Flakes Pouch',
      productprice: 99,
      discountpercent: 11,
      counttype: '275 g'
    },
    {
      id: 15,
      productimage: img15,
      productname: 'Eggoz Farm Fresh White Eggs',
      productprice: 360,
      discountpercent: 20,
      counttype: '30 piece'
    },
    {
      id: 10,
      productimage: img10,
      productname: 'Chana Dal (Split)',
      productprice: 60,
      discountpercent: 33,
      counttype: '500 g'
    },
    {
      id: 11,
      productimage: img11,
      productname: 'Scotch-Brite Silver Sparks Scrub Pad',
      productprice: 90,
      discountpercent: 20,
      counttype: 'Pack of 6'
    },
    {
      id: 12,
      productimage: img12,
      productname: 'Dettol Refresh Body Wash and Shower Gel',
      productprice: 200,
      discountpercent: 61,
      counttype: '250 ml'
    },
    {
      id: 16,
      productimage: img16,
      productname: 'Baby Banana (Robusta)',
      productprice: 80,
      discountpercent: 50,
      counttype: '4p (8 pcs)'
    }

  ]
  return (
    <div className='allproducts'>
      <h1>All Products</h1>
      <div className='products'>
        {
          products.map((item) =>{
            return (
              <ProductCard data={item} key={item.id} />
            )
          })
        }

        </div>      
    </div>
  )
}

export default AllProducts
