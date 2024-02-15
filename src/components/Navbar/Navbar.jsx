import { NavLink } from "react-router-dom";

export default function Navbar({
  user,
  getAdmin,
  showDrawer,
  showSearchDrawer,
}) {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>/<NavLink to="/shop">Shop</NavLink>/
        <NavLink to="/about">About</NavLink>/
        <NavLink
          to={
            getAdmin() === "admin"
              ? "/admin"
              : user
              ? "/account/user"
              : "/account/login"
          }
        >
          Account
        </NavLink>
        /
        <a href="#" onClick={showSearchDrawer}>
          Search
        </a>
        /
        <a href="#" onClick={showDrawer}>
          Cart
        </a>
      </nav>
    </>
  );
}
