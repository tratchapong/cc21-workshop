import React from 'react'

function CartItem() {
  return (
    <div className='flex justify-between items-center p-1 rounded bg-lime-50'>
      <p>Product Title</p>
      <div className="flex">
        <p className='border w-5 h-5 flex justify-center items-center cursor-pointer'>-</p>
        <p className='border w-5 h-5 flex justify-center items-center cursor-pointer text-white bg-amber-500'>1</p>
        <p className='border w-5 h-5 flex justify-center items-center cursor-pointer'>+</p>
      </div>
      <p>9,999,.99</p>
    </div>
  )
}

export default CartItem