import { Button } from "antd";
import { useParams } from "react-router-dom";

export default function SingleProductPage({ products, handleAddToCart }) {
  const { id } = useParams();
  const product = products.find((product) => product._id === id);
  return (
    <>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>

      <Button onClick={(event) => handleAddToCart(event, product)}>
        BUY {product.name}
      </Button>
    </>
  );
}
