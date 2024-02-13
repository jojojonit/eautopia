import { getToken } from "./users-service";

export default async function sendRequest(url, method = "GET", payload = null) {
  // Fetch accepts an options object as the 2nd argument
  // used to include a data payload, set headers, etc.
  const options = { method };
  if (payload) {
    options.headers = { "Content-Type": "application/json" };
    options.body = JSON.stringify(payload);
  }
  const token = getToken();
  if (token) {
    // Ensure the headers object exists
    options.headers = options.headers || {};
    // Add token to an Authorization header
    // Prefacing with 'Bearer' is recommended in the HTTP specification
    options.headers.Authorization = `Bearer ${token}`;
  }

  //? logic to handle guest user

  console.log("Sending request to:", url);
  console.log("Request options:", options);

  try {
    const response = await fetch(url, options);

    console.log("Response status:", response.status);

    if (response.ok) {
      return response;
    } else {
      console.error("Request failed with status:", response.status);
      throw new Error(`Request failed with status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error during fetch:", error);
    throw error;
  }
}
