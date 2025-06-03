import React, { useState, useEffect } from 'react'
import Logo from '../components/Logo'
import { Link } from 'react-router-dom'

const Start = () => {
  const [bgImage, setBgImage] = useState('/bigBG.jpg')

  const handleResize = () => {
    setBgImage(window.innerWidth >= 768 ? '/bigBG.jpg' : '/mobilebG.jpg')
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className='min-h-screen w-full relative bg-cover bg-center bg-no-repeat' 
         style={{
           backgroundImage: `url(${bgImage})`
         }}>
      
      {/* Overlay for better text readability */}
      <div className='absolute inset-0 bg-black/30'></div>

      {/* Content Container */}
      <div className='relative z-10 h-screen flex flex-col justify-between p-8 md:p-8'>
        {/* Logo - Enhanced positioning */}
        <div className='flex justify-center md:justify-start items-center'>
          <div className='transform hover:scale-105 transition-transform duration-300'>
            <Logo />
          </div>
        </div>

        {/* Bottom Content - Premium Card Design */}
        <div className='fixed md:relative bottom-0 left-0 right-0 md:bottom-auto md:left-auto md:right-auto bg-white/95 backdrop-blur-md rounded-none md:rounded-3xl p-6 md:p-8 shadow-2xl md:max-w-sm w-full md:mx-0 transform transition-all duration-300 hover:shadow-3xl'>
          
          {/* Premium Typography */}
          <h2 className='text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 tracking-tight'>
            Get Started with TaxiGo
          </h2>
          
          <Link to={'/user-login'} className='flex items-center justify-center w-full bg-black text-white py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg hover:bg-yellow-500 transition-all duration-100 transform hover:scale-[1.02] hover:text-black active:scale-[0.98] shadow-lg'>
            Continue
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Start