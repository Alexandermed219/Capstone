import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CartPlus } from 'react-bootstrap-icons';
import Shopbtn from './Shopbtn';
import { Link } from 'react-router-dom';
import { ArrowBarLeft } from 'react-bootstrap-icons';

const SingleProduct = ({ cart, setCart }) => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Fetch the product data based on the productId
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
            })
            .catch((error) => console.error('Error fetching product data:', error));
    }, [productId]);

    const addToCart = (product) => {
        const updatedCart = {
            ...product,
            quantity: 1
        }
        setCart([...cart, updatedCart]);
    };

    if (!product) {
        return <div className="listing">Loading...</div>;
    }

    return (
        <div>
            <div>
                <Shopbtn cart={cart} />
            </div>
            <div className="listing">
                <img
                    src={product.image}
                    alt={product.title}
                    style={{ width: '200px', height: 'auto' }}
                />
                <h2>{product.title}</h2>
                <p>Price: ${product.price}</p>
                <p>Description: {product.description}</p>
                <button
                    className="add-to-cart-button"
                    onClick={() => addToCart(product)}>
                    Add to Cart <CartPlus />
                </button>
                <Link to={`/Products`} className='link'>
                    <h3><ArrowBarLeft /> Return to Products Listing</h3>
                </Link>
            </div>
        </div>
    );
};

export default SingleProduct;
