import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CartIcon = () => {
  return (
    <Link href='/cart' className='flex items-center gap-3'>
        <div className='relative w-8 h-8 md:w-5 md:h-5'>
            <Image src='/icons/cart.svg' alt='' fill/> 
        </div>
        <span>Cart(3)</span>
    </Link>
  )
}

export default CartIcon