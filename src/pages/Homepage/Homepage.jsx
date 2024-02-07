import { Button } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  return (
    <>
      <h1>Homepage</h1>
      <Link to="/account/login">
        <Button type="primary">Account</Button>
      </Link>
    </>
  );
}
