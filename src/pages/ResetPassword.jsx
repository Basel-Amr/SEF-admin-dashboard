import { Link } from "react-router-dom";
import AuthenticationForm from "../components/AuthenticationForm";

function ResetPassword() {
  return (
    <>
      <AuthenticationForm
        title="Reset password"
        description="Choose a new password for your account."
        fields={[
          { name: "password", label: "New password", type: "password", autoComplete: "new-password", minLength: 8 },
          { name: "confirmPassword", label: "Confirm new password", type: "password", autoComplete: "new-password", minLength: 8 },
        ]}
        submitLabel="Reset password"
        confirmation="Password reset is not connected yet. No password was changed."
        footer={
          <Link to="/login" className="text-blue-300 hover:underline">
            Back to sign in
          </Link>
        }
      />
    </>
  );
}

export default ResetPassword;