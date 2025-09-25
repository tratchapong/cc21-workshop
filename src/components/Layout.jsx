import React, { useState } from 'react'
import Header from './Header'
import { Outlet } from 'react-router'

function Layout() {
  const [cart, setCart] = useState([])
  const selId = cart.map(el => el.id)

  const updateQuantity = (id, step) => {
    let idx = cart.findIndex(el => id === el.id)
    // alert(idx)    
    const newCart = [...cart]
    newCart[idx].quantity += step
    if (newCart[idx].quantity <= 0) {
      newCart.splice(idx, 1)
    }
    setCart(newCart)
  }
  const addToCart = (cartItem) => {
    // alert(JSON.stringify(cartItem,null,2))
    let idx = cart.findIndex(el => cartItem.id === el.id)
    if (idx === -1) {
      setCart([...cart, cartItem])
    }
  }
  const removeItem = (id) => {
    const newCart = cart.filter(el => el.id !== id)
    setCart(newCart)
  }
  return (
    <div className="h-screen max-w-7xl bg-pink-300 mx-auto">
      <Header itemCount={cart.reduce((a, c) => a + c.quantity, 0)} />
      <div className="flex bg-amber-100 h-11/12">
        <Outlet context={{ cart, selId, updateQuantity, addToCart, removeItem }} />
      </div>
    </div>
  )
}

export default Layout