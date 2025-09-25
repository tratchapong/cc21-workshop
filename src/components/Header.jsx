import React from 'react'
import CartCount from './CartCount'
import { useNavigate } from 'react-router'

function Header(props) {
  const {itemCount} = props
  const navigate = useNavigate()
  return (
    <div className='h-1/12 flex justify-between items-center px-4 border-b-3 border-pink-200'>
      <div className='h-4/5 flex items-end gap-2 cursor-pointer'
      onClick={()=>navigate('/')}>
        <img className='h-full'
         src="https://www.svgrepo.com/show/490951/shop.svg" alt="Shop" />
         <h3 className='text-xl font-bold text-amber-700'>CC21 Shop</h3>
      </div>
      <CartCount itemCount={itemCount}/>
    </div>
  )
}

export default Header