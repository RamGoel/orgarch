import React from 'react'
import facebook from '../assets/socials/icon-facebook.svg'
import twitter from '../assets/socials/icon-twitter.svg'
import pinterest from '../assets/socials/icon-pinterest.svg'
import youtube from '../assets/socials/icon-youtube.svg'
import instagram from '../assets/socials/icon-instagram.svg'

export default function Footer() {
  return (
    <div>
      <footer class="bg-veryDarkBlue">
    <div class="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        <div class="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
            <div class="mx-auto my-6 text-center text-white md:hidden" >
                Copyright &copy; 2023, All Rights Reserved
            </div>
            <div>
                <h1 class=" footer-logo">Smart Review<span class="logo-name-small"></span></h1> 
                <img src="/img/aaa.jpg" alt="" class="logo-img"/>
            </div>
            <div class="flex justify-center space-x-4">
                <a href="#sdkn">
                    <img src={facebook} alt="" class="h-8"/>
                </a>
                <a href="#sdkn">
                    <img src={instagram} alt="" class="h-8"/>
                </a>
                <a href="#sdkn">
                    <img src={pinterest} alt="" class="h-8"/>
                </a>
                <a href="#sdkn">
                    <img src={youtube} alt="" class="h-8"/>
                </a>
                <a href="#sdkn">
                    <img src={twitter} alt="" class="h-8/"/>
                </a>
            </div>
        </div>
        <div class="flex justify-around space-x-32">
            <div class="flex flex-col space-y-3 text-white">
                <a href="#sdkn" class="hover:text-brightRed">Home</a>
                <a href="#sdkn" class="hover:text-brightRed">Pricing</a>
                <a href="#sdkn" class="hover:text-brightRed">Products</a>
                <a href="#sdkn" class="hover:text-brightRed">About</a>
            </div>
            <div class="flex flex-col space-y-3 text-white">
                <a href="#sdkn" class="hover:text-brightRed">Careers</a>
                <a href="#sdkn" class="hover:text-brightRed">Community</a>
                <a href="#sdkn" class="hover:text-brightRed">Privacy policy</a>
            </div>
        </div>

        <div class="flex flex-col justify-between">
            <form action="">
                <div class="flex space-x-3">
                    <input type="text" class="flex-1 px-4 rounded-full focus:outline-none" placeholder="Updated in your inbox"/>
                    <button class="px-6 py-2 text-white rounded-full a-colour hover:a-colourLight focus:outline-none">
                        Go
                    </button>
                </div>
                
            </form>
            <div class="hidden text-white md:block">
                Copyright &copy; 2023, All Rights Reserved
            </div>
        </div>
    </div>
</footer>
    </div>
  )
}
