import { useState } from "react"
import CartSummary from "./components/CartSummary"
import Header from "./components/Header"
import ProductList from "./components/ProductList"

// cart = { id, title, quantity, price }
function App() {
  const [cart, setCart] = useState([])
 return (
   <div className="h-screen max-w-7xl bg-pink-300 mx-auto">
    <Header itemCount={cart.length}/>
    <div className="flex bg-amber-100 h-11/12">
      <ProductList />
      <CartSummary />
    </div>

   </div>
 )}
export default App

