import { NavLink } from "react-router-dom";

export default function Navbar({ user }) {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>/<NavLink to="/shop">Shop</NavLink>/
        <NavLink to="/shop">About</NavLink>/
        <NavLink to={user ? "/account/user" : "/account/login"}>
          Account
        </NavLink>
        /<NavLink to="/shop">Cart</NavLink>
      </nav>
    </>
  );
}
