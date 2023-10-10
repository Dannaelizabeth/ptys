import Image from 'next/image'
import React from 'react'
import Count from './Count'

const Oferts = () => {
  return (
    <div className='bg-black h-screen flex flex-col md:flex-row md:justify-between'>
        {/* Container texto */}
        <div className='flex-1 flex flex-col justify-center items-center text-center gap-8 p-6'>
          <h1 className='text-white text-5xl font-bold xl:text-6xl'>
          Irresistible Pizza Combo! Double the Pleasure
          </h1>
          <p className='text-white xl:text-xl'>Two Pizzas at the Price of One, An Offer You Can't Miss!</p>
          <Count />
          <button className='bg-red-oscu text-white rounded-md py-3 px-6'>Order Now</button>
        </div>
        {/* container image */}
        <div className='relative w-full flex-1'>
          <Image src='/images/pizzaOferts.png' alt='' fill  className='object-contain'/>
        </div>
    </div>
  )
}

export default Oferts