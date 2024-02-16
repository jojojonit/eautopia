import { HeartFilled } from "@ant-design/icons";
import { Button, Flex, Form, Input, Rate, Space } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import { createReview } from "../../utilities/review-service";
import { Link } from "react-router-dom";

export default function ReviewForm({ user, product, loadReviews }) {
  const [rating, setRating] = useState(3);

  const isUserAvailable = !!user;
  const [componentDisabled, setComponentDisabled] = useState(!isUserAvailable);

  console.log("FINDING PRODUCT", user);

  const onFinish = async (values) => {
    const currentDate = new Date().toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    const reviewData = {
      ...values,
      rating,
      date: currentDate,
      product_id: product._id,
      user_id: user._id,
    };
    console.log("Received values of REVIEW", reviewData);
    try {
      const newReview = await createReview(reviewData);
      console.log("REVIEW created successfully", newReview);
      loadReviews();
    } catch (error) {
      console.error("Error creating review:", error);
    }
  };
  return (
    <>
      {!isUserAvailable && (
        <p>
          Please <Link to="/account/login">login</Link> to leave a review.
        </p>
      )}
      <Form
        name="review-form"
        variant="filled"
        onFinish={onFinish}
        disabled={componentDisabled}
      >
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
    </>
  );
}
