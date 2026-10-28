
import { useState } from "react";
import { Link } from "react-router-dom";
import NexCartLogo from "../assets/NexCart-logo.png";
import "../styles/Login.css";

// Features displayed in the left branding panel
const features = [
  {
    id: 1,
    icon: "fa-solid fa-chart-line",
    title: "Smart Analytics",
  },
  {
    id: 2,
    icon: "fa-solid fa-box-open",
    title: "Inventory Management",
  },
  {
    id: 3,
    icon: "fa-solid fa-users",
    title: "Customer Insights",
  },
  {
    id: 4,
    icon: "fa-solid fa-shield-halved",
    title: "Secure Administration",
  },
  
];

function Login() {
    const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.email.trim() || !formData.password) {
      setError("Please enter your email address and password.");
      return;
    }

    // TODO: Connect your authentication API here.
    console.log("Login submitted:", {
      email: formData.email,
      rememberMe,
    });

    setError("Authentication is not connected yet.");
  };

  const handleGoogleLogin = () => {
    // TODO: Connect Google OAuth authentication here.
    setError("Google sign-in is not configured yet.");
  };
  
  return (
    <main 
      className="nc-login-page flex min-h-screen items-center justify-center
      bg-(--nc-dark-page) p-3 sm:p-5"
    >
        <section 
          className="nc-login-card grid w-full `max-w-1400` grid-cols-1 overflow-hidden
          rounded-2xl border border-[(--nc-dark-border)] bg-[(--nc-dark-card)] shadow-2xl lg:grid-cols-2"
        >
          {/* Left-Panel : Branding */}
          <div 
            className="nc-login-left-panel hidden flex-col justify-center bg-(--nc-dark-card) p-8 text-white lg:flex xl:p-12"
          >
            {/* Logo and Brand Name */}
            <div className="mb-10 flex w-full items-center gap-5">
              <img
                src={NexCartLogo}
                alt="NexCart Logo"
                className="h-24 w-24 shrink-0 object-contain drop-shadow-[0_8px_18px_rgba(0,190,235,0.18)] transition-transform duration-300 hover:-translate-y-1"
              />

              <h1 className="m-0 whitespace-nowrap text-5xl font-extrabold leading-none tracking-tight sm:text-6xl">
                Nex<span className="text-(--nc-primary)">Cart</span>
              </h1>
            </div>

            {/* Brand Message */}
            <div className="w-full max-w-xl">
              {/* Headline: Both phrases on the same line */}
              <h2 className="flex flex-wrap items-center gap-x-3 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl xl:text-4xl">
                <span>Your Store.</span>

                <span className="text-(--nc-primary)">
                  Your Control.
                </span>
              </h2>

              {/* Short Cyan Accent Divider */}
              <div className="my-4 h-1.5 w-24 overflow-hidden rounded-full bg-(--nc-primary)/20">
                <div className="h-full w-full rounded-full bg-(--nc-primary) shadow-[0_0_12px_var(--nc-primary)]" />
              </div>

              {/* Supporting Description */}
              <p className="max-w-md text-sm leading-7 text-slate-400 xl:text-base">
                Manage your e-commerce business with ease. Track sales,
                organize inventory, and control your store from one
                powerful dashboard.
              </p>
            </div>

            {/* Brand Features */}
            <div 
              className="mt-7 space-y-4 xl:mt-9 xl:space-y-5"
            >
              {
                features.map((feature) =>
                (
                  <div
                    key = {feature.id} 
                          className="
                            group relative flex cursor-default items-center gap-3
                            overflow-hidden rounded-xl border border-transparent
                            px-3 py-3 text-sm text-slate-400
                            transition-all duration-300 ease-out
                            hover:translate-x-2
                            hover:border-cyan-400/20
                            hover:bg-cyan-400/[0.06]
                            hover:text-white
                            xl:gap-4 xl:px-4 xl:py-3.5 xl:text-base"
                  >
                  <i
                    className={`${feature.icon} w-5 text-center text-(--nc-primary)`}
                  />
                    <span>{feature.title}</span>
                  </div>
                ))}

            </div>
            {/* Brand Footer */}
            <div className="mt-10 flex items-center gap-3">
              <span className="h-2 w-2 shrink-0 rounded-full bg-(--nc-primary) shadow-[0_0_12px_rgba(0,190,235,0.65)]" />

              <span className="text-[9px] font-bold tracking-[2px] text-slate-400 sm:text-[10px]">
                SMARTER COMMERCE. SIMPLER MANAGEMENT.
              </span>
            </div>
                      
          </div>

          {/* RIGHT PANEL: LOGIN */}
          <div className="nc-login-right-panel flex min-w-0 flex-col justify-center p-5 sm:p-7 lg:p-6 xl:p-8">
            <div className="mx-auto w-full max-w-xl">

              {/* CENTERED LOGO AND BRAND */}
              <div className="mb-5 flex flex-col items-center text-center xl:mb-6">
                <Link
                  to="/login"
                  aria-label="NexCart login"
                  className="nc-login-logo group flex flex-col items-center"
                >
                  <img
                    src={NexCartLogo}
                    alt="NexCart logo"
                    className="h-14 w-14 object-contain transition-transform duration-300 group-hover:scale-105 sm:h-16 sm:w-16 xl:h-[72px] xl:w-[72px]"
                  />

                  <span className="mt-1 text-3xl font-extrabold tracking-tight text-white">
                    Nex<span className="text-(--nc-primary)">Cart</span>
                  </span>

                  <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.28em] text-slate-500">
                    Admin Dashboard
                  </span>
                </Link>

                <div className="nc-brand-divider mx-auto my-4" />

                <h2 className="text-3xl font-extrabold tracking-tight text-white xl:text-4xl">
                  Welcome Back!
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-400 xl:text-base">
                  Sign in to continue to your NexCart dashboard.
                </p>
              </div>

              {/* LOGIN FORM */}
              <form
                onSubmit={handleSubmit}
                className="space-y-4 xl:space-y-5"
              >
                {/* EMAIL */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-slate-200"
                  >
                    Email Address
                  </label>

                  <div className="nc-login-input-wrap flex items-center gap-3 rounded-xl border border-[var(--nc-dark-border)] bg-slate-800/70 px-4 transition focus-within:border-[var(--nc-primary)] focus-within:ring-2 focus-within:ring-cyan-400/10">
                    <i className="fa-solid fa-envelope text-slate-500" />

                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="min-w-0 flex-1 bg-transparent py-3.5 text-sm text-white outline-none placeholder:text-slate-500 xl:text-base"
                    />
                  </div>
                </div>

                {/* PASSWORD */}
                <div>
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <label
                      htmlFor="password"
                      className="text-sm font-semibold text-slate-200"
                    >
                      Password
                    </label>

                    <Link
                      to="/forgot-password"
                      className="text-sm font-medium text-[var(--nc-primary)] transition hover:text-cyan-300"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <div className="nc-login-input-wrap flex items-center gap-3 rounded-xl border border-[var(--nc-dark-border)] bg-slate-800/70 px-4 transition focus-within:border-[var(--nc-primary)] focus-within:ring-2 focus-within:ring-cyan-400/10">
                    <i className="fa-solid fa-lock text-slate-500" />

                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="min-w-0 flex-1 bg-transparent py-3.5 text-sm text-white outline-none placeholder:text-slate-500 xl:text-base"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword((previous) => !previous)
                      }
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      aria-pressed={showPassword}
                      className="shrink-0 p-1 text-slate-500 transition hover:text-[var(--nc-primary)]"
                    >
                      <i
                        className={`fa-solid ${
                          showPassword ? "fa-eye-slash" : "fa-eye"
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* REMEMBER ME */}
                <div className="flex items-center gap-3">
                  <input
                    id="rememberMe"
                    name="rememberMe"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(event) =>
                      setRememberMe(event.target.checked)
                    }
                    className="h-4 w-4 cursor-pointer rounded accent-cyan-400"
                  />

                  <label
                    htmlFor="rememberMe"
                    className="cursor-pointer text-sm text-slate-400"
                  >
                    Remember me
                  </label>
                </div>

                {/* ERROR MESSAGE */}
                {error && (
                  <p
                    role="alert"
                    className="rounded-lg border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-300"
                  >
                    {error}
                  </p>
                )}

                {/* SIGN IN BUTTON */}
                <button
                  type="submit"
                  className="nc-login-submit group flex w-full items-center justify-center gap-3 rounded-xl bg-[var(--nc-primary)] px-5 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/20 active:translate-y-0"
                >
                  <span>Sign In</span>

                  <i className="fa-solid fa-arrow-right transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>

              {/* OR DIVIDER */}
              <div className="my-5 flex items-center gap-4 xl:my-6">
                <div className="h-px flex-1 bg-slate-700" />

                <span className="text-sm font-medium text-slate-500">
                  OR
                </span>

                <div className="h-px flex-1 bg-slate-700" />
              </div>

              {/* GOOGLE SIGN IN */}
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="nc-google-button flex w-full items-center justify-center gap-3 rounded-xl border border-slate-700 bg-slate-800/90 px-5 py-3.5 font-semibold text-slate-200 transition duration-300 hover:border-slate-600 hover:bg-slate-800 active:scale-[0.99]"
              >
                {/* Official multicolor Google logo */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                  className="h-6 w-6 shrink-0"
                >
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5Z"
                  />

                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.76 7.18l7.73 6C44.42 37.98 46.98 31.95 46.98 24.55Z"
                  />

                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59A14.4 14.4 0 0 1 9.75 24c0-1.59.27-3.13.76-4.59l-7.98-6.19A23.9 23.9 0 0 0 0 24c0 3.87.93 7.52 2.56 10.78l7.97-6.19Z"
                  />

                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.91-5.8l-7.73-6c-2.15 1.45-4.92 2.3-8.18 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48Z"
                  />
                </svg>

                <span>Continue with Google</span>
              </button>

              {/* SECURITY FOOTER */}
              <div className="mt-5 flex items-center justify-center gap-2 text-center text-xs text-slate-500">
                <i className="fa-solid fa-shield-halved text-(--nc-primary)" />

                <span>
                  Protected access for authorized administrators.
                </span>
              </div>

            </div>
          </div>
        </section>

    </main>
  );
}

export default Login;
