import { Content } from "antd/es/layout/layout";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

export default function SignUpPage({ setUser }) {
  return (
    <>
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <SignUpForm setUser={setUser} />
      </Content>
    </>
  );
}
