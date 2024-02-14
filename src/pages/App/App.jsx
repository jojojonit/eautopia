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
import { getCart, viewCart } from "../../utilities/order-service";
import { addToCart } from "../../utilities/order-service";
import SingleProductPage from "../ShopPage/SingleProductPage";
import CheckoutPage from "../CheckoutPage/CheckoutPage";
import Success from "../CheckoutPage/Success";
import Cancel from "../CheckoutPage/Cancel";
import AboutPage from "../AboutPage/AboutPage";

function App() {
  const [user, setUser] = useState(getUser());
  const [admin, setAdmin] = useState(getAdmin());
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  console.log("user check", user);
  console.log("admin check", admin);

  useEffect(() => {
    loadProducts();
    loadCart();
  }, []);

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

  const loadCart = async () => {
    try {
      const response = await viewCart();
      setCart(response);
      console.log("CART fetched successfully", cart);
    } catch (error) {
      console.error("Error fetching CART:", error);
    }
  };

  console.log("CART ON APP", cart);

  const handleAddToCart = async (event, product) => {
    event.stopPropagation(); // Stop the click event from propagating
    const data = {
      product_id: product._id,
      name: product.name,
      quantity: 1,
      price: product.price,
    };
    console.log("to add CART", data);

    const newOrderItem = await addToCart(data);

    loadCart();
    showDrawer();
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
              loadCart={loadCart}
              handleAddToCart={(event, product) =>
                handleAddToCart(event, product)
              }
            />
          }
        />
        <Route
          path="/shop/:id"
          element={
            <SingleProductPage
              products={products}
              user={user}
              handleAddToCart={(event, product) =>
                handleAddToCart(event, product)
              }
            />
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />

        <Route
          path="/checkout"
          element={
            <CheckoutPage
              user={user}
              setUser={setUser}
              cart={cart}
              loadCart={loadCart}
            />
          }
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
        <Cart cart={cart} loadCart={loadCart} onClose={() => setOpen(false)} />
      </Drawer>
    </>
  );
}

export default App;
