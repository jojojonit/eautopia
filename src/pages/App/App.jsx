import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminPage from "../AdminPage/AdminPage";
import Homepage from "../Homepage/Homepage";
import TestPage from "../Test/Test";
import AuthPage from "../AuthPage/AuthPage";

function App() {
  return (
    <>
      <h1>eautopia</h1>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/account/login" element={<AuthPage />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </>
  );
}

export default App;
