'use client' //Client directive(ONCLICK EVEENT)
import React from 'react'

const AddToCart = () => {
  return (
    <div  >
      <button className='btn btn-secondary' onClick={()=>console.log('Click')}>Add to Cart</button>
    </div>
  )
}

export default AddToCart
