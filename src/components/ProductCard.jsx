import React from 'react'
import { useNavigate } from 'react-router'

function ProductCard(props) {
  const {product, addToCart, selected, removeItem} = props
  const navigate = useNavigate()
  const hdlAddtoCart = e => {
    e.stopPropagation()
    const cartItem = { 
      id : product.id,
      title: product.title,
      price: product.price,
      quantity: 1
     }
    addToCart(cartItem)
  }
  const removeClick = e =>{
    e.stopPropagation()
    removeItem(product.id)
  }
  return (
    <div className="card bg-base-100 w-60 h-[420px] shadow-sm cursor-pointer"
    onClick={()=>navigate(`/product/${product.id}`)}>
      <figure className='p-2 h-1/2 mt-2'>
        <img
          className='w-full h-full object-contain'
          src={product.image}
          alt={product.title} />
      </figure>
      <div className="card-body flex-none gap-5 px-3 py-4">
        <h2 className="card-title text-[16px] line-clamp-1">{product.title}</h2>
        <p className='line-clamp-3 tracking-wide'>{product.description}</p>
        <div className="card-actions justify-end items-end relative">
          <p className='text-red-400 text-lg'>{product.price}THB</p>
          <button className="btn btn-sm btn-primary" onClick={hdlAddtoCart}
           disabled={selected}>{selected ? 'Remove': 'Add to Cart'}</button>
           {selected && (
            <button onClick={removeClick}
            className="absolute btn btn-circle btn-xs btn-dash btn-error -top-3 right-16">x</button>
           )}
        </div>
      </div>
    </div>
  )
}

export default ProductCard