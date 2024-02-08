import Account from "./Account";
import Addresses from "./Addresses";
import Orders from "./Orders";

export default function DetailsContainer({ current, user }) {
  const detailsComponents = {
    account: <Account user={user} />,
    orders: <Orders user={user} />,
    addresses: <Addresses user={user} />,
  };

  return (
    <>
      <h2> {current} details</h2>
      {detailsComponents[current] || null}
    </>
  );
}
