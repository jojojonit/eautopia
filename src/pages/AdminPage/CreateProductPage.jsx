import { PlusOutlined } from "@ant-design/icons";
import { Button, Divider, Input, InputNumber, Select, Space } from "antd";
import Form from "antd/es/form/Form";
import TextArea from "antd/es/input/TextArea";
import { useRef, useState } from "react";
import { createProduct } from "../../utilities/product-service";
import { useNavigate } from "react-router-dom";
import {
  createCategory,
  getCategories,
} from "../../utilities/category-service";
import { useEffect } from "react";

export default function CreateProductPage({ loadProducts, user, category }) {
  const navigate = useNavigate();
  const [items, setItems] = useState(["hello"]);
  const [name, setName] = useState("");
  const inputRef = useRef(null);

  const categories = category.category;

  // useEffect(() => {
  //   loadCategories();
  // }, [user]);

  console.log("CATS", categories);

  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const addItem = async (e) => {
    e.preventDefault();
    const data = {
      name: name,
    };
    console.log("CREATE", data);
    const newCategory = await createCategory(data);

    setItems([...items, name || `New item ${index++}`]);
    setName("");
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const onFinish = async (values) => {
    const newProduct = await createProduct(values);
    console.log("Received values of form: ", values);
    loadProducts();
    navigate("/admin");
  };

  return (
    <>
      <h1>Add a New Product</h1>
      <Form name="create_product" layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Product Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input a name for product",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Product Description" name="description">
          <TextArea />
        </Form.Item>

        <Form.Item
          label="Category"
          name="category_id"
          rules={[
            {
              required: true,
              message: "Please select one",
            },
          ]}
        >
          <Select
            placeholder="Product Category"
            dropdownRender={(menu) => (
              <>
                {menu}
                <Divider
                  style={{
                    margin: "8px 0",
                  }}
                />
                <Space
                  style={{
                    padding: "0 8px 4px",
                  }}
                >
                  <Input
                    placeholder="Create New Category"
                    ref={inputRef}
                    value={name}
                    onChange={onNameChange}
                    onKeyDown={(e) => e.stopPropagation()}
                  />
                  <Button type="text" icon={<PlusOutlined />} onClick={addItem}>
                    Add Category
                  </Button>
                </Space>
              </>
            )}
            options={categories.map((item) => ({
              label: item.name,
              value: item._id,
            }))}
          />
        </Form.Item>

        <Form.Item
          label="Price"
          name="price"
          rules={[
            {
              required: true,
              message: "Please input a price for product",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="Stock"
          name="stock"
          rules={[
            {
              required: true,
              message: "Please include available stock for product",
            },
          ]}
        >
          <InputNumber min={10} max={70} />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
      <Button onClick={() => navigate(-1)}>back</Button>
    </>
  );
}
