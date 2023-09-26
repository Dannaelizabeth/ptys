'use client'
import Image from 'next/image'
import React,{useState, useEffect} from 'react'
import styles from './page.module.css'

const Cart = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <table className={styles.table}>
                <thead>
                <tr className={styles.trTitle}>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Extras</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
                </thead>
                <tbody>             
                <tr className={styles.tr}>
                    <td>
                        <div className={styles.imgContainer}>
                                <Image src='/images/pizza.png' fill={true} alt='' style={{objectFit:"cover"}}/>
                          
                        </div>
                    </td>
                    <td>
                        <span className={styles.name}>PIZZA CHESSEE</span>
                    </td>
                    <td>
                        <span className={styles.extras}>picante, tomato, salsa, maiz,salsa, aiz</span>
                    </td>
                    <td>
                       <span className={styles.price}>$20.00</span>
                    </td>
                    <td>
                        <span className={styles.quantity}>2</span>
                    </td>
                    <td>
                        <span className={styles.total}>$40.00</span>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        
        <div className={styles.right}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>CART TOTAL</h2>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Subtotal</b> $40.00
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Discount:</b>$0.00
                </div>
                <div className={styles.totalText} >
                    <b className={styles.totalTextTot}>Total:</b>$40.00
                </div>
                <button className={styles.button}>Aceptar</button>
            </div>

        </div>
        

    </div>
  )
}

export default Cart