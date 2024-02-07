import LoginForm from "../../components/LoginForm/LoginForm";

export default function AuthPage({ setUser }) {
  return (
    <>
      <h2>Auth Page</h2>
      <LoginForm setUser={setUser} />
    </>
  );
}
