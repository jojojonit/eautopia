import { Checkbox, Form, Input, Modal } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
export default function LoginForm({
  open,
  onFinish,
  onCancel,
  modalText,
  confirmLoading,
}) {
  const [form] = Form.useForm();
  return (
    <>
      <Modal
        open={open}
        title="Login"
        okText="Login"
        cancelText="Cancel"
        onCancel={onCancel}
        confirmLoading={confirmLoading}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onFinish(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
      >
        <Form
          form={form}
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
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
          <br />
          <Form.Item>
            <a href="">register now!</a>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
