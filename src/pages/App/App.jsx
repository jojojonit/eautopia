import { Route, Routes } from "react-router-dom";
import { getAdmin, getUser } from "../../utilities/users-service";
import "./App.css";
import AdminPage from "../AdminPage/AdminPage";
import Homepage from "../Homepage/Homepage";
import SignUpPage from "../SignUpPage/SignUpPage";
import AuthPage from "../AuthPage/AuthPage";
import { useEffect, useState } from "react";
import AccountPage from "../AccountPage/AccountPage";
import CreateProductPage from "../AdminPage/CreateProductPage";
import ShopPage from "../ShopPage/ShopPage";

import { getAllProducts } from "../../utilities/product-service";
import Navbar from "../../components/Navbar/Navbar";
import CartPage from "../CartPage/CartPage";
import { Drawer } from "antd";
import Cart from "../../components/Cart/Cart";

function App() {
  const [user, setUser] = useState(getUser());
  const [admin, setAdmin] = useState(getAdmin());
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  console.log("user check", user);
  console.log("admin check", admin);

  useEffect(() => {
    loadProducts();
  }, [user]);

  const loadProducts = async () => {
    try {
      const response = await getAllProducts();
      setProducts(response.products);
      setLoading(false);
      console.log("PRODUCTS fetched successfully", products);
    } catch (error) {
      console.error("Error fetching PRODUCTS:", error);
    }
  };

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Navbar user={user} showDrawer={showDrawer} onClose={onClose} />
      <Routes>
        <Route path="/" element={<Homepage user={user} setUser={setUser} />} />
        <Route
          path="/shop"
          element={
            <ShopPage
              setUser={setUser}
              products={products}
              setProducts={setProducts}
              loading={loading}
              showDrawer={showDrawer}
            />
          }
        />

        <Route
          path="/cart"
          element={<CartPage user={user} setUser={setUser} />}
        />
      </Routes>
      {user ? (
        <Routes>
          <Route
            path="/admin"
            element={
              <AdminPage
                admin={admin}
                setAdmin={setAdmin}
                user={user}
                setUser={setUser}
                products={products}
                setProducts={setProducts}
                loadProducts={loadProducts}
              />
            }
          />
          <Route
            path="/admin/create"
            element={
              <CreateProductPage
                admin={admin}
                setAdmin={setAdmin}
                loadProducts={loadProducts}
              />
            }
          />

          <Route
            path="/account/user/"
            element={<AccountPage user={user} setUser={setUser} />}
          />
        </Routes>
      ) : (
        <Routes>
          <Route
            path="/account/login"
            element={<AuthPage setUser={setUser} />}
          />
          <Route
            path="/account/signup"
            element={<SignUpPage setUser={setUser} />}
          />
        </Routes>
      )}

      <Drawer width={640} closable={false} onClose={onClose} open={open}>
        <Cart />
      </Drawer>
    </>
  );
}

export default App;
