import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'
const CardProduct = () => {
  return (
    <div className={styles.container}>
        <Image src='/images/pizza.png' width='250' height='250' />
        <h1 className={styles.title}>Supreme Volcano</h1>
        <span className={styles.price}> $15.99</span>
        <p className={styles.desc}>
        An explosion of flavors. This pizza combines pepperoni, bell peppers, onions, and jalapeños on our special sauce and melted cheese.
        </p>
    </div>
  )
}

export default CardProduct