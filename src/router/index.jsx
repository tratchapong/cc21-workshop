import { createBrowserRouter, Outlet } from 'react-router'
import Layout from '../components/Layout'
import Home from '../components/Home'
import Landing from '../components/Landing'
import axios from 'axios'
import ProductDetail from '../components/ProductDetail'


const fetchProduct = () => {
  return axios.get('https://fakestoreapi.com/products')
  .then(response => response.data)
}
const fetchProductId = ({params}) => {
  return axios.get(`https://fakestoreapi.com/products/${params.id}`)
  .then(response => response.data)
}

const router = createBrowserRouter([
  { path: '/', element: <Landing /> },
  {
    path: '/home', element: <Layout />,
    children: [
      { index: true, element: <Home />, loader : fetchProduct }
    ]
  },
  {
    path: '/product/:id', element: <Layout />,
    children: [
      { index: true, element: <ProductDetail />, loader : fetchProductId }
    ]
  },
], { basename: "/cc21-workshop/" })

export default router