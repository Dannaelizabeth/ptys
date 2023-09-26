'use client'
import Image from 'next/image';
import { useState } from 'react';
import styles from './page.module.css'

const Product = ({params}) => {
  const [size, setSize] = useState(0);

  const pizza ={
    id:1,
    img:'/images/pizza.png',
    name:'Magical Margherita',
    price:[10.00, 15.05, 20.22],
    desc:'The classic pizza that never disappoints. Fresh tomatoes, high-quality mozzarella, and basil, all on a perfectly baked crust.'
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src ={pizza.img} alt='' fill={true} priority={true}/>
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>
          {pizza.name}
        </h1>
        <span className={styles.price}>${pizza.price[size]}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose this size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={()=>setSize(0)}>
            <Image src='/icons/pizza.svg' fill={true} alt=''  />
            <span className={styles.number}> Small</span>
          </div>
          <div className={styles.size} onClick={()=>setSize(1)}>
          <Image src='/icons/pizza.svg' fill={true} alt='' />
            <span className={styles.number}>Medium </span>
          </div>
          <div className={styles.size} onClick={()=>setSize(2)}>
          <Image src='/icons/pizza.svg' fill={true} alt='' />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3>Choose additional ingredients</h3>
        <div className={styles.ingr}>
          <div className={styles.option}>
            <input 
            type ='checkbox'
            id='double'
            name='double'
            className={styles.checkbox}
            />
            <label htmlFor='double'>Double Ingredients</label>
          </div>
          <div className={styles.option}>
            <input 
            type ='checkbox'
            id='cheese'
            name='cheese'
            className={styles.checkbox}
            />
            <label htmlFor='cheese'>Extra Cheese</label>
          </div>
          <div className={styles.option}>
            <input 
            type ='checkbox'
            id='spicy'
            name='spicy'
            className={styles.checkbox}
            />
            <label htmlFor='spicy'>Spicy Sauce</label>
          </div>
        </div>
        <div className={styles.add}>
          <input type='number' defaultValue={1} 
          className={styles.quantity}/>
          <button className={styles.button}>Add to Cart</button>
        </div>
      </div>

    </div>
  )
}

export default Product