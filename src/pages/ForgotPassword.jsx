
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/ForgotPassword.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    setSubmitted(false);

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    // TODO: Connect the password reset API.
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-white sm:px-6">
      <div className="mx-auto flex min-h-[80vh] w-full max-w-md flex-col justify-center">

        {/* NexCart Brand */}
        <Link
          to="/login"
          className="mb-10 flex flex-col items-center"
          aria-label="NexCart - Back to login"
        >
          <img
            src="/src/assets/NexCart-logo.png"
            alt="NexCart logo"
            className="mb-3 h-16 w-16 object-contain"
          />

          <span className="mt-1 text-3xl font-extrabold tracking-tight text-white">
            Nex<span className="text-(--nc-primary)">Cart</span>
          </span>
        </Link>

        {/* Forgot Password Form */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-black/20 sm:p-8">
          <div className="mb-7 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-(--nc-primary)/20 bg-(--nc-primary)/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-7 w-7 text-(--nc-primary)"
                aria-hidden="true"
              >
                <rect x="3" y="5" width="18" height="14" rx="3" />
                <path d="m4 7 8 6 8-6" />
              </svg>
            </div>

            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Forgot password?
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              No worries. Enter your email address and we'll help you
              reset your password.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-200"
              >
                Email address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setError("");
                  setSubmitted(false);
                }}
                required
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-(--nc-primary) focus:ring-2 focus:ring-(--nc-primary)/20"
              />
            </div>

            {error && (
              <p role="alert" className="text-sm text-red-400">
                {error}
              </p>
            )}

            {submitted && (
              <p role="status" className="text-sm leading-6 text-amber-300">
                The recovery feature is not connected yet. No reset email
                has been sent.
              </p>
            )}

            <button
              type="submit"
              className="w-full rounded-xl bg-(--nc-primary) px-4 py-3 text-sm font-bold text-slate-950 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-(--nc-primary) focus:ring-offset-2 focus:ring-offset-slate-900 active:scale-[0.99]"
            >
              Request password reset
            </button>
          </form>

          <div className="mt-6 border-t border-slate-800 pt-5 text-center">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-(--nc-primary)"
            >
              <span aria-hidden="true">←</span>
              Back to sign in
            </Link>
          </div>
        </section>

        <p className="mt-6 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} NexCart. All rights reserved.
        </p>
      </div>
    </main>
  );
}

export default ForgotPassword;
