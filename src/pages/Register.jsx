import { Link } from "react-router-dom";
import AuthenticationForm from "../components/AuthenticationForm";

function Register() {
  return (
    <>
      <AuthenticationForm
        title="Create an account"
        description="Register to get started with Shoplyn."
        fields={[
          { name: "name", label: "Full name", type: "text", autoComplete: "name" },
          { name: "email", label: "Email address", type: "email", autoComplete: "email" },
          { name: "password", label: "Password", type: "password", autoComplete: "new-password", minLength: 8 },
        ]}
        submitLabel="Create account"
        confirmation="Account registration is not connected yet. No account was created."
        footer={
          <>
            Already have an account?{" "}
            <Link to="/login" className="text-blue-300 hover:underline">
              Sign in
            </Link>
          </>
        }
      />
    </>
  );
}

export default Register;