import { Route, Routes } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import AdminPage from "../AdminPage/AdminPage";
import Homepage from "../Homepage/Homepage";
import SignUpPage from "../SignUpPage/SignUpPage";
import AuthPage from "../AuthPage/AuthPage";
import { useState } from "react";
import AccountPage from "../AccountPage/AccountPage";

function App() {
  const [user, setUser] = useState(getUser());
  return (
    <>
      <h1>eautopia</h1>
      <Routes>
        <Route path="/" element={<Homepage user={user} setUser={setUser} />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/account/login" element={<AuthPage setUser={setUser} />} />
        <Route
          path="/account/signup"
          element={<SignUpPage setUser={setUser} />}
        />
        <Route
          path="/account/user/"
          element={<AccountPage user={user} setUser={setUser} />}
        />

        <Route path="/test" element={<SignUpPage />} />
      </Routes>
    </>
  );
}

export default App;
