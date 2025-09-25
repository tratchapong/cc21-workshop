import { useOutletContext } from "react-router"
import CartSummary from "./CartSummary"
import ProductList from "./ProductList"

function Home() {
  const {cart, selId, updateQuantity, addToCart, removeItem} = useOutletContext()
  return (
    <>
      <ProductList addToCart={addToCart} selId={selId} removeItem={removeItem} />
      <CartSummary cart={cart} updateQuantity={updateQuantity} />
    </>
  )
}
export default Home

