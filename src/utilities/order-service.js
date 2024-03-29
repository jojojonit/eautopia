import * as ordersAPI from "./order-api";

export async function getCart() {
  const response = await ordersAPI.getCart();
  return response;
}

export async function guestAddToCart(orderItem) {
  const response = await ordersAPI.guestAddToCart(orderItem);
  return response;
}

export async function viewCart() {
  const response = await ordersAPI.viewCart();
  return response;
}

export async function viewComplete() {
  const response = await ordersAPI.viewComplete();
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

export async function checkout(body) {
  const response = await ordersAPI.checkout(body);
  return response;
}
