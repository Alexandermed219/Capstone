import React, { useState, useEffect } from 'react';
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import productpage from './components/Product-page';

function App() {
  const [base, setBase] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?sort=asc')
      .then(res => res.json())
      .then(json => setBase(json))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="store-front">
      <img src="/" alt="" />
      <div className='store'>
        <h1 id="Heading">Black Label Industries</h1>
      </div>
      <div className='store-2'>
        <h2 id="Heading">Explore Products</h2>
        <Router>
          <Switch>
            {/* Define your routes */}
            <Route path="/components/Product-page">
              <MyPage />
            </Route>
            {/* Add more routes as needed */}
          </Switch>
        </Router>
      </div>
      {/* <ul className='listing'>
        {base.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  )
}

export default App
