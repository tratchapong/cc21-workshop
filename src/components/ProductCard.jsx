import React from 'react'

function ProductCard(props) {
  const {product, addToCart} = props
  return (
    <div className="card bg-base-100 w-60 h-[420px] shadow-sm">
      <figure className='p-2 h-1/2 mt-2'>
        <img
          className='w-full h-full object-contain'
          src={product.image}
          alt={product.title} />
      </figure>
      <div className="card-body flex-none gap-5 px-3 py-4">
        <h2 className="card-title text-[16px] line-clamp-1">{product.title}</h2>
        <p className='line-clamp-3 tracking-wide'>{product.description}</p>
        <div className="card-actions justify-end items-end">
          <p className='text-red-400 text-lg'>{product.price}THB</p>
          <button className="btn btn-sm btn-primary" onClick={addToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard