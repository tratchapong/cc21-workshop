import React from 'react'
import { useLoaderData, useNavigate } from 'react-router'

function ProductDetail() {
  const product = useLoaderData()
  const navigate = useNavigate()
  return (
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

          <button className="btn btn-primary"
            onClick={() => navigate('/home')}>Back</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail