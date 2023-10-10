'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const data= [
  {
    id:1,
    title:'Tasty Burgers: Buy One, Get One Free!',
    image:'/images/hero1.png',
  },
  {
    id:2,
    title:'Delicious Pizzas, Buy One, Get One!',
    image:'/images/hero2.png',
  },
  {
    id:3,
    title:'Grilled Chicken: Irresistible Taste, Unbeatable Value',
    image:'/images/hero3.png',
  },
]
const Slider = () => {
  const [slide, setSlide] = useState(0);

  // useEffect (()=>{
  //   const inter = setInterval(
  //     ()=>
  //     setSlide((prev) => (prev === data.length-1 ? 0 : prev+1)),
  //     4000
  //   );
  //   return()=> clearInterval(inter)
  // })
    return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-black'>
      {/* Container del texto izquierda */}
      <div className='flex-1 flex items-center justify-center flex-col gap-8 text-red-oscu font-bold'>
        <h1 className='text-5xl text-center uppercase p-4 md:p-10 md:text-6xl lg:text-7xl'>
          {data[slide].title}
        </h1>
        <button className='bg-red-oscu text-white py-4 px-8 rounded-[10px]'>Order Now</button>
      </div>
        {/* Container del Image derecha */}
        <div className='w-full flex-1 relative'>
          <Image src={data[slide].image} alt='' fill className='object-cover' />
        </div>
    </div>
  )
}

export default Slider