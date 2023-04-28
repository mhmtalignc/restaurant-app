import React from 'react'
import BannerImage from "../assets/about.jpg"

function About() {
  return (
    <div className='about'>
        <div className="aboutTop" style={{ backgroundImage: `url(${BannerImage})` }} ></div>
        <div className="aboutBottom">
            <h1>About Us</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Doloremque officia similique debitis consectetur laudantium facere sequi, 
            nobis doloribus. Voluptatem possimus tempora quidem. Illo nostrum perferendis 
            mollitia officiis odio quae fuga.</p>
        </div>
    </div>
  )
}

export default About