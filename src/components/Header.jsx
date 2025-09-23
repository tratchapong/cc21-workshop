import React from 'react'
import CartCount from './CartCount'

function Header() {
  return (
    <div className='h-1/12 flex justify-between items-center px-4'>
      <div className='h-4/5 flex items-end gap-2'>
        <img className='h-full'
         src="https://www.svgrepo.com/show/490951/shop.svg" alt="Shop" />
         <h3 className='text-xl font-bold text-amber-700'>CC21 Shop</h3>
      </div>
      <CartCount />
    </div>
  )
}

export default Header