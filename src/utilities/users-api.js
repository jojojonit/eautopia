// import { getToken } from "./users-service";
import sendRequest from "./send-request";
const BASE_URL = "/api/user";

export async function signUp(userData) {
  //   console.log("Request data:", userData);

  const res = await fetch(BASE_URL + "/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  //   console.log("Response from backend:", res);
  if (res.ok) {
    return res.json();
  } else {
    console.log("Error in signup");
    throw new Error("Invalid Sign Up");
  }
}

export async function login(userData) {
  console.log("Request login:", userData);
  try {
    const res = await fetch(BASE_URL + "/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    const data = await res.json();
    console.log("Response from backend:", res);
    if (res.ok) {
      console.log("Login successful");
      return data;
    } else {
      console.log("Error in login", data.error);
      throw new Error(data.error);
    }
  } catch (error) {
    console.error("Error during login:", error.message);
    throw new Error("Network error");
  }
}

export async function addAddress(userId, addressData) {
  const res = await sendRequest(
    BASE_URL + `/${userId}/addAddress`,
    "POST",
    addressData
  );
  console.log("Response from backend:", res);
  if (res.ok) {
    console.log("Address added successfully");
    return res.json();
  } else {
    console.log("Error in adding address");
    throw new Error("Invalid (addAddress)");
  }
}

export async function getAddresses(userId) {
  console.log("FETCH ADDRES USERID", userId);
  const res = await sendRequest(BASE_URL + `/${userId}/address`, "GET");
  if (res.ok) {
    console.log("Addresses fetched successfully");
    return res.json();
  } else {
    console.log("Error in fetching addresses");
    throw new Error("Invalid (getAddresses)");
  }
}

export async function deleteAddress(userId, addressId) {
  const res = await sendRequest(
    BASE_URL + `/${userId}/deleteAddress/${addressId}`,
    "DELETE"
  );

  console.log("Response from backend:", res);
  if (res.ok) {
    const data = await res.json();
    console.log("Address DELETED successfully", data);
  } else {
    const errorData = await res.json();
    console.error("Error in DELETING address", errorData);
    throw new Error("Invalid (deleteAddress)");
  }
}

export async function editAddress(userId, addressId, addressData) {
  const res = await sendRequest(
    BASE_URL + `/${userId}/editAddress/${addressId}`,
    "PUT",
    addressData
  );

  console.log("Response from backend:", res);
  if (res.ok) {
    const data = await res.json();
    console.log("Address EDITED successfully", data);
  } else {
    const errorData = await res.json();
    console.error("Error in EDITING address", errorData);
    throw new Error("Invalid (editAddress)");
  }
}
