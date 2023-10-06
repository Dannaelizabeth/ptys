import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='h-12 md:h-24 p-4 lg:px-20 xl:px-40 text-red-oscu flex items-center justify-between'>
      <Link href='/' className='font-bold text-xl'>FOOD'S</Link>
      <p>All rights Reserved</p>
    </div>
  )
}

export default Footer