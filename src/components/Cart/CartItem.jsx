import {
  CloseCircleTwoTone,
  MinusCircleTwoTone,
  PlusCircleTwoTone,
} from "@ant-design/icons";
import { deleteCartItem, updateCart } from "../../utilities/order-service";
import "./Cart.css";

export default function CartItem({ id, quantity, price, name, img, loadCart }) {
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
      <div className="cart-item">
        <img
          src={img}
          alt={name}
          style={{ maxWidth: "20%", borderRadius: "25px" }}
        />
        <div className="details">
          <div className="name">
            <h3>{name}</h3>
            <h3>$ {updatedPrice}</h3>
          </div>
          <div className="adjust">
            <span className="quantity">
              <MinusCircleTwoTone
                twoToneColor="#eb2f96"
                onClick={handleMinus}
              />
              <p>{quantity}</p>
              <PlusCircleTwoTone twoToneColor="#eb2f96" onClick={handlePlus} />
            </span>

            <CloseCircleTwoTone twoToneColor="#eb2f96" onClick={handleRemove} />
          </div>
        </div>
      </div>
    </>
  );
}
