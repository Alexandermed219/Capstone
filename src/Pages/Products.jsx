import React, { useState, useEffect } from 'react';
import { Star } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { ArrowBarLeft } from 'react-bootstrap-icons';
import { CartPlus } from 'react-bootstrap-icons';
import Modal from 'react-modal';

const Products = ({ cart, setCart, token }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('asc');
  const [showModal, setShowModal] = useState(false);

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
    if (token) {
      const updatedCart = {
        ...product,
        quantity: 1
      };
      setCart([...cart, updatedCart]);
    } else {
      setShowModal(true);
    }
  };
  const closeModal = () => {
    setShowModal(false);
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
      <div>
        <button className='sort-button' onClick={toggleSortOrder}>
          Sort by {sortOrder === 'asc' ? 'A-Z' : 'Z-A'}
        </button>
      </div>
      <ul className="listing">
        {sortedProducts.map((product) => (
          <li key={product.productId}>
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
            <button className="add-to-cart-button" onClick={() => addToCart(product)}><CartPlus />Add to Cart</button>
            <Link className='link' to={`/product/${product.id}`}>
              <h3 id='click-here'><ArrowRightCircle id='click-arrow' />Click Here for Product Info</h3>
            </Link>
          </li>
        ))}
      </ul>
      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        contentLabel="No Token Modal"
        style={{
          overlay: {
            backgroundColor: 'black',
            opacity: .9
          },
          content: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'black',
            color: 'green',
            height: '700px',
            width: '700px',
            fontSize: '30px',
            fontFamily: 'Courier New, Courier, monospace',
            margin: '0 auto',
            padding: '40px',
            border: '2px solid green'
          },
        }}>
        <div>
          <h2>Please Log in to add Items to your cart. 🛍️ </h2>
          <button id='modal-button' onClick={closeModal}>Close</button>
        </div>
      </Modal>
      <Link to={`/`} className='link2'>
        <h3><ArrowBarLeft /> Return to HomePage</h3>
      </Link>
    </div>
  );
};

export default Products;


