import { Button, Form, Input } from "antd";
import { signUp } from "../../utilities/users-service";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUpForm({ setUser }) {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    console.log("Signup values:", values);

    const dataObject = {
      name: values.name,
      email: values.email,
      password: values.password,
    };

    setData(dataObject);
    const user = await signUp(dataObject);
    setUser(user);
    navigate("/account/user");
  };

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  return (
    <>
      <h1>Sign Up</h1>
      <Form
        {...formItemLayout}
        name="sign up"
        onFinish={handleSubmit}
        style={{ maxWidth: 600 }}
      >
        <Form.Item
          name="name"
          label="Name"
          tooltip="What do you want others to call you?"
          rules={[
            {
              required: true,
              message: "Please input your name",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            { type: "email", message: "Please enter a valid email" },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The new password that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
