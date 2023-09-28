import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from './Pages/Products';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import ShoppingCart from './Pages/Cart';
import Signupform from './Pages/Sign-up';
import LoginForm from './Pages/Login';
import SingleProduct from './Pages/SingleProduct';
import CheckoutPage from './Pages/CheckoutPage';
import AboutUs from './Pages/AboutUs';
import './App.css';
import './Cart.css';

function App() {
  const getCartFromLocalStorage = () => {
    const cartData = localStorage.getItem('cart');
    return cartData ? JSON.parse(cartData) : [];
  };

  const [cart, setCart] = useState(getCartFromLocalStorage());
  const [token, setToken] = useState(localStorage.getItem('token'));
  const totalQuantity = cart.reduce((total, product) => total + product.quantity, 0);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  return (
    <Router>
      <div id='container'>

        <div className="store-front" >
          <img src="/" alt="" />
          <div className='store'>
            <h1>✮✮✮ BLACK LABEL INDUSTRIES ✮✮✮</h1>
          </div>
          <Navbar setToken={setToken} token={token} cart={cart} />
          <Routes>
            <Route path="/product/:productId">
              <Route path="/product/:productId" element={<SingleProduct cart={cart} setCart={setCart} token={token} />} />
            </Route>
            <Route path="/Products" element={<Products cart={cart} setCart={setCart} token={token} />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/" element={<Home token={token} setToken={setToken} />} />
            <Route path="/Cart" element={< ShoppingCart cart={cart} setCart={setCart} Products={Products} token={token} setToken={setToken} />} />
            <Route path="/Login" element={< LoginForm token={token} setToken={setToken} cart={cart} setCart={setCart} />} />
            <Route path="/Sign-up" element={< Signupform token={token} setToken={setToken} />} />
            <Route path="/CheckoutPage" element={<CheckoutPage cart={cart} totalQuantity={totalQuantity} />} />
          </Routes>
        </div>
      </div>
    </Router >
  )
}

export default App;