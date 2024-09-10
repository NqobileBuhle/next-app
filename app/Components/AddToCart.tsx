'use client' //Client directive(ONCLICK EVEENT)
import React from 'react'

const AddToCart = () => {
  return (
    <div className='bg-pink-500 '>
      <button onClick={()=>console.log('Click')}>Add to Cart</button>
    </div>
  )
}

export default AddToCart
