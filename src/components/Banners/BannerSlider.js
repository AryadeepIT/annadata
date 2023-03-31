import React from 'react'
import Slider from 'react-slick'
import './BannerSlider.css'

const BannerSlider = () => {
    const data = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1592997572594-34be01bc36c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            title: 'Freshness delivered to your doorstep',
            description: 'Shop for the freshest produce and pantry essentials on our grocery website today!',
            button: 'https://aryadeepit.github.io' 
            // Please change the above link
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1553546895-531931aa1aa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
            title: 'One-Stop-Shop for all Your Grocery Needs',
            description: 'Shop the Best Selection of Locally Sourced Produce and Groceries at Annadata Today!',
            button: 'https://aryadeepit.github.io' 
            // Please change the above link
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1618260762313-3f23f6e8acc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
            title: 'Healthy Eating Made Easy',
            description: 'Find a Variety of Nutritious Options in Every Aisle',
            button: 'https://aryadeepit.github.io' 
            // Please change the above link
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1581515286348-98549702050f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
            title: 'Grocery Shopping Has Never Been Easier',
            description: 'Try Our Convenient Delivery and Pickup Options',
            button: 'https://aryadeepit.github.io' 
            // Please change the above link
        },

        {
            id: 5,
            image: 'https://images.unsplash.com/photo-1568742011442-55d3cc0a0e5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            title: 'Your Satisfaction Is Our Top Priority',
            description: 'Let Us Help You Find What You Need Today',
            button: 'https://aryadeepit.github.io' 
            // Please change the above link
        },

        



    ]



    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: false,
        fade: true,
        cssEase: 'linear'
    }

  return (
    <div className='bannerslider'>
        <Slider className='bannerslider' {...settings}>
            {
                data.map(item => {
                    return (
                        <div className='imagecont' key={item.id}> 
                            <img src={item.image} alt='banner' />
                            <div className='content'>
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                                <button>Shop Now</button>
                        </div>
                        </div>
                    )
                })
            }

        </Slider>
      
    </div>
  )
}

export default BannerSlider
