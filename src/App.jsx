import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from './components/Products';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ShoppingCart from './components/Cart';
import Signupform from './components/Sign-up';
import LoginForm from './components/Login';
import SingleProduct from './components/SingleProduct';
import CheckoutPage from './components/CheckoutPage';
import AboutUs from './components/AboutUs';
import './App.css';
import './components/Cart.css';

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