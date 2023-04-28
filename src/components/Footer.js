import React from 'react'
import Social from './Social'
import { FaTwitter,FaInstagram, FaFacebook } from 'react-icons/fa';


function Footer() {
    return (
        <div className='footer'>
            <div className='socialmedia'>
                <p> &copy; 2023 Chicken 63</p>
                <div className='social'>
                <FaTwitter />
                <FaFacebook />
                <FaInstagram />
                </div>
            </div>
        </div>
    )
}

export default Footer




