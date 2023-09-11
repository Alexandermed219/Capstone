import React, { useState, useEffect } from 'react';
import Shopbtn from './Shopbtn';
import { CartPlus } from 'react-bootstrap-icons';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const saveCartToLocalStorage = (cartItems) => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  };

  const getCartFromLocalStorage = () => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  };

  useEffect(() => {
    const initialCart = getCartFromLocalStorage();
    if (initialCart.length > 0) {
      setCart(initialCart);
    }

    fetch('https://fakestoreapi.com/products?sort=asc')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    saveCartToLocalStorage(updatedCart);
  };

  return (
    <div>
      <div>
        <Shopbtn cart={cart} />
      </div>
      <ul className="listing">
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
            <button
              className="add-to-cart-button"
              onClick={() => addToCart(product)}
            >
              Add to Cart <CartPlus />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
