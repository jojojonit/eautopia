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
