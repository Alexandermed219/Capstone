// CheckoutPage.js
import React from "react";

const CheckoutPage = ({ cart, totalQuantity }) => {
    const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

    return (
        <div className="listing">
            <h1>Checkout</h1>
            {cart.map((product) => (
                <div key={product.productId}>
                    <img
                        src={product.image}
                        alt={product.title}
                        style={{ width: '100px', height: 'auto' }}
                    />
                    <h3>{product.title}</h3>
                    <p>Price: ${product.price}</p>
                    <p>Quantity: {product.quantity}</p>
                </div>
            ))}
            <h2>Total Quantity: {totalQuantity}</h2>
            <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
            <footer id="copyright">
                &copy; 2023 Black Label Industries. All Rights Reserved.
            </footer>
        </div>
    );
};

export default CheckoutPage;
