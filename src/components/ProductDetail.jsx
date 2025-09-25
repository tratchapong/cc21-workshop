import React from 'react'
import { useLoaderData, useNavigate, useOutletContext } from 'react-router'
import CartSummary from './CartSummary'

function ProductDetail() {
  const product = useLoaderData()
  const { cart, updateQuantity, addToCart, selId, removeItem } = useOutletContext()
  const selected= selId.includes(product.id)
  const navigate = useNavigate()
  const hdlAddtoCart = e => {
    e.stopPropagation()
    const cartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1
    }
    addToCart(cartItem)
  }
  const removeClick = e => {
    e.stopPropagation()
    removeItem(product.id)
  }
  return (
    <>
      <div className="hero bg-base-200 items-start ps-5 pt-10 ">
        <div className="hero-content">
          <img
            src={product.image}
            className="max-w-[200px] rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-xl font-bold">{product.title}</h1>
            <h3 className="text-lg text-amber-500">{product.category}</h3>
            <p className="py-6">{product.description}</p>
            <h3 className="text-lg text-blue-500">{product.price}THB</h3>
            <div className="flex gap-40 relative">
              <button className="btn btn-primary" onClick={hdlAddtoCart}
                disabled={selected}>{selected ? 'Remove' : 'Add to Cart'}</button>
              {selected && (
                <button onClick={removeClick}
                  className="absolute btn btn-circle btn-xs btn-dash btn-error -top-3 left-18">x</button>
              )}
              <button className="btn btn-active"
                onClick={() => navigate('/home')}>Back</button>
            </div>
          </div>
        </div>
      </div>
      <CartSummary cart={cart} updateQuantity={updateQuantity} />
    </>
  )
}

export default ProductDetail