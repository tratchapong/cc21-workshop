import React from 'react'
import CartItem from './CartItem'

function CartSummary() {
  return (
    <div className='max-md:hidden '>
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  )
}

export default CartSummary