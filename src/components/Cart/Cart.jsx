import { Button } from "antd";
import CartItem from "./CartItem";
import { useState } from "react";

export default function Cart({ cart }) {
  //   const [cartItems, setCartItems] = useState(cart.order.items);

  //   const handleQuantityChange = (itemId, newQuantity) => {
  //     const updatedCartItems = cartItems.map((item) =>
  //       item._id === itemId ? { ...item, quantity: newQuantity } : item
  //     );

  //     setCartItems(updatedCartItems);
  //   };

  //   const subtotal = cartItems.reduce((acc, item) => {
  //     return acc + item.quantity * item.price;
  //   }, 0);

  //   console.log("UPDATED CART ITEMS?", cartItems);

  const cartItems = cart.order.items;
  const subtotal = cartItems.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);
  return (
    <>
      <h1>Cart</h1>

      {cartItems.map((item, index) => (
        <CartItem
          key={index}
          id={item._id}
          quantity={item.quantity}
          price={item.price}
          name={item.product_id.name}
          //   onQuantityChange={handleQuantityChange}
        />
      ))}

      <b>subtotal: ${subtotal}</b>
      <br />
      <br />
      <Button>Continue To Checkout</Button>
    </>
  );
}
