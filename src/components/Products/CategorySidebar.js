import React from 'react'
import img1 from '../../assets/Images/CategorySidebar/1.png'
import img2 from '../../assets/Images/CategorySidebar/2.png'
import img3 from '../../assets/Images/CategorySidebar/3.png'
import img4 from '../../assets/Images/CategorySidebar/4.png'
import img5 from '../../assets/Images/CategorySidebar/5.png'
import img6 from '../../assets/Images/CategorySidebar/6.png'
import img7 from '../../assets/Images/CategorySidebar/7.png'
import img8 from '../../assets/Images/CategorySidebar/8.png'
import img9 from '../../assets/Images/CategorySidebar/9.png'
import img10 from '../../assets/Images/CategorySidebar/10.png'
import img11 from '../../assets/Images/CategorySidebar/11.png'
import img12 from '../../assets/Images/CategorySidebar/12.png'
import img13 from '../../assets/Images/CategorySidebar/13.png'
import img14 from '../../assets/Images/CategorySidebar/14.png'
import img15 from '../../assets/Images/CategorySidebar/15.png'
import img16 from '../../assets/Images/CategorySidebar/16.png'
import img17 from '../../assets/Images/CategorySidebar/17.png'
import img18 from '../../assets/Images/CategorySidebar/18.png'
import img19 from '../../assets/Images/CategorySidebar/19.png'
import img20 from '../../assets/Images/CategorySidebar/20.png'
import img21 from '../../assets/Images/CategorySidebar/21.png'
import img22 from '../../assets/Images/CategorySidebar/22.png'

import './CategorySidebar.css'

const CategorySidebar = () => {
  const data = [
    {
      id: 1,
      categoryimage: img1,
      categoryname: 'Rice, Atta & Dal'
    },
    {
      id: 2,
      categoryimage: img2,
      categoryname: 'Salt, Sugar & Spices'
    },
    {
      id: 3,
      categoryimage: img3,
      categoryname: 'Oil & Ghee'
    },
    {
      id: 4,
      categoryimage: img4,
      categoryname: 'Dry Fruits, Nuts & Seeds'
    },
    {
      id: 5,
      categoryimage: img5,
      categoryname: 'Snacks & Packaged Food'
    },
    {
      id: 6,
      categoryimage: img6,
      categoryname: 'Noodles & Pasta'
    },
    {
      id: 7,
      categoryimage: img7,
      categoryname: 'Beverages'
    },
    {
      id: 8,
      categoryimage: img8,
      categoryname: 'Detergents & Laundry'
    },
    {
      id: 9,
      categoryimage: img9,
      categoryname: 'Body & Skincare'
    },
    {
      id: 10,
      categoryimage: img10,
      categoryname: 'Hair Care'
    },
    {
      id: 11,
      categoryimage: img11,
      categoryname: 'Hygiene & Baby Care'
    },
    {
      id: 12,
      categoryimage: img12,
      categoryname: 'Oral Care'
    },
    {
      id: 13,
      categoryimage: img13,
      categoryname: 'Home and Kitchen'
    },
    {
      id: 14,
      categoryimage: img14,
      categoryname: 'Household & Kitchen'
    },
    {
      id: 15,
      categoryimage: img15,
      categoryname: 'Dairy & Eggs'
    },
    {
      id: 16,
      categoryimage: img16,
      categoryname: 'Pet Care'
    },
    {
      id: 17,
      categoryimage: img17,
      categoryname: 'Pharma and Wellness'
    },
    {
      id: 18,
      categoryimage: img18,
      categoryname: 'Fruits and Vegetables'
    },
    {
      id: 19,
      categoryimage: img19,
      categoryname: 'Chicken, Mutton & Fish'
    },
    {
      id: 20,
      categoryimage: img20,
      categoryname: 'Sexual Wellness'
    },
    {
      id: 21,
      categoryimage: img21,
      categoryname: 'Cigarettes & Tobacco'
    },
    {
      id: 22,
      categoryimage: img22,
      categoryname: 'Paan & Gutkha'
    }
  ]
  return (
    <div className='categorysidebar'>
      {
        data.map((item) => {
          return (
            <div className='category'>
            <img src={item.categoryimage} alt='categoryimage' />
            <h3>{item.categoryname}</h3>
          </div>
          )
        })
      }
    </div>
  )
}

export default CategorySidebar
