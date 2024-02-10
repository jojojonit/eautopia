import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export default function AdminPage() {
  const navigate = useNavigate();
  const handleAdd = () => {
    console.log("add new product");
    navigate("/admin/create");
  };
  return (
    <>
      <h1>Admin Page</h1>
      <Button onClick={handleAdd}>Add new product</Button>
    </>
  );
}
