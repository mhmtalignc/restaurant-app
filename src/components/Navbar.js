import React from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className='navbar'>

      <div className='LeftSide'>
        <Link to="/"><img src={Logo} /></Link>
      </div>

      <div className='RightSide'>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  )
}
