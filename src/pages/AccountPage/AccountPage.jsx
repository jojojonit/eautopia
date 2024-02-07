import { Button } from "antd";
import { logOut, getUser } from "../../utilities/users-service";
import { useNavigate } from "react-router-dom";

export default function AccountPage({ user, setUser }) {
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut();
    navigate("/");
    setUser(null);
    console.log("Logged out");
  };
  return (
    <>
      <h2>welcome, {user.name}</h2>

      <Button onClick={handleLogOut}>Log Out</Button>
    </>
  );
}
