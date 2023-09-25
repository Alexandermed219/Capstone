import React from "react";
import { CartCheck } from "react-bootstrap-icons";

export const ShoppingCart = ({ cart, setCart }) => {
  function removeItem(productId) {
    const updatedCart = cart.filter((product) => product.productId !== productId);
    setCart(updatedCart);
  }

  return (
    <div className="carted">
      <h1>Shopping Cart ({cart.length}) <CartCheck id="cart-icon" /></h1>
      <div>
        <div>
          <ul>
            {cart.map((product) => (
              <li key={product.productId}> {/* Use a unique identifier as the key */}
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ width: '100px', height: 'auto' }}
                />
                <h3>{product.title}</h3>
                <p>Price: ${product.price}</p>
                <p>Quantity: {product.quantity}</p>
                <button onClick={() => removeItem(product.productId)}>Remove Item</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
