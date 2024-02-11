import { Button } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllProducts } from "../../utilities/product-service";
import { logOut } from "../../utilities/users-service";

export default function AdminPage({ admin, setAdmin, user, setUser }) {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadProducts();
  }, [user]);

  const handleAdd = () => {
    console.log("add new product");
    navigate("/admin/create");
  };

  const loadProducts = async () => {
    try {
      const response = await getAllProducts();
      setProducts(response.products);
      console.log("PRODUCTS fetched successfully", products);
    } catch (error) {
      console.error("Error fetching PRODUCTS:", error);
    }
  };

  const handleLogOut = () => {
    logOut();
    navigate("/");
    setUser(null);
    console.log("Logged out");
  };
  return (
    <>
      <h1>Admin Page</h1>

      {products.map((product) => (
        <>
          <p>{product.name}</p>
          <p>{product.description}</p>
          <p>{product.category_id}</p>
          <p>{product.price}</p>
          <p>{product.stock}</p>
          <hr />
        </>
      ))}

      <Button onClick={handleAdd}>Add new product</Button>
      <Button onClick={handleLogOut}>Log Out</Button>
    </>
  );
}
