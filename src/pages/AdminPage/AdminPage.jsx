import { Button, Card, InputNumber, Skeleton } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  addNotes,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "../../utilities/product-service";
import { logOut } from "../../utilities/users-service";
import { DeleteTwoTone, EditTwoTone, SettingOutlined } from "@ant-design/icons";
import NotesForm from "../../components/Products/NotesForm";
const { Meta } = Card;

export default function AdminPage({
  admin,
  setAdmin,
  user,
  setUser,
  products,
  setProducts,
  loadProducts,
  loading,
}) {
  console.log("ADMIN PAGE PRODUCTS", products);
  const [open, setOpen] = useState(false);
  const [storedId, setStoredId] = useState(null);
  const navigate = useNavigate();

  const onCreate = async (values) => {
    console.log("Received values of form: ", storedId, values);
    const notes = await addNotes(storedId, values);
    setOpen(false);
    loadProducts();
  };

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

  const handleAddNotes = (id) => {
    setOpen(true);
    setStoredId(id);
  };

  // const loadProducts = async () => {
  //   try {
  //     const response = await getAllProducts();
  //     setProducts(response.products);
  //     setLoading(false);
  //     console.log("PRODUCTS fetched successfully", products);
  //   } catch (error) {
  //     console.error("Error fetching PRODUCTS:", error);
  //   }
  // };

  const handlePriceChange = async (id, value) => {
    console.log("price clicked", id, value);

    try {
      const response = await updateProduct(id, { price: value });
      loadProducts();
      console.log("updated successfully", id);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUnitChange = async (id, value) => {
    console.log("unit clicked", id, value);

    try {
      const response = await updateProduct(id, { stock: value });
      loadProducts();
      console.log("updated successfully", id);
    } catch (error) {
      console.log(error);
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
          id={`${product._id}`}
          loading={loading}
          actions={[
            <SettingOutlined key="setting" />,
            <EditTwoTone
              twoToneColor="#eb2f96"
              key="edit"
              onClick={() => handleAddNotes(product._id)}
            />,
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
          <img src={product.img} alt={product} style={{ maxWidth: "50%" }} />
          <p>Description: {product.description}</p>
          {product.notes.map((note, index) => (
            <div key={index}>
              <p>Head: {note.head}</p>
              <p>Heart: {note.heart}</p>
              <p>Base: {note.base}</p>
            </div>
          ))}
          <p>Category: {product.category_id.name}</p>
          {/* Price section with editable InputNumber */}
          <p>
            Price:{" "}
            <InputNumber
              defaultValue={product.price}
              onChange={(value) => handlePriceChange(product._id, value)}
            />
          </p>

          <p>
            Units:{" "}
            <InputNumber
              defaultValue={product.stock}
              onChange={(value) => handleUnitChange(product._id, value)}
            />
          </p>
        </Card>
      ))}

      <Button onClick={handleAdd}>Add new product</Button>
      <Button onClick={handleLogOut}>Log Out</Button>

      <NotesForm
        open={open}
        onCreate={onCreate}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
}
