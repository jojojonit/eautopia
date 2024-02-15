import { Button, Layout, Menu } from "antd";
import { logOut } from "../../utilities/users-service";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DetailsContainer from "../../components/Account/DetailsContainer";
import { Content } from "antd/es/layout/layout";
import "./AccountPage.css";

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
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <div className="account-container">
          <div className="side-left">
            <Menu
              onClick={onClick}
              style={{ width: 256, border: "none" }}
              mode="inline"
              items={items}
            />
            <Button className="logout" onClick={handleLogOut}>
              Log Out
            </Button>
          </div>
          <div className="main">
            <h1 className="welcome">Hi, {user.name}</h1>
            <DetailsContainer current={current} user={user} />
          </div>
        </div>
      </Content>
    </>
  );
}
