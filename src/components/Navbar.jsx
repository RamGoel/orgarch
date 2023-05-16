import React from 'react'
import '../App.css'
export default function Navbar() {
  return (
    <div>
    <section class="header">
      <nav>
        <h2>LOGO</h2>
        <div class="nav-links" id="navLinks">
          <i class="fa fa-times" onClick="hideMenu()"></i>
          {/* <ul>
            <li><a href="">HOME</a></li>
            <li><a href="">ABOUT</a></li>
            <li><a href="">COURSE</a></li>
            <li><a href="">BLOG</a></li>
            <li><a href="">CONTACT</a></li>
          </ul> */}
        </div>
      </nav>

      <div class="text-box">
        <h1>Smart Review</h1>
        <div className="home-desc">
        Smart Review is a cutting-edge review system designed to revolutionize the evaluation process for research papers. Leveraging advanced technologies and intelligent algorithms, Smart Review aims to streamline and enhance the peer review process, ensuring rigorous assessment and valuable feedback for researchers worldwide.
        With Smart Review, the traditional paper-based review system becomes a thing of the past. The platform offers an intuitive and user-friendly interface that enables reviewers to efficiently assess the quality, significance, and validity of research papers in their respective fields. Smart Review caters to a wide range of academic disciplines, encompassing sciences, humanities, engineering, social sciences, and more.
        </div>
        <a href='#role' class="hero-btn">Scroll down to explore</a>
      </div>
    </section>
    </div>
  )
}
