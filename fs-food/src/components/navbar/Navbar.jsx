import { links } from '@/app/constants'
import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'

// const links = [
 
// ]

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.cookIcon}>
          <Image src='/icons/cook.svg' alt='' width='32' height='32' />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>Rapid Fusion.</div>
          <div className={styles.text}>Eats</div>
        </div>

      </div>

        <div className={styles.item}>
          <ul className={styles.list}>
            {
              links.slice(0,3).map((item,index)=>(
                <li key={index} className={styles.listItem}>{item.title}</li>
              ))}
              <div>
                <Image src='/images/logo1.png' alt='logo icon' width='150' height='100' />
              </div>
              {links.slice(3).map((item,index)=>(
                  <li key={index} className={styles.listItem}>{item.title}</li>
                ))}
          </ul>
        </div>

        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src='/icons/cart.svg' alt='cart icon' width='30' height='30' />
            <div className={styles.counter}>3</div>
          </div>
        </div>
    </div>
  )
}

export default Navbar