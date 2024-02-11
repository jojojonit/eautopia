import { PlusOutlined } from "@ant-design/icons";
import { Button, Divider, Input, InputNumber, Select, Space } from "antd";
import Form from "antd/es/form/Form";
import TextArea from "antd/es/input/TextArea";
import { useRef, useState } from "react";
import { createProduct } from "../../utilities/product-service";
import { useNavigate } from "react-router-dom";

export default function CreateProductPage({ admin, setAdmin }) {
  const navigate = useNavigate();
  const [items, setItems] = useState(["65c7a08bfc736911bf949631"]);
  const [name, setName] = useState("");
  const inputRef = useRef(null);
  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const addItem = (e) => {
    e.preventDefault();
    setItems([...items, name || `New item ${index++}`]);
    setName("");
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  console.log("create product:USER", admin);

  const onFinish = async (values) => {
    const data = {
      name: values.name,
      description: values.description,
      category_id: values.category_id,
      price: values.price,
      stock: values.stock,
    };

    const newProduct = await createProduct(data);
    console.log("Received values of form: ", values);
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
            options={items.map((item) => ({
              label: item,
              value: item,
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
