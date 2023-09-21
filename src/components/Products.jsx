import React, { useState, useEffect } from 'react';
import Shopbtn from './Shopbtn';
import { SearchBar } from './SearchBar';
import { SearchResultsList } from './SearchResultsList';
import { CartPlus } from 'react-bootstrap-icons';
import { Star } from 'react-bootstrap-icons';



const Products = ({ cart, setCart }) => {
  const [products, setProducts] = useState([]);
  const [results, setResults] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?sort=asc')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        const categories = data.map(product => product.category);
        const specCategory = [...new Set(categories)];
        setCategories(specCategory);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);


  const addToCart = (product) => {
    const updatedCart = {
      ...product,
      quantity: 1
    }
    setCart([...cart, updatedCart]);
  };

  function selectCategory(e) {
    setSelectedCategory(e.target.value);
  }

  let sortedProducts = products;
  if (selectedCategory !== 'all') {
    sortedProducts = products.filter(product => product.category === selectedCategory);
  }
  return (
    <div>
      <div className='cate-list'>
        <select id='cate-drop' onChange={selectCategory} >
          <option value="all">All</option>
          {categories.map(category => (
            <option value={category} key={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className='search-bar-container'>
        <SearchBar setResults={setResults} />
        <SearchResultsList results={results} />
      </div>
      <div>
        <Shopbtn cart={cart} />
      </div>
      <ul className="listing">
        {sortedProducts.map((product) => (
          <li key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: '200px', height: 'auto' }}
            />
            <h3>{product.title}</h3>
            <h3 id='customer-rate'><Star id='star-icon' /> Customer Rating : {product.rating.rate}</h3>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <button
              className="add-to-cart-button"
              onClick={() => addToCart(product)}>
              Add to Cart <CartPlus />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
