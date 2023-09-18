import React from "react";
import { CartCheck } from "react-bootstrap-icons";



export const ShoppingCart = ({ cart }) => {
  return (
    <div className="carted">
      <h1>Shopping Cart ({cart.length}) <CartCheck id="cart-icon" /></h1>
      <div>
        <div>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {/* Render carted item details here */}
              <img
                src={item.image}
                alt={item.title}
                style={{ width: '100px', height: 'auto' }}
              />
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
              
              {/* You can add more item details here */}
            </li>
          ))}
        </ul>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
