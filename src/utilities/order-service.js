import * as ordersAPI from "./order-api";

export async function viewCart() {
  const response = await ordersAPI.viewCart();
  return response;
}

export async function addToCart(orderItem) {
  const response = await ordersAPI.addToCart(orderItem);
  return response;
}
