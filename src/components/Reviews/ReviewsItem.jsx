export default function ReviewsItem({ id, title, body, date, rating, user }) {
  return (
    <>
      <h3>{title}</h3>
      <i>
        {date}, {user}
      </i>
      <br />
      <b>{rating}</b>
      <p>{body}</p>
    </>
  );
}
