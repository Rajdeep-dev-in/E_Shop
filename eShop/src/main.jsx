
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import './index.css'
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
import WiseList from './pages/WiseList.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import AllProducts from './pages/AllProducts.jsx'
import Products from './pages/Products.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import OrderDetails from './pages/OrderDetails.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />}/>
      <Route path='cart' element={<Cart />}/>
      <Route path='wishlist' element={<WiseList />}/>
      <Route path='products' element={<Products />}/>
      <Route path='details/:id' element={<ProductDetails />}/>
      <Route path='products/:id' element={<AllProducts />}/>
      <Route path='login' element={<Login />}/>
      <Route path='register' element={<SignUp />}/>
      <Route path='order' element={<OrderDetails />}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
