import { Button } from "antd";
import ShopItem from "../../components/Shop/ShopItem";
import { useState } from "react";
import { Content } from "antd/es/layout/layout";
import "./ShopPage.css";

export default function ShopPage({
  products,
  category,
  showDrawer,
  loadCart,

  handleAddToCart,
}) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category._id);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category_id._id === selectedCategory)
    : products;
  const productCategory = category.category;
  console.log("SHOP", products, productCategory);

  return (
    <>
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <div className="category-container">
          <div className="button-holder">
            <Button
              className="category"
              onClick={() => handleCategoryChange(null)}
            >
              All
            </Button>
            {productCategory.map((category, index) => (
              <Button
                className="category"
                key={index}
                onClick={() => handleCategoryChange(category)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
        <div className="product-container">
          {filteredProducts.map((product, index) => (
            <ShopItem
              key={index}
              id={product._id}
              img={product.img}
              name={product.name}
              description={product.description}
              category={product.category_id}
              price={product.price}
              showDrawer={showDrawer}
              loadCart={loadCart}
              handleAddToCart={(event) => handleAddToCart(event, product)}
            />
          ))}
        </div>
      </Content>
    </>
  );
}
