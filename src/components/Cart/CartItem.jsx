import {
  CloseCircleTwoTone,
  MinusCircleTwoTone,
  PlusCircleTwoTone,
} from "@ant-design/icons";
import { deleteCartItem, updateCart } from "../../utilities/order-service";

export default function CartItem({ id, quantity, price, name, loadCart }) {
  const handleMinus = async () => {
    const newQuantity = quantity > 1 ? quantity - 1 : quantity;
    const updatedOrderItem = await updateCart({ id, newQuantity });
    console.log("UPDATED SUCCESSFULLY", updatedOrderItem);
    loadCart();
  };

  const handlePlus = async () => {
    const newQuantity = quantity + 1;
    console.log("HANDLE PLUS", newQuantity);
    try {
      const updatedOrderItem = await updateCart({ id, newQuantity });
      console.log("UPDATED SUCCESSFULLY", updatedOrderItem);
    } catch (error) {
      console.error("Error updating order item:", error);
    }
    loadCart();
  };

  const handleRemove = async () => {
    console.log("remove item", id);
    try {
      const removeOrderItem = await deleteCartItem({ id });
      console.log("REMOVED SUCCESSFULLY", removeOrderItem);
    } catch (error) {
      console.error("Error DELETING order item:", error);
    }
    loadCart();
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
      <CloseCircleTwoTone twoToneColor="#eb2f96" onClick={handleRemove} />
      <br />
      <br />
    </>
  );
}
