
import React, { useState, useEffect } from 'react';


const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?sort=asc')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    
    <div>
      <div>
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map((cartItem, index) => (
            <li key={index}>{cartItem.title}</li>
          ))}
        </ul>
      </div>
      <ul className='listing'>
        {products.map((product) => (
          <li key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: '200px', height: 'auto' }}
            />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            {/* Add to Cart button */}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      {/* Cart section */}
      
    </div>
  );
};


export default Products;
