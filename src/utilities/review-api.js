const BASE_URL = "/api/review";
import sendRequest from "./send-request";

export async function getReviewsByProduct(product_id) {
  const res = await fetch(BASE_URL + `/${product_id}`, {
    headers: { "Content-Type": "application/json" },
  });
  if (res.ok) {
    return res.json();
  } else {
    return res;
  }
}

export async function createReview(reviewData) {
  try {
    const res = await sendRequest(BASE_URL + "/usercreate", "POST", reviewData);
    if (res.ok) {
      return res.json();
    } else {
      return res;
    }
  } catch (error) {
    console.error("Error creating review:", error);
    return null;
  }
}
