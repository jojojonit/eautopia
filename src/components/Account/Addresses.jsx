import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
import { Button, Card } from "antd";
import { useState } from "react";
import { addAddress } from "../../utilities/users-service";
import AddressForm from "./AddressForm";

export default function Addresses({ user, addresses, loadAddresses }) {
  const [open, setOpen] = useState(false);

  const userId = user._id;
  const addressData = addresses.addresses;

  console.log("addresses data", addressData);
  console.log("userid", userId);

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

  const onCreate = async (values) => {
    console.log("Address values: ", values);

    const data = {
      firstName: values.firstName,
      lastName: values.lastName,
      streetAddress: values.streetAddress,
      apartment: values.apartment,
      country: values.country,
      city: values.city,
      postal: values.postal,
      default: values.default,
    };
    const newAddress = await addAddress(userId, data);
    loadAddresses();
    setOpen(false);
  };

  return (
    <>
      <h3>your addresses</h3>

      {addressData.map((address, index) => (
        <Card
          key={index}
          title={`${address.firstName} ${address.lastName || ""}`}
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
        >
          title={`${address.firstName} ${address.lastName || ""}`}
          <p>Street Address: {address.streetAddress}</p>
          <p>Apartment: {address.apartment}</p>
          <p>Country: {address.country || ""}</p>
          <p>City: {address.city}</p>
          <p>Postal Code: {address.postal || ""}</p>
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
