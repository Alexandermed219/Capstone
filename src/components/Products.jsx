import React, { useState, useEffect } from 'react';
import Shopbtn from './Shopbtn';
import { Star } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { CartPlus } from 'react-bootstrap-icons';


const Products = ({ cart, setCart }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('asc'); // Add sorting state

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

  const toggleSortOrder = () => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newSortOrder);
  };

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

  let sortedProducts = [...products];
  if (selectedCategory !== 'all') {
    sortedProducts = sortedProducts.filter(
      (product) => product.category === selectedCategory
    );
  }
  sortedProducts.sort((a, b) => {
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();
    if (sortOrder === 'asc') {
      return titleA.localeCompare(titleB);
    } else {
      return titleB.localeCompare(titleA);
    }
  });

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
        <div>
          <button className='sort-button' onClick={toggleSortOrder}>
            Sort by {sortOrder === 'asc' ? 'A-Z' : 'Z-A'}
          </button>
        </div>
      </div>
      <div className='search-bar-container'>
      </div>
      <div>
        <Shopbtn cart={cart} />
      </div>
      <ul className="listing">
        {sortedProducts.map((product) => (
          <li key={product.id}>
            <Link className='link' to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.title}
                style={{ width: '200px', height: 'auto' }}
              />
            </Link>
            <h2>{product.title}</h2>
            <h3 id='customer-rate'><Star id='star-icon' /> Customer Rating : {product.rating.rate}</h3>
            <p>Price: ${product.price}</p>
            <button
              className="add-to-cart-button"
              onClick={() => addToCart(product)}>
              Add to Cart <CartPlus />
            </button>
            <Link className='link' to={`/product/${product.id}`}>
              <h3 id='click-here'><ArrowRightCircle id='click-arrow' />Click Here for Product Info</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
