import { Button } from "antd";
import { useParams } from "react-router-dom";
import Reviews from "../../components/Reviews/Reviews";
import { getReviewsByProduct } from "../../utilities/review-service";
import { useEffect, useState } from "react";

export default function SingleProductPage({ products, handleAddToCart }) {
  const { id } = useParams();
  const [review, setReview] = useState([]);
  const product = products.find((product) => product._id === id);
  console.log("PRODUCT SINGLE", product);

  useEffect(() => {
    loadReview();
  }, []);

  const loadReview = async () => {
    try {
      const response = await getReviewsByProduct(product._id);
      console.log("REVIEWS fetched successfully", response);
      setReview(response);
    } catch (error) {
      console.error("Error fetching REVIEWS:", error);
    }
  };

  return (
    <>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>

      <Button onClick={(event) => handleAddToCart(event, product)}>
        BUY {product.name}
      </Button>

      <Reviews review={review} product={product} />
    </>
  );
}
