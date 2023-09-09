import React from "react";

const ShoppingCart = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
      {/* Add total and checkout button */}
    </div>
  );
};


export default ShoppingCart