import sendRequest from "./send-request";
const BASE_URL = "/api/order";
import { loadStripe } from "@stripe/stripe-js";

export async function getCart() {
  const res = await fetch(BASE_URL, {
    headers: { "Content-Type": "application/json" },
  });
  if (res.ok) {
    return res.json();
  } else {
    return res;
  }
}

export async function guestAddToCart(orderItem) {
  const res = await fetch(BASE_URL + "/guestaddtocart", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(orderItem),
  });
  console.log("Response from backend:", res);
  if (res.ok) {
    console.log("PRODUCT GUEST added successfully");
    return res.json();
  } else {
    console.log("Error in adding address");
    throw new Error("Invalid (addAddress)");
  }
}

export async function viewCart() {
  const res = await sendRequest(BASE_URL + "/viewcart", "GET");
  if (res.ok) {
    console.log("Addresses fetched successfully");
    return res.json();
  } else {
    console.log("Error in fetching addresses");
    throw new Error("Invalid (getAddresses)");
  }
}

export async function viewComplete() {
  const res = await sendRequest(BASE_URL + "/viewcomplete", "GET");
  if (res.ok) {
    console.log("Past Orders fetched successfully");
    return res.json();
  } else {
    console.log("Error in fetching addresses");
    throw new Error("Invalid (viewComplete)");
  }
}

export async function addToCart(orderItem) {
  try {
    const res = await sendRequest(BASE_URL + "/addtocart", "POST", orderItem);
    if (res.ok) {
      return res.json();
    } else {
      return res;
    }
  } catch (error) {
    console.error("Error ADDING TO CART:", error);
    return null;
  }
}

export async function updateCart(id, newQuantity) {
  try {
    const res = await sendRequest(
      BASE_URL + "/updatecart",
      "PATCH",
      id,
      newQuantity
    );
    if (res.ok) {
      return res.json();
    } else {
      return res;
    }
  } catch (error) {
    console.error("Error ADDING TO CART:", error);
    return null;
  }
}

export async function deleteCartItem(id) {
  try {
    const res = await sendRequest(BASE_URL + "/deletecartitem", "DELETE", id);
    if (res.ok) {
      return res.json();
    } else {
      return res;
    }
  } catch (error) {
    console.error("Error DELETING CART ITEM:", error);
    return null;
  }
}

export async function checkout(body) {
  const stripe = await loadStripe(
    "pk_test_51OjHKnGYuvtojAdweu3LmIkjNOOBKQfaFtbVpp3xcimvd2dmMpTpdzTsB6i8XHJGI3yNQEITv3EoBJZRax7CEfJH009Q2kx0S3"
  );
  try {
    const res = await sendRequest(BASE_URL + "/checkout", "POST", body);
    const session = await res.json();
    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });
    if (result.error) {
      console.log(result.error);
    }
  } catch (error) {
    console.error("Error CHECKOUT:", error);
    return null;
  }
}
