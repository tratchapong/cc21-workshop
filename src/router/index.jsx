import {createBrowserRouter, Outlet} from 'react-router'
import Layout from '../components/Layout'
import Home from '../components/Home'
import Landing from '../components/Landing'


const router = createBrowserRouter([
  { path : '/', element: <Landing />},
  { path : '/home' , element : <Layout />,
    children : [
      {index: true, element : <Home />}
    ]
  },
], { basename : "/cc21-workshop/"})

export default router