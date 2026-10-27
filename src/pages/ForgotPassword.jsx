import { Link } from "react-router-dom";
import AuthenticationForm from "../components/AuthenticationForm";

function ForgotPassword() {
  return (
    <>
      <AuthenticationForm
        title="Forgot password"
        description="Enter your email address to request a password reset."
        fields={[
          { name: "email", label: "Email address", type: "email", autoComplete: "email" },
        ]}
        submitLabel="Request reset"
        confirmation="Password recovery is not connected yet. No reset email was sent."
        footer={
          <Link to="/login" className="text-blue-300 hover:underline">
            Back to sign in
          </Link>
        }
      />
    </>
  );
}

export default ForgotPassword;