import React from 'react'
import '../App.css'
import '../index.css'
import logo from '../assets/logo.png'
export default function Navbar() {
  return (
    <div style={{ backgroundColor: '#bbabec', display: 'flex', justifyContent: 'flex-end'}}>
    <nav class="relative container mx-auto p-1 amar-nabvbar flex justify-between">
    <div class="flex items-center justify-between " style={{ width: '100%'}}>
        <div class="pt-2 logo-div">
            {/* <h1 class="logo-name">AAA<span class="logo-name-small"></span></h1> */}
            <img src={logo} alt="" class="logo-img"/> 
        </div>
        <div class="hidden md:flex space-x-6">
            <a href="#">Milestones</a>
            <a href="#">About Us</a>
            <a href="#">Our Work</a>
            <a href="#">Community</a>
        </div>
        <a href="" class="hidden md:block p-3 px-6 pt-2 text-white a-colour rounded-full baseline hover:a-colourLight">Let's connect</a>

        <button id="menu-btn" class="block hamburger md:hidden focus:outline-none">
            <span class="hamburger-top"></span>
            <span class="hamburger-middle"></span>
            <span class="hamburger-bottom"></span>
        </button>
    </div>
    
    <div class="md:hidden">
        <div id="menu" class="absolute flex-col items-center self-end hidden py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
            <a href="#">Milestones</a>
            <a href="#">About Us</a>
            <a href="#">Our work</a>
            <a href="#">Commmunity</a>
        </div>
    </div>
</nav>
    </div>
  )
}
