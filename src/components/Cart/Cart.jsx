import { Button } from "antd";
import CartItem from "./CartItem";

export default function Cart({ cart }) {
  const cartItems = cart.order.items;
  console.log("CART ITEMS BY USER", cartItems[0]);

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
        />
      ))}

      <b>subtotal: ${subtotal}</b>
      <br />
      <br />
      <Button>Continue To Checkout</Button>
    </>
  );
}
