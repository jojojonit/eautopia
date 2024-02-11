import * as productsAPI from "./product-api";

export async function getAllProducts() {
  const response = await productsAPI.getAllProducts();
  return response;
}

export async function createProduct(productData) {
  const response = await productsAPI.createProduct(productData);
  return response;
}