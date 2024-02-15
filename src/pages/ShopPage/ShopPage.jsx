import ShopItem from "../../components/Shop/ShopItem";

export default function ShopPage({
  products,
  setProducts,
  showDrawer,
  loadCart,
  handleAddToCart,
}) {
  console.log("SHOP", products);

  return (
    <>
      <h1>Shop</h1>
      {products.map((product, index) => (
        <ShopItem
          key={index}
          id={product._id}
          img={product.img}
          name={product.name}
          description={product.description}
          category={product.category}
          price={product.price}
          showDrawer={showDrawer}
          loadCart={loadCart}
          handleAddToCart={(event) => handleAddToCart(event, product)}
        />
      ))}
    </>
  );
}
