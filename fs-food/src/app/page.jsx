import Hero from '@/components/hero/Hero'
import ProductsList from '@/components/productList/ProductsList'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
   <>
  <Hero />
  <ProductsList />
   </>
  )
}
