import { createBrowserRouter, Outlet } from 'react-router'
import Layout from '../components/Layout'
import Home from '../components/Home'
import Landing from '../components/Landing'
import axios from 'axios'
import ProductDetail from '../components/ProductDetail'
import LoginForm from '../components/LoginForm'


// const delay = (ms = 1000) => {
//   return new Promise(rs => setTimeout(() => {
//     rs()
//   }, ms))
// }

const fetchProduct = () => {
  return axios.get('https://fakestoreapi.com/products')
    .then(response => response.data)
}
const fetchProductId = ({ params }) => {
  return axios.get(`https://fakestoreapi.com/products/${params.id}`)
    .then(response => response.data)
}

const router = createBrowserRouter([
  { path: '/', element: <Landing /> },
  {
    path: '/home', element: <Layout />,
    children: [
      { index: true, element: <Home />, loader: fetchProduct },
      { path: 'login', element: <LoginForm /> }
    ]
  },
  {
    path: '/product/:id', element: <Layout />,
    children: [
      { index: true, element: <ProductDetail />, loader: fetchProductId }
    ]
  },
], { basename: "/cc21-workshop/" })

export default router