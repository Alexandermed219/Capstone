import React from "react";
import { CartCheck } from "react-bootstrap-icons";

export const ShoppingCart = ({ cart, setCart }) => {
  function removeItem(productId) {
    const updatedCart = cart.filter((product) => product.productId !== productId);
    setCart(updatedCart);
  }

  return (
    <div className="carted">
      {cart.length === 0 ? (
        <h1>Your Cart is Empty <CartCheck id="cart-icon" /></h1>
      ) : (
        <h1>Shopping Cart ({cart.length}) <CartCheck id="cart-icon" /></h1>
      )}
      <div>
        <div>
          {cart.length === 0 ? (
            <h3>Start shopping!</h3>
          ) : (
            <ul>
              {cart.map((product) => (
                <li key={product.productId}>
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
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
