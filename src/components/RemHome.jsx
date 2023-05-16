import React from 'react'
import one from '../assets/1.jpeg'
import two from '../assets/2.jpeg'
import three from '../assets/3.jpeg'

export default function RemHome() {
    return (
        <div>

            <section class="features">
                <div class="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
                    <div class="flex flex-col space-y-12 md:w-1/2">
                        <h2 class="max-w-md text-4xl font-bold text-center md:text-left">
                            What's different about Smart Review?
                        </h2>
                        <p class="max-w-sm text-center text-darkGrayishBlue md:text-left">
                            Manage provides all the functionality your team needs,
                            without the
                            complexity. Our software is tailor-made for modern digital product
                            teams.
                        </p>
                    </div>

                    <div class="flex flex-col space-y-8 md:w-1/2">
                        <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                            <div class="rounded-l-full a-colourSupLight md:bg-transparent">
                                <div class="flex items-center space-x-2">
                                    <div class="px-4 py-2 text-white rounded-full md:py-1 a-colour">
                                        01
                                    </div>
                                    <h3 class="text-base font-bold md:mb-4 md:hidden">
                                        Track your research paper status
                                    </h3>
                                </div>
                            </div>

                            <div>
                                <h3 class="hidden mb-4 text-lg font-bold md:block">
                                    Track your research paper status
                                </h3>
                                <p class="text-darkGrayishBlue">
                                    See how your day-to-day tasks fit into the wider vision. Go from tracking progress to the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.
                                </p>
                            </div>
                        </div>

                        <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                            <div class="rounded-l-full a-colourSupLight md:bg-transparent">
                                <div class="flex items-center space-x-2">
                                    <div class="px-4 py-2 text-white rounded-full md:py-1 a-colour">
                                        02
                                    </div>
                                    <h3 class="text-base font-bold md:mb-4 md:hidden">
                                        Track your research paper status
                                    </h3>
                                </div>
                            </div>

                            <div>
                                <h3 class="hidden mb-4 text-lg font-bold md:block">
                                    Track your research paper status
                                </h3>
                                <p class="text-darkGrayishBlue">
                                    See how your day-to-day tasks fit into the wider vision. Go from tracking progress to the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.
                                </p>
                            </div>
                        </div>

                        <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                            <div class="rounded-l-full a-colourSupLight md:bg-transparent">
                                <div class="flex items-center space-x-2">
                                    <div class="px-4 py-2 text-white rounded-full md:py-1 a-colour">
                                        03
                                    </div>
                                    <h3 class="text-base font-bold md:mb-4 md:hidden">
                                        Track your research paper status
                                    </h3>
                                </div>
                            </div>

                            <div>
                                <h3 class="hidden mb-4 text-lg font-bold md:block">
                                    Track your research paper status
                                </h3>
                                <p class="text-darkGrayishBlue">
                                    See how your day-to-day tasks fit into the wider vision. Go from tracking progress to the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="testimonials">
                <div class="max-w-6xl px-5 mx-auto mt-32 text-center">
                    <h2 class="text-4xl font-bold text-center">
                        Our Valueable Reviews
                    </h2>
                    <div class="flex flex-col mt-24 md:flex-row md:space-x-6">
                        <div class="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
                            <img src={one} alt="" class="w-16 -mt-14 img-class" />
                            <h5 class="text-lg font-bold">
                                Bhoom
                            </h5>
                            <p class="text-sm text-darkGrayishBlue">
                                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non mollitia minima at aliquam quidem, repellat commodi, magni nam, repellendus similique vitae delectus nihil?"
                            </p>
                        </div>

                        <div class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
                            <img src={three} alt="" class="w-16 -mt-14 img-class" />
                            <h5 class="text-lg font-bold">
                                Dhoom
                            </h5>
                            <p class="text-sm text-darkGrayishBlue">
                                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non mollitia minima at aliquam quidem, repellat commodi, magni nam, repellendus similique vitae delectus nihil?"
                            </p>
                        </div>

                        <div class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
                            <img src={two} alt="" class="w-16 -mt-14 img-class" />
                            <h5 class="text-lg font-bold">
                                Shoom
                            </h5>
                            <p class="text-sm text-darkGrayishBlue">
                                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non mollitia minima at aliquam quidem, repellat commodi, magni nam, repellendus similique vitae delectus nihil?"
                            </p>
                        </div>

                    </div>
                    <div class="my-16">
                        <a href="#askdn" class="p-3 px-6 pt-2 text-white a-colour rounded-full  hover:a-colourLight">Let's connect.</a>
                    </div>
                </div>
            </section>

            <section class="a-colour" id="CTA">
                <div class="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-8">
                    <h2 class="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
                        Simplify the process of reviews for you paper and organizing conferences.
                    </h2>
                    <div class="my-16">
                        <a href="#mmd" class="p-3 px-6 pt-2 text-brightRed bg-white rounded-full shadow-2xl hover:bg-gray-300">Let's connect.</a>
                    </div>
                </div>
            </section>
        </div>
    )
}


