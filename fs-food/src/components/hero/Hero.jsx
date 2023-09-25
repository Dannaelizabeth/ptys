"use client"
import { portadas } from '@/app/constants'
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'
import styles from './page.module.css'
const Hero = () => {

  const [index, setIndex] = useState(0);

  const handleArrow = (direction) =>{
    if(direction === 'l'){
      setIndex(index !== 0 ? index-1 : 2)  
    }
    if(direction === 'r'){
      setIndex(index !== 2 ? index+1 : 0)
    }
  }
  return (
    <div className={styles.container}>
      
      <div className={styles.arrowContainer} style={{ left: 0 }} onClick={()=>handleArrow('l')}>
        <Image src='/icons/arrowLeft.svg' alt='icon' fill={true}/>
      </div> 

      <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
        {portadas.map((img,i)=>(
          <div className={styles.imgContainer} key={i}>
          <Image src={img} alt='hgjgh' fill={true}  />
          </div>

        ))}    
        
      </div>
      <div className={styles.arrowContainer}style={{ right: 0 }} onClick={()=>handleArrow('r')}>
        <Image src='/icons/arrowRigth.svg' alt ='icon' fill={true}  />
      </div>
    </div>
  )
}

export default Hero