import React from 'react'
import CardProduct from '../cardProduct/CardProduct'
import styles from './page.module.css'
const ProductsList = () => {
  return (
    <div className={styles.container}>
       <h1 className={styles.title}>Our Delicious Fast Dishes</h1>
       <p className={styles.desc}>Indulge in the Fast Lane: Experience the Speed and Flavor Fusion with Our Delicious Fast Dishes – Where Every Bite is a Burst of Unbeatable Taste!</p>

        <div className={styles.wrapper}>
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        </div>
    </div>
  )
}

export default ProductsList