import { Button } from "antd";
import CartItem from "./CartItem";
import { Link, useNavigate } from "react-router-dom";

export default function Cart({ cart, loadCart, onClose }) {
  const navigate = useNavigate();

  // const cartItems = cart.orders
  //   ? cart.orders.flatMap((order) => order.items || []) // Flattening items from each order
  //   : [];

  // const subtotal = cartItems.reduce((acc, item) => {
  //   return acc + item.quantity * item.price;
  // }, 0);
  // console.log("CART ITEMS", cartItems);
  const cartItems = (cart && cart.order && cart.order.items) || [];
  const subtotal = cartItems.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);

  const navigateCheckOut = () => {
    onClose();
    navigate("/checkout");
  };
  return (
    <>
      <h1>Cart</h1>

      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <CartItem
            key={index}
            id={item._id}
            quantity={item.quantity}
            price={item.price}
            name={item.product_id.name}
            loadCart={loadCart}
          />
        ))
      ) : (
        <p>Nothing yet, start shopping!</p>
      )}

      <b>subtotal: ${subtotal}</b>
      <br />
      <br />

      <Button onClick={navigateCheckOut}>Continue To Checkout</Button>
    </>
  );
}
