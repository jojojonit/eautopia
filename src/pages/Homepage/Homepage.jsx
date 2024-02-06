import { Button } from "antd";
import { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";

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

  const onFinish = (values) => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
    console.log("Received values of form: ", values);
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
