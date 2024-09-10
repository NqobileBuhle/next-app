// import Image from 'next/image'
import Link from 'next/link'
'use Client';
import ProductCard from './Components/ProductCard'


export default function Home() {
  return (
    <main>
       <h1 className='text-pink-500 bg-purple-900'>Nqobile's First NEXT.JS!</h1>
     <Link href ='/Users'>USERS</Link>
       
       <ProductCard/>
    </main>
  )
}
