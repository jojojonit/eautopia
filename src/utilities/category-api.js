const BASE_URL = "/api/category";
import sendRequest from "./send-request";

export async function getCategories() {
  const res = await fetch(BASE_URL, {
    headers: { "Content-Type": "application/json" },
  });
  if (res.ok) {
    return res.json();
  } else {
    return res;
  }
}

export async function createCategory(categoryData) {
  try {
    const res = await sendRequest(BASE_URL + "/create", "POST", categoryData);
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
