import CartItem from "./CartItem";

export default function Cart({ cart }) {
  console.log("CART ITEMS BY USER", cart);
  return (
    <>
      <h3>cart</h3>
      <CartItem />
    </>
  );
}
