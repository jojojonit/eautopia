import { useEffect, useState } from "react";
import Account from "./Account";
import Addresses from "./Addresses";
import Orders from "./Orders";
import { getAddresses } from "../../utilities/users-service";

export default function DetailsContainer({ current, user }) {
  const [addresses, setAddresses] = useState([]);

  const userId = user._id;

  useEffect(() => {
    loadAddresses();
  }, [userId]);

  const loadAddresses = async () => {
    try {
      const response = await getAddresses(userId);
      setAddresses(response);
    } catch (error) {
      console.error("Error fetching addresses:", error);
    }
  };

  const detailsComponents = {
    account: <Account user={user} />,
    orders: <Orders user={user} />,
    addresses: (
      <Addresses
        user={user}
        addresses={addresses}
        loadAddresses={loadAddresses}
      />
    ),
  };

  return (
    <>
      <h2> {current} details</h2>
      {detailsComponents[current]}
    </>
  );
}
