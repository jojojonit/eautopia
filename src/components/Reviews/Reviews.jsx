import ReviewsItem from "./ReviewsItem";

export default function Reviews({ review }) {
  const reviews = review.reviews;
  console.log("REVIEW COMPONENT", review.reviews);
  return (
    <>
      <h2>Reviews</h2>

      {reviews.map((item, index) => (
        <ReviewsItem
          key={index}
          id={item._id}
          title={item.title}
          body={item.body}
          date={item.date}
          rating={item.rating}
          user={item.user_id.name}
        />
      ))}
    </>
  );
}
