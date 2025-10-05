import ProductCard from './ProductCard'
import { useLoaderData, useNavigate } from 'react-router'

function ProductList(props) {
  const {addToCart, selId, removeItem} = props
  const navigate = useNavigate()
  const products = useLoaderData()

  if(navigate.state === 'loading') {
    return <h1 className='text-3xl text-info'>Loading...</h1>
  }

  return (
    <div className='bg-amber-300 w-2/3 max-md:w-full flex items-start gap-4 p-4 ps-8 flex-wrap overflow-auto'>
      { products.map(el=>(
        <ProductCard key={el.id} product={el} addToCart={addToCart} 
        selected={selId.includes(el.id)} removeItem={removeItem}/>
      )) }
    </div>
  )
}

export default ProductList