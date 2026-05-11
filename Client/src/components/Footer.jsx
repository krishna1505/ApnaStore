
import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <footer className='bg-[#0F172A] text-white px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] mt-32'>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 py-14'>

                {/* Brand */}
                <div>
                    <h1 className='text-3xl font-extrabold'>
                        <span className='text-white'>APNA</span>
                        <span className='text-orange-500'>STORE</span>
                    </h1>

                    <p className='text-gray-300 mt-5 leading-7 text-sm'>
                        Your trusted online shopping destination for fashion,
                        electronics, lifestyle, and more.
                    </p>

                    <div className='flex gap-4 mt-6'>
                        <img src={assets.icon_insta} alt="" className='cursor-pointer hover:scale-110 duration-300' />
                        <img src={assets.icon_facebook} alt="" className='cursor-pointer hover:scale-110 duration-300' />
                        <img src={assets.icon_x} alt="" className='cursor-pointer hover:scale-110 duration-300' />
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className='text-xl font-bold mb-5 text-orange-400'>
                        Quick Links
                    </h2>

                    <ul className='space-y-3 text-gray-300'>
                        <li className='hover:text-orange-400 cursor-pointer duration-300'>Help Center</li>
                        <li className='hover:text-orange-400 cursor-pointer duration-300'>About Us</li>
                        <li className='hover:text-orange-400 cursor-pointer duration-300'>Contact Us</li>
                        <li className='hover:text-orange-400 cursor-pointer duration-300'>Privacy Policy</li>
                        <li className='hover:text-orange-400 cursor-pointer duration-300'>FAQs</li>
                    </ul>
                </div>

                {/* Address */}
                <div>
                    <h2 className='text-xl font-bold mb-5 text-orange-400'>
                        Office Address
                    </h2>

                    <div className='space-y-2 text-gray-300 text-sm leading-6'>
                        <p>Saryu Boys Hostel</p>
                        <p>IET Campus</p>
                        <p>Ayodhya, Uttar Pradesh</p>
                        <p>India</p>
                    </div>
                </div>

                {/* Download */}
                <div>
                    <h2 className='text-xl font-bold mb-5 text-orange-400'>
                        Download App
                    </h2>

                    <div className='flex flex-col gap-4'>
                        <img
                            src={assets.icons_play}
                            alt=""
                            className='w-10 cursor-pointer hover:scale-105 duration-300'
                        />

                        <img
                            src={assets.icons_app}
                            alt=""
                            className='w-10 cursor-pointer hover:scale-105 duration-300'
                        />
                    </div>
                </div>

            </div>

            <hr className='border-gray-700' />

            <div className='py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-400'>

                <p>
                    © 2026 APNASTORE. All Rights Reserved.
                </p>

                <p className='text-orange-400 font-semibold'>
                    Shop Smart • Live Better
                </p>

            </div>

        </footer>
    )
}

export default Footer