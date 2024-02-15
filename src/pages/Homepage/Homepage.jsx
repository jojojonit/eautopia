import { Button } from "antd";
import { Link } from "react-router-dom";

import { Breadcrumb, Layout, Menu, theme } from "antd";
const { Header, Content, Footer } = Layout;

export default function Homepage({ user, setUser }) {
  // const {
  //   token: { colorBgContainer, borderRadiusLG },
  // } = theme.useToken();

  return (
    <Layout>
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <h1>EAUTOPIA</h1>
      </Content>
    </Layout>
  );
}
