import React from 'react'

function CartItem(props) {
  const {item, updateQuantity} = props
  return (
    <div className='flex justify-between items-center p-1 rounded bg-lime-50'>
      <p className='w-[18ch] line-clamp-1'>{item.title}</p>
      <div className="flex ">
        <p className='border w-5 h-5 flex justify-center items-center cursor-pointer'
        onClick={()=>updateQuantity(item.id, -1)}>-</p>
        <p className='border w-5 h-5 flex justify-center items-center cursor-pointer text-white bg-amber-500'>{item.quantity}</p>
        <p className='border w-5 h-5 flex justify-center items-center cursor-pointer'
        onClick={()=>updateQuantity(item.id, +1)}>+</p>
      </div>
      <p>{item.price * item.quantity}</p>
    </div>
  )
}

export default CartItem