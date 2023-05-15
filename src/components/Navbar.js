import React from 'react'
import '../App.css'
export default function Navbar() {
  return (
    <div>
    <section class="header">
      <nav>
        <h2>LOGO</h2>
        <div class="nav-links" id="navLinks">
          <i class="fa fa-times" onclick="hideMenu()"></i>
          <ul>
            <li><a href="">HOME</a></li>
            <li><a href="">ABOUT</a></li>
            <li><a href="">COURSE</a></li>
            <li><a href="">BLOG</a></li>
            <li><a href="">CONTACT</a></li>
          </ul>
        </div>
      </nav>

      <div class="text-box">
        <h1>Research Paper Review</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, esse.</p>
        <a href='heh' class="hero-btn">Scroll down to explore</a>
      </div>
    </section>
    </div>
  )
}
