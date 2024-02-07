import { Button, Checkbox, Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { login } from "../../utilities/users-service";
import { useNavigate } from "react-router-dom";

export default function LoginForm({ setUser }) {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const user = await login(values);
      setUser(user);
      console.log("Received values of form: ", user);
      navigate("/");
    } catch (error) {
      console.log("Unable to login", error);
    }
  };
  return (
    <>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </>
  );
}
