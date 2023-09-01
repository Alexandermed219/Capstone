
import React, { useState, useEffect }  from 'react';


const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?sort=asc')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);


  return (
    <div>
   <ul className='listing'>
   {products.map(product => (
      <li key={product.id}>
        <img src={product.image} alt={product.title} style={{ width: '200px', height: 'auto' }} />
        <h3>{product.title}</h3>
        <p>Price: ${product.price}</p>
        <p>Description: {product.description}</p>
      </li>
    ))}
  </ul>
    </div>
  );
};

export default Products;
