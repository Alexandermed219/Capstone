import React from "react";
import { Bag } from 'react-bootstrap-icons';
import { Link } from "react-router-dom";

const Shopbtn = ({ cart }) => { 
    const totalQuantity = cart.reduce((total, product) => total + product.quantity, 0);


    return (
        <div className='shop-cart'>
            <Link to="/Cart"> 
                <button id="shop-cart-btn" ><h2>Shopping Cart({totalQuantity})<Bag id="bag-icon" /></h2></button>
            </Link>
        </div>
    );
};

export default Shopbtn;
