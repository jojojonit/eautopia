// This is the base path of the Express route we'll define
const BASE_URL = "/api/user";

export async function signUp(userData) {
  console.log("Request data:", userData);

  const res = await fetch(BASE_URL + "/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  console.log("Response from backend:", res);
  if (res.ok) {
    console.log("Return JSON");
    return res.json();
  } else {
    console.log("Error in signup");
    throw new Error("Invalid Sign Up");
  }
}
