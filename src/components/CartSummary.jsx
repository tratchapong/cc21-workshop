import React from 'react'
import CartItem from './CartItem'

function CartSummary() {
  return (
    <div className='w-1/3 max-md:hidden p-2 text-amber-900 '>
      <h2 className='text-2xl py-2 text-slate-600 '>Cart Items : </h2>
      <CartItem />
      <CartItem />
      <CartItem />
      <div className="divider opacity-50">Total</div>
      <div className="flex justify-between px-1">
        <div className="font-bold">Total</div>
        <p>9,999.99</p>
      </div>
      <div className="flex justify-between px-1">
        <div className="font-bold">VAT</div>
        <p>99.99</p>
      </div>
      <div className="flex justify-between px-1">
        <div className="font-bold">Grand Total</div>
        <p>99.99</p>
      </div>
    </div>
  )
}

export default CartSummary