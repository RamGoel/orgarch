import React from 'react'
import '../App.css'
import '../index.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div style={{ backgroundColor: '#bbabec', display: 'flex', justifyContent: 'flex-end' }}>
      <nav class="relative container mx-auto p-1 amar-nabvbar flex justify-between">
        <div class="flex items-center justify-between " style={{ width: '100%' }}>
          <div class="pt-2 logo-div">
            <img src={logo} alt="" class="logo-img" />
          </div>
          <Link to="https://linkedin.com/in/ramgoel" class="flex items-center text-xs py-2 justify-between border-2 rounded-full px-4 border-black text-white bg-black">
            Designed & Developed by Ram Goel <i className='fab fa-linkedin ml-2 ' />
          </Link>
        </div>

      </nav>
    </div>
  )
}
