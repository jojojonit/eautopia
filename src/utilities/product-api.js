import sendRequest from "./send-request";
const BASE_URL = "/api/product";

export async function getAllProducts() {
  const res = await fetch(BASE_URL, {
    headers: { "Content-Type": "application/json" },
  });
  if (res.ok) {
    return res.json();
  } else {
    return res;
  }
}

export async function createProduct(productData) {
  try {
    const res = await sendRequest(BASE_URL + "/create", "POST", productData);
    if (res.ok) {
      return res.json();
    } else {
      return res;
    }
  } catch (error) {
    console.error("Error creating product:", error);
    return null;
  }
}
