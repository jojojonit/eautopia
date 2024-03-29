import * as usersAPI from "./users-api";

export function getUser() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split(".")[1])).user : null;
}

export function getAdmin() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split(".")[1])).user.role : null;
}

export function getToken() {
  const token = localStorage.getItem("token");
  console.log(token);
  if (!token) {
    return null;
  }
  // Obtain the payload of the token
  const payload = JSON.parse(atob(token.split(".")[1]));
  console.log("get token", payload.user);
  // A JWT's exp is expressed in seconds, not milliseconds, so convert
  if (payload.exp < Date.now() / 1000) {
    // Token has expired - remove it from localStorage
    localStorage.removeItem("token");
    return null;
  }
  return token;
}

export async function signUp(userData) {
  const token = await usersAPI.signUp(userData);
  localStorage.setItem("token", token);
  return getUser();
}

export async function login(userData) {
  const token = await usersAPI.login(userData);
  localStorage.setItem("token", token);
  return getUser();
}

export function logOut() {
  localStorage.removeItem("token");
}

export async function addAddress(userId, addressData) {
  const response = await usersAPI.addAddress(userId, addressData);
  return response;
}

export async function getAddresses(userId) {
  const response = await usersAPI.getAddresses(userId);
  return response;
}

export async function deleteAddress(userId, addressId) {
  const response = await usersAPI.deleteAddress(userId, addressId);
  return response;
}

export async function editAddress(userId, addressId, addressData) {
  const response = await usersAPI.editAddress(userId, addressId, addressData);
  console.log("HERE IS SUCCESS", addressData);
  return response;
}
