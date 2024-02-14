import { HeartFilled, HeartTwoTone } from "@ant-design/icons";
import { Button, Flex, Form, Input, Rate, Space } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";

export default function ReviewForm({ product }) {
  const [rating, setRating] = useState(3);

  console.log("FINDING PRODUCT");

  const onFinish = (values) => {
    const currentDate = new Date().toLocaleDateString(); // Get current date in local format

    const data = {
      ...values,
      rating,
      date: currentDate,
      product_id: product._id,
    };
    console.log("Received values of REVIEW", data);
  };
  return (
    <Form name="review-form" variant="filled" onFinish={onFinish}>
      <Form.Item label="Title" name="title">
        <Input />
      </Form.Item>

      <Form.Item label="Rate" name="rating">
        <Flex vertical gap="middle">
          <Rate
            character={<HeartFilled />}
            style={{ color: "#eb2f96" }}
            onChange={setRating}
            value={rating}
          />
        </Flex>
      </Form.Item>

      <Form.Item label="Body" name="body">
        <TextArea />
      </Form.Item>

      <Form.Item>
        <Space>
          <Button htmlType="submit">submit</Button>
        </Space>
      </Form.Item>
    </Form>
  );
}
