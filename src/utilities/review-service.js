import * as reviewsAPI from "./review-api";

export async function getReviewsByProduct(product_id) {
  const response = await reviewsAPI.getReviewsByProduct(product_id);
  return response;
}
