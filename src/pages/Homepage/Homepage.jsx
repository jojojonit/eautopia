import { Button } from "antd";
import { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import { login } from "../../utilities/users-service";

export default function Homepage() {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  const onFinish = async (values) => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
    try {
      const user = await login(values);
      console.log("Received values of form: ", values);
    } catch {
      console.error("Log In Failed - Try Again");
    }
  };
  return (
    <>
      <h1>Homepage</h1>
      <Button type="primary" onClick={handleOpen}>
        Account
      </Button>

      <LoginForm
        open={open}
        onFinish={onFinish}
        onCancel={handleCancel}
        confirmLoading={confirmLoading}
      />
    </>
  );
}
