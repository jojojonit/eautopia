import { NavLink } from "react-router-dom";

export default function Navbar({ user, showDrawer, onClose }) {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>/<NavLink to="/shop">Shop</NavLink>/
        <NavLink to="/shop">About</NavLink>/
        <NavLink to={user ? "/account/user" : "/account/login"}>
          Account
        </NavLink>
        /
        <a href="#" onClick={showDrawer}>
          Cart
        </a>
      </nav>
    </>
  );
}
