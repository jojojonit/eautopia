import { Button, Menu } from "antd";
import { logOut } from "../../utilities/users-service";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DetailsContainer from "../../components/Account/DetailsContainer";

const items = [
  {
    label: "Account",
    key: "account",
  },
  {
    label: "Orders",
    key: "orders",
  },
  {
    label: "Addresses",
    key: "addresses",
  },
];

export default function AccountPage({ user, setUser }) {
  const [current, setCurrent] = useState("account");
  const navigate = useNavigate();
  const userId = user._id;

  const handleLogOut = () => {
    logOut();
    navigate("/");
    setUser(null);
    console.log("Logged out");
  };

  const onClick = (e) => {
    console.log("click", e);
    setCurrent(e.key);
  };
  return (
    <>
      <h2>Hi, {user.name}</h2>
      <Menu
        onClick={onClick}
        style={{ width: 256 }}
        mode="inline"
        items={items}
      />
      <DetailsContainer current={current} user={user} />

      <Button onClick={handleLogOut}>Log Out</Button>
    </>
  );
}
