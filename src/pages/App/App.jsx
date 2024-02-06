import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminPage from "../AdminPage/AdminPage";
import Homepage from "../Homepage/Homepage";

function App() {
  return (
    <>
      <h1>eautopia</h1>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </>
  );
}

export default App;
