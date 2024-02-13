import CartItem from "../../components/Cart/CartItem";

export default function CheckoutPage({ cart, loadCart }) {
  const cartItems = cart.order.items;
  console.log("CHECKOUT", cartItems[0]);
  return (
    <>
      <h1>Check Out</h1>
    </>
  );
}
