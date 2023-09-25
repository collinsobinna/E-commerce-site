import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";

const Cart = ({ cartItems, setCartItems }) => {
  // const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Fetch cart items from local storage when the component mounts
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  useEffect(() => {
    // Calculate the total price when cart items change
    const totalPrice = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalPrice(totalPrice);
  }, [cartItems]);

  const removeFromCart = (itemId) => {
    // Remove an item from the cart
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const increaseQuantity = (itemId) => {
    // Increase the quantity of an item in the cart
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const decreaseQuantity = (itemId) => {
    // Decrease the quantity of an item in the cart
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const clearCart = () => {
    // Clear all items from the cart
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

  return (
    <section className="cart-container">
      <div className="about-nav">
        <h2>
          <Link to="/E-commerce-site">
            Home <span>/ About</span>
          </Link>
        </h2>
      </div>

      {cartItems.length === 0 ? (
        <div>
          <h1>Your cart is empty.</h1>

          <button className="btn continue">
            <Link to="/products">Fill it</Link>
          </button>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-grid">
              <div className="cart-img">
                <img src={item.image} alt={item.name} />

                <h3>{item.name}</h3>
              </div>

              <h2>${item.price}</h2>

              <div className="cart-btns">
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
              </div>

              <p>Subtotal: ${item.price * item.quantity}</p>

              <button
                onClick={() => removeFromCart(item.id)}
                className="delete"
              >
                <AiFillDelete />
              </button>
            </div>
          ))}

          <hr />

          <button className="btn continue">
            <Link to="/products">Continue Shopping</Link>
          </button>

          <h3>Total Price: ${totalPrice}</h3>

          <button onClick={clearCart} className="btn clear-cart">
            Clear Cart
          </button>

          {/* <Link to="/checkout">Checkout</Link> */}
        </>
      )}
    </section>
  );
};

export default Cart;
