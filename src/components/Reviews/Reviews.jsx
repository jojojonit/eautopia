import { Collapse, Dropdown, Space, theme } from "antd";
import ReviewsItem from "./ReviewsItem";
import ReviewForm from "./ReviewForm";
import {
  DownOutlined,
  MinusCircleTwoTone,
  PlusCircleTwoTone,
} from "@ant-design/icons";
import { useState } from "react";
import "./Reviews.css";

export default function Reviews({ review, product, user, loadReviews }) {
  const reviews = review?.reviews || []; // Ensure that review.reviews is an array
  console.log("REVIEW COMPONENT", review.reviews);
  const [sortOrder, setSortOrder] = useState("Most Recent");

  const { token } = theme.useToken();

  const items = [
    {
      label: "Most Recent",
      key: "Most Recent",
    },
    {
      label: "Oldest",
      key: "Oldest",
    },
    {
      label: "Highest to Lowest",
      key: "Highest to Lowest",
    },
    {
      label: "Lowest to Highest",
      key: "Lowest to Highest",
    },
  ];

  const onClick = ({ key }) => {
    console.log("Click on item", key);
    setSortOrder(key);
  };

  const getItems = (panelStyle) => [
    {
      key: "1",
      label: "NOTES",
      children: product.notes.map((note, index) => (
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
      )),

      style: panelStyle,
    },
    {
      key: "2",
      label: "ADD A REVIEW",
      children: (
        <ReviewForm product={product} user={user} loadReviews={loadReviews} />
      ),
      style: panelStyle,
    },
  ];
  const panelStyle = {
    // marginBottom: 24,
    background: "none",
    borderRadius: token.borderRadiusLG,
    border: "none",
    width: "100%",
  };

  const sortedReviews = [...reviews];

  switch (sortOrder) {
    case "Oldest":
      sortedReviews.sort((a, b) => new Date(a.date) - new Date(b.date));
      break;
    case "Highest to Lowest":
      sortedReviews.sort((a, b) => b.rating - a.rating);
      break;
    case "Lowest to Highest":
      sortedReviews.sort((a, b) => a.rating - b.rating);
      break;

    default:
      sortedReviews.sort((a, b) => new Date(b.date) - new Date(a.date));
      break;
  }

  return (
    <>
      <div className="more-details">
        <Collapse
          items={getItems(panelStyle)}
          bordered={false}
          expandIcon={({ isActive }) =>
            isActive ? (
              <MinusCircleTwoTone twoToneColor="#eb2f96" />
            ) : (
              <PlusCircleTwoTone twoToneColor="#eb2f96" />
            )
          }
          style={{ width: "100%" }}
        />
      </div>
      <br />
      <div className="review-container">
        <div className="sort-button">
          <Dropdown
            menu={{
              items,
              onClick,
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                SORT
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
        {sortedReviews.map((item, index) => (
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
      </div>
    </>
  );
}
