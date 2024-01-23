import React from 'react'
import { Link } from 'react-router-dom'
import conf from '../assets/image.png'
import author from '../assets/author.webp'
import person from '../assets/person.png'
const ChooseRole = () => {
    return (
        <section id="role" class="h-screen w-screen flex items-center justify-center">
            <div className='w-11/12'> 
                <h1 className='text-center'>Who are you ? </h1>
            <p className='my-0 mx-auto text-center'>Please choose your role!</p>
            <div class="flex flex-col items-center justify-between my-5 md:flex-row">
                <Link to="/organizer/signup" className='w-1/2 my-3'>
                    <div class="">
                        <img src={conf} alt='img' className='w-[300px] h-[300px] rounded-full object-cover mx-auto mb-3 ' />
                        <h3 className='text-2xl text-center'>Conference Organizer</h3>
                    </div>
                </Link>
                <Link to="/reviewer/signup" className='w-1/2 my-3'>
                    <div class="">
                        <img src={person} alt='img' className='w-[300px] h-[300px] rounded-full object-cover mx-auto mb-3 ' />
                        <h3 className='text-2xl text-center'>Reviewer</h3>
                    </div>
                </Link>

                <Link to="/author/signup" className='w-1/2 my-3'>
                    <div class="">
                        <img src={author} alt='img' className='w-[300px] h-[300px] rounded-full object-cover mx-auto mb-3 ' />
                        <h3 className='text-2xl text-center'>Author</h3>
                    </div>
                </Link>
            </div>
            </div>
        </section>
    )
}

export default ChooseRole