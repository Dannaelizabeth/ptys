import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import CartIcon from './CartIcon';
import Menu from './Menu'

const Navbar = () => {
  const user = false;
  return (
    <div className='h-12 text-red-oscu p-4 flex items-center justify-between bg-yellow border-b-2 border-b-red-oscu uppercase md:h-24 lg:px-20 xl:px-40'>
     <div className='hidden md:flex gap-4 flex-1'>
       <Link href='/'>Home</Link>
       <Link href='/menu'>Menu</Link>
       <Link href='/'>Contact</Link>
     </div>
      {/* LOGO */}
      <div className='text-xl md:font-bold flex-1 md:text-center'>
        <Link href='/' >FOOD'S</Link>
      </div>
      {/* MENU MOBILE */}
      <div className='md:hidden'>
        <Menu />
      </div>
      {/* Links derecha  */}
      <div className='hidden md:flex gap-4 items-center justify-end flex-1'>
        <div className='md:absolute top-3 r-4 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md'>
          <Image src='/icons/phone.svg' alt='' width={20} height={20} />
          <span className=''>P H O N E</span>
        </div>
        {!user ?(
          <Link href='/login'>Login</Link>
        ):(
          <Link href='/orders'>Orders</Link>
        )}
        <CartIcon />
      </div>

    </div>
  )
}

export default Navbar