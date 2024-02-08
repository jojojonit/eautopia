import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
import { Button, Card } from "antd";

export default function Addresses({ user }) {
  const addresses = user.address;

  const handleAdd = () => {
    console.log("add new address");
  };

  const handleEdit = () => {
    console.log("edit address");
  };

  const handleDelete = () => {
    console.log("delete address");
  };
  return (
    <>
      <h3>your addresses</h3>

      {addresses.map((address) => (
        <Card
          key={address.id}
          style={{
            width: 300,
          }}
          actions={[
            <EditTwoTone
              twoToneColor="#eb2f96"
              key="edit"
              onClick={handleEdit}
            />,
            <DeleteTwoTone
              twoToneColor="#eb2f96"
              key="delete"
              onClick={handleDelete}
            />,
          ]}
          title={`${address.firstName} ${address.lastName}`}
        >
          <p>Street Address: {address.streetAddress}</p>
          <p>Apartment: {address.apartment}</p>
          <p>Country: {address.country}</p>
          <p>City: {address.city}</p>
          <p>Postal Code: {address.postal}</p>
        </Card>
      ))}
      <Button onClick={handleAdd}>Add new address</Button>
    </>
  );
}
