import React from "react";
import { CartCheck } from "react-bootstrap-icons";

export const ShoppingCart = ({ cart, setCart }) => {
  // Calculate the total quantity in the cart
  const totalQuantity = cart.reduce((total, product) => total + product.quantity, 0);

  function decreaseQuantity(productId) {
    const updatedCart = cart.map((product) => {
      if (product.productId === productId) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
    setCart(updatedCart);
  }

  function increaseQuantity(productId) {
    const updatedCart = cart.map((product) => {
      if (product.productId === productId) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setCart(updatedCart);
  }

  return (
    <div className="carted">
      {cart.length === 0 ? (
        <h1>Your Cart is Empty <CartCheck id="cart-icon" /></h1>
      ) : (
        <h1>Shopping Cart ({totalQuantity}) <CartCheck id="cart-icon" /></h1>
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
                  <button className="quant-btn" onClick={() => decreaseQuantity(product.productId)}>Remove Item</button>
                  <button className="quant-btn" onClick={() => increaseQuantity(product.productId)}>Add Item</button>
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
