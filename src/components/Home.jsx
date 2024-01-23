import React from 'react'
import chairs from '../assets/emptyChairs.png'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
   <>
    <div>
<section id="hero">
    <div class="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
        <div class="flex flex-col mb-10 space-y-12 md:w-1/2">
             <h1 class="max-w-lg text-4xl font-bold text-center md:text-5xl md:text-left">
                Smart Review
             </h1>
             <p className='max-w-lg text center md:text-left'>Create virtual and hybrid conferences
             that feel like real</p>
             <p class="max-w-lg text-center text-darkGrayishBlue md:text-left">
             Smart Review is a cutting-edge review system designed to revolutionize the evaluation process for research papers. Leveraging advanced technologies and intelligent algorithms, Smart Review aims to streamline and enhance the peer review process, ensuring rigorous assessment and valuable feedback for researchers worldwide.             </p>
             <div class="p-2 bg-black w-[200px] text-center text-white rounded-full">
                <Link to="/role" class="">Get Started </Link> <i className='fa fa-arrow-right' />
             </div>
        </div>
        <div class="md:w-1/2">
            <img src={chairs} class="right-img" alt=""/> 
         </div>
    </div>
</section>
    </div>
   </>
  )
}
