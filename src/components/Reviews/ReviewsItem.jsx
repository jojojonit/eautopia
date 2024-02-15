import { HeartTwoTone } from "@ant-design/icons";
import { Divider, Empty } from "antd";
import { format } from "date-fns";

export default function ReviewsItem({ id, title, body, date, rating, user }) {
  const renderHearts = (rating) => {
    const hearts = [];

    for (let i = 0; i < rating; i++) {
      hearts.push(<HeartTwoTone key={i} twoToneColor="#eb2f96" />);
    }

    return hearts;
  };

  const formattedDate = format(new Date(date), "dd MMMM yyyy");

  return (
    <>
      <h3>{title}</h3>
      <i>
        {formattedDate}, {user}
      </i>
      <br />
      <b>{renderHearts(rating)}</b>
      <p>{body}</p>
      <Divider style={{ color: "black" }} />
    </>
  );
}
