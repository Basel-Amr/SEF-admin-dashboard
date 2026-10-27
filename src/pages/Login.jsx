import { Link } from "react-router-dom";
import AuthenticationForm from "../components/AuthenticationForm";

function Login() {
  return (
    <>
      <AuthenticationForm
        title="Sign in"
        description="Sign in to access your Shoplyn account."
        fields={[
          { name: "email", label: "Email address", type: "email", autoComplete: "email" },
          { name: "password", label: "Password", type: "password", autoComplete: "current-password" },
        ]}
        submitLabel="Sign in"
        confirmation="Authentication is not connected yet. No sign-in request was sent."
        footer={
          <>
            <Link to="/forgot-password" className="text-blue-300 hover:underline">
              Forgot password?
            </Link>
            <span className="mx-3 text-slate-500">·</span>
            <Link to="/register" className="text-blue-300 hover:underline">
              Create an account
            </Link>
          </>
        }
      />
    </>
  );
}

export default Login;