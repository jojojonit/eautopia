import { Button } from "antd";
import CartItem from "./CartItem";
import { Link, useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { checkout } from "../../utilities/order-service";
import LoginForm from "../LoginForm/LoginForm";

export default function Cart({ cart, user, setUser, loadCart, onClose }) {
  const navigate = useNavigate();

  // const cartItems = cart.orders
  //   ? cart.orders.flatMap((order) => order.items || []) // Flattening items from each order
  //   : [];

  // const subtotal = cartItems.reduce((acc, item) => {
  //   return acc + item.quantity * item.price;
  // }, 0);
  // console.log("CART ITEMS", cartItems);
  const cartItems = (cart && cart.order && cart.order.items) || [];

  console.log("CART CHECKOUT", cartItems);
  const subtotal = cartItems.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);

  const handleCheckOut = async () => {
    const stripe = await loadStripe(
      "pk_test_51OjHKnGYuvtojAdweu3LmIkjNOOBKQfaFtbVpp3xcimvd2dmMpTpdzTsB6i8XHJGI3yNQEITv3EoBJZRax7CEfJH009Q2kx0S3"
    );
    const body = {
      products: cartItems,
    };

    const response = await checkout(body);
    // onClose();
    // navigate("/checkout");
  };
  return (
    <>
      <h1>Cart</h1>

      {user ? (
        <>
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <CartItem
                key={index}
                id={item._id}
                quantity={item.quantity}
                price={item.price}
                name={item.product_id.name}
                img={item.product_id.img}
                loadCart={loadCart}
              />
            ))
          ) : (
            <p>Nothing yet, start shopping!</p>
          )}

          <b>subtotal: ${subtotal}</b>
          <br />
          <br />

          <Button onClick={handleCheckOut}>Continue To Checkout</Button>
        </>
      ) : (
        <>
          <p>Please login or create an account with us to start shopping!</p>
          <LoginForm setUser={setUser} />
        </>
      )}
    </>
  );
}
