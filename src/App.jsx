import React, { useState, useEffect } from 'react';
import './App.css';
import './components/Cart.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Products from './components/Products';
import Home from './components/Home';
import { SearchBar } from './components/SearchBar';
import { SearchResultsList } from './components/SearchResultsList';
import { House } from 'react-bootstrap-icons';
import { Cart } from 'react-bootstrap-icons';
import ShoppingCart from './components/Cart';


function App() {
  const [cart, setCart] = useState([]);
  const [results, setResults] = useState([]);

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
              <h1 id='nav-style'><House id='house-icon' />Home</h1>
            </Link>
            <Link to="/Products">
              <h1 id='nav-style'><Cart id='house-icon' />Explore Products</h1>
            </Link>
            <div>
            </div>

            <div className='search-bar-container'>
              <SearchBar setResults={setResults} />
              <SearchResultsList results={results} />
            </div>

          </div>
          <Routes>
          <Route path="/Products" element={<Products cart={cart} setCart={setCart} />} />
            <Route path="/" element={<Home />} />
            <Route path="/Cart" element={< ShoppingCart  cart={cart} setCart={setCart}/>} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;