const BASE_URL = "/api/review";

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
