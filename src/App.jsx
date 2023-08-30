import React, { useState, useEffect } from 'react';
import './App.css'
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
        <div id='navbar'>
          <Link to="/MyPage"><h1>My Page</h1></Link>
        </div>
        <Routes>
          <Route path="/MyPage" element={<MyPage />} />
        </Routes>
      </div>

      <div className="store-front">
        <img src="/" alt="" />
        <div className='store'>
          <h1 id="Heading">Black Label Industries</h1>
        </div>
        <div className='store-2'>
          <h2 id="Heading">Explore Products</h2>

        </div>
        <ul className='listing'>
          {base.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    </Router>
  )
}

export default App