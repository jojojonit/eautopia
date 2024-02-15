import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({
  user,
  getAdmin,
  showDrawer,
  showSearchDrawer,
}) {
  return (
    <>
      <nav
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <div className="nav-left">
          <NavLink to="/" className="link-button">
            Home
          </NavLink>

          <NavLink to="/shop" className="link-button">
            Shop
          </NavLink>
          <NavLink to="/about" className="link-button">
            About
          </NavLink>
        </div>
        <div className="nav-right">
          <NavLink
            to={
              getAdmin() === "admin"
                ? "/admin"
                : user
                ? "/account/user"
                : "/account/login"
            }
            className="link-button"
          >
            Account
          </NavLink>

          <a href="#" onClick={showSearchDrawer} className="link-button">
            Search
          </a>

          {/* <Button> */}
          <a href="#" onClick={showDrawer} className="link-button">
            Cart
          </a>
          {/* </Button> */}
        </div>
      </nav>
    </>
  );
}
