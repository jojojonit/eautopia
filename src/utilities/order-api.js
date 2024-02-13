import sendRequest from "./send-request";
const BASE_URL = "/api/order";

export async function viewCart() {
  const res = await sendRequest(BASE_URL + "/viewcart", "GET");
  if (res.ok) {
    console.log("Addresses fetched successfully");
    return res.json();
  } else {
    console.log("Error in fetching addresses");
    throw new Error("Invalid (getAddresses)");
  }
}

export async function addToCart(orderItem) {
  try {
    const res = await sendRequest(BASE_URL + "/addtocart", "POST", orderItem);
    if (res.ok) {
      return res.json();
    } else {
      return res;
    }
  } catch (error) {
    console.error("Error ADDING TO CART:", error);
    return null;
  }
}

export async function updateCart(id, newQuantity) {
  try {
    const res = await sendRequest(
      BASE_URL + "/updatecart",
      "PATCH",
      id,
      newQuantity
    );
    if (res.ok) {
      return res.json();
    } else {
      return res;
    }
  } catch (error) {
    console.error("Error ADDING TO CART:", error);
    return null;
  }
}
