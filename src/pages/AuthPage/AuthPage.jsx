import { Content } from "antd/es/layout/layout";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function AuthPage({ setUser }) {
  return (
    <>
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <h2>Auth Page</h2>
        <LoginForm setUser={setUser} />
      </Content>
    </>
  );
}
