import React from 'react'

function CartItem(props) {
  const { item, updateQuantity } = props
  return (
    <div className='flex justify-between items-center p-1 mb-2 rounded bg-blue-100'>
      <p className='w-[18ch] line-clamp-1'>{item.title}</p>
      <div className="flex ">
        <button className='border w-5 h-5 flex justify-center items-center '
          onClick={() => updateQuantity(item.id, -1)}>-</button>
        <p className='w-5 h-5 flex justify-center items-center cursor-pointer text-white bg-amber-500'>{item.quantity}</p>
        <button className='border w-5 h-5 flex justify-center items-center'
          onClick={() => updateQuantity(item.id, +1)}>+</button>
      </div>
      <p className='w-[8ch] text-end'>{(item.price * item.quantity).toFixed(2)}</p> </div>)
} 

export default CartItem