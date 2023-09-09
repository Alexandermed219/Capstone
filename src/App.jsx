import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Products from './components/Products';
import Home from './components/Home';
import { SearchBar } from './components/SearchBar';
import { SearchResultsList } from './components/SearchResultsList';

function App() {

  const [results, setResults] = useState([]);

  return (
    <Router>
      <div id='container'>

        <div className="store-front">
          <img src="/" alt="" />
          <div className='store'>
            <h1>Black Label Industries</h1>
          </div>
          <div id='navbar'>
            <Link to={"/"}>
              <h1 id='nav-style'>Home</h1>
            </Link>
            <Link to="/Products">
              <h1 id='nav-style'>Explore Products</h1>
            </Link>
            
            <div className='search-bar-container'>
              <SearchBar setResults={setResults} />
              <SearchResultsList results={results} />
            </div>

          </div>
          <Routes>
            <Route path="/Products" element={<Products />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;
