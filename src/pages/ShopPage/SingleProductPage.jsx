import { Button } from "antd";
import { useParams } from "react-router-dom";
import Reviews from "../../components/Reviews/Reviews";
import { getReviewsByProduct } from "../../utilities/review-service";
import { useEffect, useState } from "react";
import { Content } from "antd/es/layout/layout";
import "./SingleProductPage.css";

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
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <div className="product-wrapper">
          <div className="left">
            <img
              src={product.img}
              alt={product}
              style={{ maxWidth: "100%", borderRadius: "25px" }}
            />
          </div>
          <div className="product-details">
            <div className="product-title">
              <h1>{product.name}</h1>
              <p>$ {product.price}</p>
            </div>
            <Button
              onClick={(event) => handleAddToCart(event, product)}
              className="buy"
            >
              BUY {product.name}
            </Button>

            <p>{product.description}</p>
            {/* {product.notes.map((note, index) => (
              <div key={index}>
                <p>
                  <b>HEAD</b> {note.head}
                </p>
                <p>
                  <b>HEART</b> {note.heart}
                </p>
                <p>
                  <b>BASE</b> {note.base}
                </p>
              </div>
            ))} */}

            {/* <Button
              onClick={(event) => handleAddToCart(event, product)}
              className="buy"
            >
              BUY {product.name}
            </Button> */}

            <Reviews
              review={review}
              product={product}
              user={user}
              loadReviews={loadReviews}
            />
          </div>
        </div>
      </Content>
    </>
  );
}
