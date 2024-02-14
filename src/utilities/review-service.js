import * as reviewsAPI from "./review-api";

export async function getReviewsByProduct(product_id) {
  const response = await reviewsAPI.getReviewsByProduct(product_id);
  return response;
}

export async function createReview(reviewData) {
  const response = await reviewsAPI.createReview(reviewData);
  return response;
}
