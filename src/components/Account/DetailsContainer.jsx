import { useEffect, useState } from "react";
import Account from "./Account";
import Addresses from "./Addresses";
import Orders from "./Orders";
import { getAddresses } from "../../utilities/users-service";
import { viewComplete } from "../../utilities/order-service";
import "./DetailsContainer.css";

export default function DetailsContainer({ current, user }) {
  const [addresses, setAddresses] = useState([]);
  const [complete, setComplete] = useState([]);

  const userId = user._id;

  useEffect(() => {
    loadAddresses();
    loadPastOrders();
  }, [userId]);

  const loadAddresses = async () => {
    try {
      const response = await getAddresses(userId);
      setAddresses(response);
    } catch (error) {
      console.error("Error fetching addresses:", error);
    }
  };

  const loadPastOrders = async () => {
    try {
      const response = await viewComplete();
      setComplete(response);
      console.log("COMPLETE fetched successfully", complete);
    } catch (error) {
      console.error("Error fetching COMPLETE:", error);
    }
  };

  const detailsComponents = {
    account: <Account user={user} />,
    orders: <Orders user={user} complete={complete} />,
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
      <div className="details">{detailsComponents[current]}</div>
    </>
  );
}
