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


  const login = (newToken) => {
    setToken(newToken);
    // Load the user's cart data when they log in with the same token
    const userCartData = localStorage.getItem(`cart_${newToken}`);
    if (userCartData) {
      setCart(JSON.parse(userCartData));
    }
  };

  return (
    <Router>
      <div id='container'>

        <div className="store-front" >
          <img src="/" alt="" />
          <div className='store'>
            <h1>✮✮✮ BLACK LABEL INDUSTRIES ✮✮✮</h1>
          </div>
          {token && <li><button id='navbar' onClick={logout}>Logout</button></li>}
          <div id='navbar'>

            <div>
            </div>

          </div>
          <Navbar setToken={setToken} token={token} cart={cart} />
          <h1 className='store'> ✮✮✮ WHO WE ARE ✮✮✮</h1>
          <div className='who-we-are' >
            <p className='who-we-are-2'>Welcome to Black Label Industries, your one-stop destination for all things inspired by the vibrant and glamorous culture of Miami!
              Immerse yourself in the tropical paradise of the Magic City with our handpicked selection of fashion, accessories, and lifestyle
              products that capture the essence of Miami's iconic style.Discover the latest trends in
              beachwear, swimwear, and resort fashion that will have you looking fabulous whether you're lounging on South Beach or hitting
              the city's hottest nightclubs. Our curated collection includes chic swimwear, colorful resort wear, and trendy sunglasses that reflect the sun-soaked spirit of Miami.
              Indulge in a shopping experience that radiates Miami's art deco charm and Latin flair. From Art Deco-inspired home decor to authentic Cuban coffee, our store offers a
              slice of Miami's diverse culture. Feel the rhythm of the city with our curated playlist of Miami's hottest beats while you explore our Miami-themed art, posters, and souvenirs.
              At Black Label Industries, we're all about celebrating the city's unique blend of culture, fashion, and energy.
              Whether you're a Miami local or just dreaming of a tropical getaway, come and experience the magic of Miami with us. Get ready to live the Miami dream, wherever you are!
            </p>
          </div>
          <Routes>
            <Route path="/product/:productId">
              <Route path="/product/:productId" element={<SingleProduct cart={cart} setCart={setCart} token={token} />} />
            </Route>
            <Route path="/Products" element={<Products cart={cart} setCart={setCart} token={token} />} />
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