import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
import { Button, Card } from "antd";
import { useState } from "react";
import AddressForm from "./AddressForm";

export default function Addresses({ user }) {
  const [open, setOpen] = useState(false);
  const addresses = user.address;

  const handleOpen = () => {
    setOpen(true);
    console.log("add new address");
  };

  const handleEdit = () => {
    console.log("edit address");
  };

  const handleDelete = () => {
    console.log("delete address");
  };

  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    setOpen(false);
  };

  return (
    <>
      <h3>your addresses</h3>

      {addresses.map((address) => (
        <Card
          key={address.id}
          style={{
            width: 300,
            border: address.default ? "1px solid #eb2f96" : "1px solid #d9d9d9",
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
      <Button onClick={handleOpen}>Add new address</Button>
      <AddressForm
        open={open}
        onCreate={onCreate}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
}
