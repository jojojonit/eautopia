import * as categoryAPI from "./category-api";

export async function getCategories() {
  const response = await categoryAPI.getCategories();
  return response;
}

export async function createCategory(categoryData) {
  const response = await categoryAPI.createCategory(categoryData);
  return response;
}
