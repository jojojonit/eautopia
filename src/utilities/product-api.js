// import { checkAdmin } from "../../config/checkAdmin";

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
    // const isAdmin = await checkAdmin();

    // if (!isAdmin) {
    //   throw new Error("Unauthorized: Only admin users can create products.");
    // }

    const res = await fetch(BASE_URL + "/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    });
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
