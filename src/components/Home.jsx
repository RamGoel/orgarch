import React from 'react'
import chairs from '../assets/emptyChairs.png'

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
             <div class="flex justify-center md:justify-start">
                <a href="sus" class="p-3 px-6 pt-2 text-white a-colour rounded-full baseline hover:a-colourLight">Let's connect.</a>
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
