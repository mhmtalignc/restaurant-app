import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../assets/banner2.jpg'

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className='headerContainer'>
        <h1>Chicken <span>63</span></h1>
        <p>Delicious Chickens <br />with <span>33 Spicy</span> Mixed</p>
        <Link to='/menu'><button>Order Now</button></Link>
      </div>
    </div>
  )
}
export default Home