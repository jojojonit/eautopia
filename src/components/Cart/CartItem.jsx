export default function CartItem({ key, id, quantity, price, name }) {
  return (
    <>
      <h3>{name}</h3>
      <p>{quantity}</p>
      <p>{price}</p>
    </>
  );
}
