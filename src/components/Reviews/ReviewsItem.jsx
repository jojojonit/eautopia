import { HeartTwoTone } from "@ant-design/icons";

export default function ReviewsItem({ id, title, body, date, rating, user }) {
  const renderHearts = (rating) => {
    const hearts = [];

    for (let i = 0; i < rating; i++) {
      hearts.push(<HeartTwoTone key={i} twoToneColor="#eb2f96" />);
    }

    return hearts;
  };

  return (
    <>
      <h3>{title}</h3>
      <i>
        {date}, {user}
      </i>
      <br />
      <b>{renderHearts(rating)}</b>
      <p>{body}</p>
    </>
  );
}
