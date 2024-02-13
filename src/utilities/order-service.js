import * as ordersAPI from "./order-api";

export async function viewCart() {
  const response = await ordersAPI.viewCart();
  return response;
}

export async function addToCart(orderItem) {
  const response = await ordersAPI.addToCart(orderItem);
  return response;
}

export async function updateCart(id, newQuantity) {
  const response = await ordersAPI.updateCart(id, newQuantity);
  return response;
}

export async function deleteCartItem(id) {
  const response = await ordersAPI.deleteCartItem(id);
  return response;
}
