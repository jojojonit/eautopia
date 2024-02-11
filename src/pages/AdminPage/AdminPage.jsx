import { Button, Card, Skeleton } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteProduct, getAllProducts } from "../../utilities/product-service";
import { logOut } from "../../utilities/users-service";

import { DeleteTwoTone, EditTwoTone, SettingOutlined } from "@ant-design/icons";

const { Meta } = Card;

export default function AdminPage({ admin, setAdmin, user, setUser }) {
  const [loading, setLoading] = useState(true);
  const [formView, setFormView] = useState(true);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadProducts();
  }, [user]);

  const handleAdd = () => {
    console.log("add new product");
    navigate("/admin/create");
  };

  const handleDelete = async (productId) => {
    try {
      console.log(productId);
      const response = await deleteProduct(productId);
      loadProducts();
      console.log("deleted successfully", productId);
    } catch (error) {
      console.log(error);
    }
  };

  const loadProducts = async () => {
    try {
      const response = await getAllProducts();
      setProducts(response.products);
      setLoading(false);
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

      {products.map((product, index) => (
        <Card
          style={{
            width: "1000px",
            marginTop: 16,
          }}
          key={index}
          productId={`${product._id}`}
          loading={loading}
          actions={[
            <SettingOutlined key="setting" />,
            <EditTwoTone twoToneColor="#eb2f96" key="edit" />,
            <DeleteTwoTone
              twoToneColor="#eb2f96"
              key="delete"
              onClick={() => handleDelete(product._id)}
            />,
          ]}
        >
          <Meta
            // avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />}
            title={`${product.name}`}
            description={`#ID ${product._id}`}
          />

          <p>Description: {product.description}</p>
          <p>Category: {product.category_id}</p>
          <p>Price: {product.price}</p>
          <p>Units: {product.stock}</p>
        </Card>
      ))}

      <Button onClick={handleAdd}>Add new product</Button>
      <Button onClick={handleLogOut}>Log Out</Button>
    </>
  );
}
