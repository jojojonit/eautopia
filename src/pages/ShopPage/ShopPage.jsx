import ShopItem from "../../components/Shop/ShopItem";

export default function ShopPage({ products, setProducts }) {
  console.log("SHOP", products);

  return (
    <>
      <h1>Shop</h1>
      {products.map((product, index) => (
        <ShopItem
          key={index}
          id={product._id}
          name={product.name}
          description={product.description}
          category={product.category}
          price={product.price}
        />
      ))}
    </>
  );
}
