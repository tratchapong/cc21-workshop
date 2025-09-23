import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'

function ProductList(props) {
  const {addToCart, selId, removeItem} = props
  const [products, setProducts] = useState([])
  const fetchProduct = () => {
    axios.get('https://fakestoreapi.com/products')
    .then(response => {
      console.log(response.data)
      setProducts(response.data)
    })
  }
  useEffect(()=>{
    fetchProduct()
  }, [])
  return (
    <div className='bg-amber-300 w-2/3 max-md:w-full flex items-start gap-4 p-4 ps-8 flex-wrap overflow-auto'>
      {/* <pre>{JSON.stringify(products[0],null,2)}</pre> */}
      { products.map(el=>(
        <ProductCard key={el.id} product={el} addToCart={addToCart} 
        selected={selId.includes(el.id)} removeItem={removeItem}/>
      )) }
    </div>
  )
}

export default ProductList