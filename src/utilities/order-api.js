import sendRequest from "./send-request";
const BASE_URL = "/api/order";

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
