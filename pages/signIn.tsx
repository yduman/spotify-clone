import AuthForm from "../components/AuthForm";

const SignIn = () => {
  return <AuthForm mode="signIn" />;
};

SignIn.isAuthPage = true;

export default SignIn;
