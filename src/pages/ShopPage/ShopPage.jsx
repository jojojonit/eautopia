import { Button } from "antd";
import ShopItem from "../../components/Shop/ShopItem";
import { useState } from "react";

export default function ShopPage({
  products,
  setProducts,
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

  // const handleCategoryChange = (category) => {
  //   console.log("CATEGORY", category);
  // };

  return (
    <>
      <h1>Shop</h1>

      <div>
        <Button onClick={() => handleCategoryChange(null)}>
          All Categories
        </Button>
        {productCategory.map((category, index) => (
          <Button key={index} onClick={() => handleCategoryChange(category)}>
            {category.name}
          </Button>
        ))}
      </div>
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
    </>
  );
}
