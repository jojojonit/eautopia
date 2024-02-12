import { Button } from "antd";
import { useState } from "react";
import { addToCart } from "../../utilities/order-service";

export default function ShopItem({
  id,
  name,
  description,
  category,
  price,
  showDrawer,
  loadCart,
}) {
  const [cart, setCart] = useState([]);
  const handleClick = () => {
    console.log("clicked", id);
  };

  const handleAddToCart = async (event) => {
    event.stopPropagation(); // Stop the click event from propagating
    const data = {
      product_id: id,
      name: name,
      quantity: 1,
      price: price,
    };
    console.log("to add CART", data);
    const newOrderItem = await addToCart(data);
    loadCart();
    showDrawer();
  };
  return (
    <>
      <div onClick={handleClick}>
        <img
          src={
            "https://images.unsplash.com/photo-1599629954205-6488cb69c4c4?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt={name}
          style={{ maxWidth: "100%" }}
        />
        <h3>{name}</h3>
        <p>{description}</p>
        <p>$ {price}</p>
        <Button onClick={handleAddToCart}>BUY {name}</Button>
      </div>
    </>
  );
}
