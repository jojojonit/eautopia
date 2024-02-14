import { Collapse, theme } from "antd";
import ReviewsItem from "./ReviewsItem";
import ReviewForm from "./ReviewForm";
import {
  CaretRightOutlined,
  MinusCircleTwoTone,
  PlusCircleTwoTone,
} from "@ant-design/icons";

// const getItems = (panelStyle) => [
//   {
//     key: "1",
//     label: "ADD A REVIEW",
//     children: <ReviewForm product={product} />,
//     // showArrow: false,
//     style: panelStyle,
//   },
// ];

export default function Reviews({ review, product }) {
  const reviews = review?.reviews || []; // Ensure that review.reviews is an array
  console.log("REVIEW COMPONENT", review.reviews);

  const { token } = theme.useToken();

  const getItems = (panelStyle) => [
    {
      key: "1",
      label: "ADD A REVIEW",
      children: <ReviewForm product={product} />,
      // showArrow: false,
      style: panelStyle,
    },
  ];
  const panelStyle = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none",
  };
  return (
    <>
      <h2>Reviews</h2>
      <Collapse
        items={getItems(panelStyle)}
        bordered={false}
        defaultActiveKey={["1"]}
        expandIcon={({ isActive }) =>
          isActive ? (
            <MinusCircleTwoTone twoToneColor="#eb2f96" />
          ) : (
            <PlusCircleTwoTone twoToneColor="#eb2f96" />
          )
        }
      />
      <br />
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
