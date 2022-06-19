import AuthForm from "../components/AuthForm";

const SignUp = () => {
  return <AuthForm mode="signUp" />;
};

SignUp.isAuthPage = true;

export default SignUp;
