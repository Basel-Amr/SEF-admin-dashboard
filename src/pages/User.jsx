import { Link } from "react-router-dom";
import PageSection from "../components/PageSection";

function User() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-slate-100">
      <div className="mx-auto max-w-4xl">
        <PageSection
          eyebrow="Account"
          title="Your account"
          description="Sign in to manage your personal information and order history."
        >
          <div className="flex flex-wrap gap-3">
            <Link
              to="/login"
              className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-500"
            >
              Sign in
            </Link>
            <Link to="/register" className="rounded-lg border border-slate-700 px-4 py-2 hover:bg-slate-900">
              Create an account
            </Link>
          </div>
        </PageSection>
      </div>
    </main>
  );
}

export default User;