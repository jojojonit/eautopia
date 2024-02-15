import { Card } from "antd";
import "./Orders.css";

export default function Orders({ complete }) {
  const completedOrders = complete.order;
  console.log("ORDERS PAGE", completedOrders);

  return (
    <>
      <div className="head">
        <h5>PAST ORDERS</h5>
      </div>
      <div className="card-container">
        {completedOrders.map((order) => (
          <Card
            className="order-card"
            key={order._id}
            title={`#ID ${order._id}`}
          >
            <p>completed: {order.completed ? "Yes" : "No"}</p>
            <p>date: {order.date}</p>
          </Card>
        ))}
      </div>
    </>
  );
}
