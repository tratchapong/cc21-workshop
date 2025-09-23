import React from 'react'
import CartItem from './CartItem'

function CartSummary(props) {
  const {cart, updateQuantity} = props
  const total = cart.reduce( (a,c) => {
    return a += c.quantity * c.price
  },0 )
  return (
    // <div className='w-1/3 max-md:hidden p-2 text-amber-900 '>
    <div className='w-1/3 p-2 text-amber-900 '>
      <h2 className='text-2xl py-2 text-slate-600 '>Cart Items : </h2>
      {/* <pre>{JSON.stringify(cart, null, 2)}</pre> */}
      {cart.map( el=> (
        <CartItem key={el.id} item={el} updateQuantity={updateQuantity}/>
      ))}
      <div className="divider opacity-50">Total</div>
      <div className="flex justify-between px-1">
        <div className="font-bold">Total</div>
        <p>{(total).toFixed(2)}</p>
      </div>
      <div className="flex justify-between px-1">
        <div className="font-bold">VAT</div>
        <p>{(total * 0.07).toFixed(2)}</p>
      </div>
      <div className="flex justify-between px-1">
        <div className="font-bold">Grand Total</div>
        <p>{(total * 1.07 ).toFixed(2)}</p>
      </div>
    </div>
  )
}

export default CartSummary