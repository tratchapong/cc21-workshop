import React from 'react'

function CartCount(props) {
  const {itemCount} = props
  return (
    <div className='relative'>
      <div className="w-18">
        <img src="https://www.svgrepo.com/show/528107/cart-large-2.svg" alt="cart" />
      </div>
      <div className="text-violet-500 bg-lime-100 w-6 h-6 absolute top-2 right-3
      flex justify-center items-center rounded-full">{itemCount}</div>
    </div>
  )
}

export default CartCount