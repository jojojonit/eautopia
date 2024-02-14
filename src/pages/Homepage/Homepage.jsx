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
      <Content
        style={{
          padding: "0 48px",
        }}
      >
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
  );
}
