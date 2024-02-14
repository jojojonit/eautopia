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

export async function deleteProduct(productId) {
  try {
    const res = await sendRequest(BASE_URL + `/${productId}/delete`, "DELETE");
    if (res.ok) {
      return res.json();
    } else {
      return res;
    }
  } catch (error) {
    console.error("Error deleting product:", error);
    return null;
  }
}

export async function updateProduct(id, productData) {
  try {
    const res = await sendRequest(
      BASE_URL + `/${id}/update`,
      "PATCH",
      productData
    );
    if (res.ok) {
      return res.json();
    } else {
      return res;
    }
  } catch (error) {
    console.error("Error updating product:", error);
    return null;
  }
}

export async function addNotes(id, notesData) {
  try {
    const res = await sendRequest(
      BASE_URL + `/${id}/addnotes`,
      "POST",
      notesData
    );
    if (res.ok) {
      return res.json();
    } else {
      return res;
    }
  } catch (error) {
    console.error("Error adding notes:", error);
    return null;
  }
}
