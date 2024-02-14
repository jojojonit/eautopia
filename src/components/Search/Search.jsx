import { SearchOutlined } from "@ant-design/icons";
import { Button, Card, Input } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Search({ products }) {
  const [search, setSearch] = useState("");

  const handleSearch = (value) => {
    setSearch(value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLocaleLowerCase())
  );

  console.log("SEARCH", products);
  return (
    <>
      <h1>Search</h1>
      <Input
        prefix={<SearchOutlined />}
        variant="filled"
        style={{ width: "40em" }}
        placeholder="what are you looking for?"
        onChange={(e) => handleSearch(e.target.value)}
      />

      {filteredProducts.length === 0 ? (
        <p>No results found</p>
      ) : (
        filteredProducts.map((product, index) => (
          <Card
            key={index}
            style={{ marginBottom: "16px" }}
            title={
              <Link to={`/shop/${product._id}`} style={{ color: "inherit" }}>
                {product.name}
              </Link>
            }
          >
            <p>Description: {product.description}</p>
            <p>Category: {product.category_id.name}</p>
            <p>Price: {product.price}</p>
          </Card>
        ))
      )}
    </>
  );
}
