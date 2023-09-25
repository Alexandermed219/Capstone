import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Products from './components/Products';
import Home from './components/Home';
import { House } from 'react-bootstrap-icons';
import { Cart } from 'react-bootstrap-icons';
import ShoppingCart from './components/Cart';
import Signupform from './components/Sign-up';
import LoginForm from './components/Login';
import { PersonCheck } from 'react-bootstrap-icons';
import { PersonPlus } from 'react-bootstrap-icons';
import SingleProduct from './components/SingleProduct';
import './App.css';
import './components/Cart.css'


function App() {
  const [cart, setCart] = useState([]);


  return (
    <Router>
      <div id='container'>

        <div className="store-front" >
          <img src="/" alt="" />
          <div className='store'>
            <h1>✮✮✮ Black Label Industries ✮✮✮</h1>
          </div>
          <div id='navbar'>
            <Link to={"/"}>
              <h1 id='nav-style'><House id='nav-icon' />Home</h1>
            </Link>
            <Link to="/Products">
              <h1 id='nav-style'><Cart id='nav-icon' />Explore Products</h1>
            </Link>
            <Link to="/Login">
              <h1 id='nav-style'><PersonCheck id='nav-icon' />Log In</h1>
            </Link>
            <Link to="/Sign-up">
              <h1 id='nav-style'><PersonPlus id='nav-icon' />Sign Up</h1>
            </Link>
            <div>
            </div>

          </div>
          <Routes>
            <Route path="/product/:productId">
              <Route path="/product/:productId" element={<SingleProduct cart={cart} setCart={setCart} />} />
            </Route>
            <Route path="/Products" element={<Products cart={cart} setCart={setCart} />} />
            <Route path="/" element={<Home />} />
            <Route path="/Cart" element={< ShoppingCart cart={cart} setCart={setCart} Products={Products} />} />
            <Route path="/Login" element={< LoginForm />} />
            <Route path="/Sign-up" element={< Signupform />} />
          </Routes>
        </div>
      </div>
    </Router >
  )
}

export default App;