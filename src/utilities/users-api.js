// This is the base path of the Express route we'll define
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

  const res = await fetch(BASE_URL + "/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  console.log("Response from backend:", res);
  if (res.ok) {
    console.log("Login successful");
    return res.json();
  } else {
    console.log("Error in login");
    throw new Error("Invalid login");
  }
}

export async function addAddress(userId, addressData) {
  const res = await fetch(BASE_URL + `/${userId}/addAddress`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(addressData),
  });
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
  const res = await fetch(BASE_URL + `/${userId}/address`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    // body: JSON.stringify(addressData),
  });
  console.log("Response from backend:", res);
  if (res.ok) {
    console.log("Addresses fetched successfully");
    return res.json();
  } else {
    console.log("Error in fetching addresses");
    throw new Error("Invalid (getAddresses)");
  }
}
