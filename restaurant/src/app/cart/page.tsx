import Image from 'next/image'
import React from 'react'

const CartPage = () => {
  return (
    <div className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-oscu lg:flex-row'>
      {/* CONTAINER PRODUCT */}
      <div className='h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40 '>
        {/* PRODUCT  */}
        <div className='flex items-center justify-between mb-4'>
          <Image src='/images/p1.png' alt='' width={100} height={100} />
          <div>
            <h1 className='uppercase text-xl font-bold'>Margarita Pizza</h1>
            <span>Large</span>
          </div>
          <h2 className='font-bold'>$20.00</h2>
          <span className='cursor-pointer'>X</span>
        </div>
        <div className='flex items-center justify-between mb-4'>
          <Image src='/images/p1.png' alt='' width={100} height={100} />
          <div>
            <h1 className='uppercase text-xl font-bold'>Margarita Pizza</h1>
            <span>Large</span>
          </div>
          <h2 className='font-bold'>$20.00</h2>
          <span className='cursor-pointer'>X</span>
        </div>
        <div className='flex items-center justify-between mb-4'>
          <Image src='/images/p1.png' alt='' width={100} height={100} />
          <div>
            <h1 className='uppercase text-xl font-bold'>Margarita Pizza</h1>
            <span>Large</span>
          </div>
          <h2 className='font-bold'>$20.00</h2>
          <span className='cursor-pointer'>X</span>
        </div>
        </div>

        {/* CONTAINER PAY */}
        <div className='h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6'>
          <div className='flex justify-between'>
            <span>SubTotal</span>
            <span>$20.00</span>
          </div>
          <div className='flex justify-between'>
            <span>Service Cost</span>
            <span>$0.00</span>
          </div>
          <div className='flex justify-between'>
            <span>Delivery Cost</span>
            <span className='text-yellow'>FREE!</span>
          </div>
          <hr className='my-2' />
          <div className='flex justify-between'>
            <span>TOTAL</span>
            <span className='font-bold'>$20.00</span>
          </div>
          <button className='bg-red-oscu text-white p-3 rounded-md w-1/2 self-end'>CHECKOUT</button>
        </div>
     
    </div>
  )
}

export default CartPage