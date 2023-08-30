import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MyPage from './components/MyPage';

function App() {
  const [base, setBase] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?sort=asc')
      .then(res => res.json())
      .then(json => setBase(json))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Router>
      <div id='container'>
        
      <div className="store-front">
          <img src="/" alt="" />
          <div className='store'>
            <h1 id="Heading">Black Label Industries</h1>
          </div>
        <div id='navbar'>
          <Link to="/MyPage">
            <h1 id='nav-style'>Explore Products</h1>
          </Link>
          <Link to={"/"}>
            <h1 id='nav-style'>Home</h1>
          </Link>
        </div>
        <Routes>
          <Route path="/MyPage" element={<MyPage />} />
        </Routes>
      </div>

      <div className="store-front">
        {/* Other content */}
        <ul className='listing'>
          {base.map(product => (
            <li key={product.id}>
              <img src={product.image} alt={product.title} />
              <p>{product.title}</p>
            </li>
          ))}
        </ul>
      </div>
      </div>
    </Router>
  )
}

export default App;
