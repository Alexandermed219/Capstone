import React from "react";
import { Bag } from 'react-bootstrap-icons';
import { Link } from "react-router-dom";

const Shopbtn = ({ cart }) => { 
    
    return (
        <div>
            <Link to="/Cart"> 
                <button className='shop-cart'><h2>Shopping Cart <Bag id="bag-icon" /></h2></button>
            </Link>
            <ul>
                {cart.map((cartItem, index) => (
                    <li key={index}>{cartItem.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Shopbtn;
