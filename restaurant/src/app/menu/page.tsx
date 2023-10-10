import { menu } from '@/data'
import Link from 'next/link'
import React from 'react'

const MenuPage = () => {
  return (
    <div>
      {
        menu.map ((category)=>(
        <Link href={`/menu/${category.cate}`} key={category.id} className=''>
          <div>
            <h1>{category.title}</h1>
            <p>{category.desc}</p>
            <button>More</button>
          </div>

        </Link>  
        ))
      }
    </div>
  )
}

export default MenuPage