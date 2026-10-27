import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-center text-slate-100">
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-400">404 error</p>
      <h1 className="mt-3 text-4xl font-bold">Page not found</h1>
      <p className="mt-3 text-slate-400">The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="mt-6 rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-500">
        Go to the home page
      </Link>
    </main>
  );
}

export default NotFound;