import { Route, Routes } from "react-router-dom";
import { getAdmin, getUser } from "../../utilities/users-service";
import "./App.css";
import AdminPage from "../AdminPage/AdminPage";
import Homepage from "../Homepage/Homepage";
import SignUpPage from "../SignUpPage/SignUpPage";
import AuthPage from "../AuthPage/AuthPage";
import { useState } from "react";
import AccountPage from "../AccountPage/AccountPage";
import CreateProductPage from "../AdminPage/CreateProductPage";
import ShopPage from "../ShopPage/ShopPage";

function App() {
  const [user, setUser] = useState(getUser());
  const [admin, setAdmin] = useState(getAdmin());

  console.log("user check", user);

  console.log("admin check", admin);
  return (
    <>
      {/* <h1>eautopia</h1> */}

      <Routes>
        <Route path="/" element={<Homepage user={user} setUser={setUser} />} />
      </Routes>
      {user ? (
        <Routes>
          <Route
            path="/admin"
            element={
              <AdminPage
                admin={admin}
                setAdmin={setAdmin}
                user={user}
                setUser={setUser}
              />
            }
          />
          <Route
            path="/admin/create"
            element={<CreateProductPage admin={admin} setAdmin={setAdmin} />}
          />

          <Route
            path="/account/user/"
            element={<AccountPage user={user} setUser={setUser} />}
          />
        </Routes>
      ) : (
        <Routes>
          <Route
            path="/account/login"
            element={<AuthPage setUser={setUser} />}
          />
          <Route
            path="/account/signup"
            element={<SignUpPage setUser={setUser} />}
          />
          <Route path="/shop" element={<ShopPage setUser={setUser} />} />
        </Routes>
      )}
    </>
  );
}

export default App;
