import React from "react";
import { Bag } from 'react-bootstrap-icons';
import { Routes, Route, Link } from "react-router-dom";

const Shopbtn = ({ cart }) => { // Receive cart as a prop
    return (
        <div>
            <Link to="./Cart">
                <button className='shop-cart'><h2>Shopping Cart <Bag /></h2>
                </button>
            </Link>
            <ul>
                {cart.map((cartItem, index) => (
                    <li key={index}>{cartItem.title}</li>
                ))}
            </ul>
            <Routes>
                <Route path="./Cart" element={<Shopbtn />} />
            </Routes>
        </div>
    );
};

export default Shopbtn;
