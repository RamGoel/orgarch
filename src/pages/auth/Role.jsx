import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'

import conf from '../../assets/image.png'
import person from '../../assets/person.png'
import Navbar from '../../components/Navbar'

import './Auth.css'
import Home from '../../components/Home'
import Footer from '../../components/Footer'
import RemHome from '../../components/RemHome'

function Role() {
    return (
        <>
            <Navbar />
            <Home/>
            <section id="role" class="facilities">
                <h1 className='landingPageHeading'>Who are you ? </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur reiciendis quidem voluptate officiis modi? Nulla rerum deleniti quos distinctio perspiciatis facere accusamus molestias.</p>

                <div class="row">
                    <Link to="/organizer/signup" className='landingPageLinks'>
                        <div class="facilities-col">
                            <img src={conf} alt='img' className='facilities-img'/>
                            <h3>Conference Organizer</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatum vero, architecto deserunt, non quam amet libero illum commodi nulla quia impedit, similique corporis quibusdam?</p>
                        </div>
                    </Link>
                    <Link to="/reviewer/signup" className='landingPageLinks'>
                        <div class="facilities-col">
                            <img src={person} alt='img' className='facilities-img'/>
                            <h3>Reviewer</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatum vero, architecto deserunt, non quam amet libero illum commodi nulla quia impedit, similique corporis quibusdam?</p>
                        </div>
                    </Link>
                </div>
            </section>
            <RemHome/>
            <Footer/>
        </>
    )
}

export default Role