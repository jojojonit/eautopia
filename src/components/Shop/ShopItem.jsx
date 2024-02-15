import { Button } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ShopItem.css";

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
      <div
        onClick={handleClick}
        className="shop-card"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "100%",
          backgroundPosition: "center",
        }}
      >
        <div className="card-title">
          <h4>{name}</h4>
          <p>$ {price}</p>
        </div>
        {/* <p>{description}</p> */}
        <Button
          onClick={(event) => handleAddToCart(event, { id, name, price })}
          className="buy-button"
        >
          BUY {name}
        </Button>
      </div>
    </>
  );
}
