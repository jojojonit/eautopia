import { MinusCircleTwoTone, PlusCircleTwoTone } from "@ant-design/icons";
import { useState } from "react";

export default function CartItem({
  key,
  id,
  quantity,
  price,
  name,
  onQuantityChange,
}) {
  //   const [itemQuantity, setItemQuantity] = useState(quantity);

  const handleMinus = () => {
    // if (quantity > 1) {
    //   onQuantityChange(id, quantity - 1);
    // }
  };

  const handlePlus = () => {
    // onQuantityChange(id, quantity + 1);
  };

  const updatedPrice = quantity * price;

  return (
    <>
      <h3>{name}</h3>
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          columnGap: "10px",
        }}
      >
        <MinusCircleTwoTone twoToneColor="#eb2f96" onClick={handleMinus} />
        <p>{quantity}</p>
        <PlusCircleTwoTone twoToneColor="#eb2f96" onClick={handlePlus} />
      </span>
      <p>$ {updatedPrice}</p>
    </>
  );
}
