'use client'
import React from 'react'
import Countdown from 'react-countdown'

const date= new Date('2023-10-10')

const Count = () => {
  return (
   <Countdown className='font-bold text-5xl text-yellow' date={date}/>
  )
}

export default Count