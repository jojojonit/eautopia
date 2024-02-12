import { Button } from "antd";
import { Link } from "react-router-dom";

import { Breadcrumb, Layout, Menu, theme } from "antd";
const { Header, Content, Footer } = Layout;
const items = [
  { key: "1", label: "Shop" },
  { key: "2", label: "About" },
  {
    key: "3",
    label: "Search",
  },
  { key: "4", label: "Cart" },
];

export default function Homepage({ user, setUser }) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />

        <Link to={user ? "/account/user" : "/account/login"}>
          <Button type="primary">Account</Button>
        </Link>
      </Header>
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        {/* <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <h1>Homepage</h1>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>

    // <>
    //   <h1>Homepage</h1>

    //   <Link to="/account/signup">
    //     <Button type="primary">signup</Button>
    //   </Link>
    // </>
  );
}
