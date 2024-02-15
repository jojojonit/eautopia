import { Button } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ShopItem({
  id,
  img,
  name,
  description,
  category,
  price,
  handleAddToCart,
}) {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/shop/${id}`);
    console.log("clicked", id);
  };

  // const handleAddToCart = async (event) => {
  //   event.stopPropagation(); // Stop the click event from propagating
  //   const data = {
  //     product_id: id,
  //     name: name,
  //     quantity: 1,
  //     price: price,
  //   };
  //   console.log("to add CART", data);
  //   const newOrderItem = await addToCart(data);
  //   loadCart();
  //   showDrawer();
  // };
  return (
    <>
      <div onClick={handleClick}>
        <img src={img} alt={name} style={{ maxWidth: "50%" }} />
        <h3>{name}</h3>
        <p>{description}</p>
        <p>$ {price}</p>
        <Button
          onClick={(event) => handleAddToCart(event, { id, name, price })}
        >
          BUY {name}
        </Button>
      </div>
    </>
  );
}
