import { menu } from '@/data'
import Link from 'next/link'
import React from 'react'

const MenuPage = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center bg-black'>
      {
        menu.map ((category)=>(
        <Link href={`/menu/${category.cate}`} key={category.id} className='w-full h-1/3 bg-cover p-8 md:h-1/2 bg-black' style={{backgroundImage:`url(${category.img})`}}>
          <div className='w-1/2 text-white'>
            <h1 className='uppercase font-bold text-3xl'>{category.title}</h1>
            <p className='text-sm my-8'>{category.desc}</p>
            <button className={`py-2 px-4 rounded-md`}>More</button>
          </div>

        </Link>  
        ))
      }
    </div>
  )
}

export default MenuPage