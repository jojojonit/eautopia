import { Button } from "antd";
import { useParams } from "react-router-dom";
import Reviews from "../../components/Reviews/Reviews";
import { getReviewsByProduct } from "../../utilities/review-service";
import { useEffect, useState } from "react";

export default function SingleProductPage({ user, products, handleAddToCart }) {
  const { id } = useParams();
  const [review, setReview] = useState([]);
  const product = products.find((product) => product._id === id);
  console.log("PRODUCT SINGLE", product);

  useEffect(() => {
    loadReviews();
  }, []);

  const loadReviews = async () => {
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
      <img src={product.img} alt={product} style={{ maxWidth: "50%" }} />
      <p>{product.description}</p>
      {product.notes.map((note, index) => (
        <div key={index}>
          <p>Head: {note.head}</p>
          <p>Heart: {note.heart}</p>
          <p>Base: {note.base}</p>
        </div>
      ))}
      <p>{product.price}</p>

      <Button onClick={(event) => handleAddToCart(event, product)}>
        BUY {product.name}
      </Button>

      <Reviews
        review={review}
        product={product}
        user={user}
        loadReviews={loadReviews}
      />
    </>
  );
}
