import React, { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [base, setBase] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
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
      </div>
      <ul className='listing'>
        {base.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
