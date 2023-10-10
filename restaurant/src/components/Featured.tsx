import Image from 'next/image'
import React from 'react'

const Featured = () => {
  return (
    <div className=' overflow-x-scroll '>
      {/* WRAPPER */}
      <div className='w-max flex'>
        {/* ITEM */}
        <div className='w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-yellow transition-all duration-500 '>
          {/* IMAGE CONTAINER */}
          <div className='relative p-4 flex-1 w-full hover:rotate-[60deg] transition-all duration-500 '>
            <Image src='/images/pizza1.png' alt='' fill className='object-contain'/>

          </div>

          {/* TEXTS CONTAINER */}
          <div className='flex flex-col items-center justify-center text-center gap-4'>
            <h1 className='text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl'>pizza</h1>
            <p className='p-4 2xl:p-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti a obcaecati, nemo mollitia doloremque facilis quidem neque, minima impedit magni eaque nostrum veritatis natus id quos, corporis enim debitis non.</p>
          <span className='text-xl font-bold'>$17.55</span>
          <button className='bg-red-oscu p-2 rounded-sm'>Add to Cart</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Featured