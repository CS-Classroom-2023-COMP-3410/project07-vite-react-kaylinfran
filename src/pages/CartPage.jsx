import React from "react";
import ShoppingCart from "../components/ShoppingCart";

function CartPage({ cartItems, removeFromCart, updateCartItem }) {
    return (
        <div>
            <h1>Your Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty. Start adding some products!</p>
            ) : (
            <ShoppingCart 
                items ={cartItems}
                removeFromCart={removeFromCart}
                updateCartItem={updateCartItem}
            />
            )}
        </div>
    );
}

export default CartPage;