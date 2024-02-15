import { Card } from "antd";

export default function Orders({ complete }) {
  const completedOrders = complete.order;
  console.log("ORDERS PAGE", completedOrders);

  return (
    <>
      {completedOrders.map((order) => (
        <Card key={order._id} title={`ORDER #ID ${order._id}`}>
          <p>completed: {order.completed ? "Yes" : "No"}</p>
          <p>date: {order.date}</p>
        </Card>
      ))}
    </>
  );
}
