import React from "react";
import { Bag } from 'react-bootstrap-icons';
import { Link } from "react-router-dom";

const Shopbtn = ({ cart }) => { 
    
    return (
        <div className='shop-cart'>
            <Link to="/Cart"> 
                <button id="shop-cart-btn" ><h2>Shopping Cart({cart.length})<Bag id="bag-icon" /></h2></button>
            </Link>
        </div>
    );
};

export default Shopbtn;
