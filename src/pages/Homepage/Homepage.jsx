import { Button } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Homepage({ user, setUser }) {
  return (
    <>
      <h1>Homepage</h1>

      <Link to="/account/login">
        <Button type="primary">Account</Button>
      </Link>

      <Link to="/account/signup">
        <Button type="primary">signup</Button>
      </Link>
    </>
  );
}
