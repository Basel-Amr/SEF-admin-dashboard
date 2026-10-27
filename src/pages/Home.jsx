import { Link } from "react-router-dom";
import PageSection from "../components/PageSection";

function Home() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-slate-100">
      <div className="mx-auto max-w-5xl">
        <PageSection
          eyebrow="Shoplyn Store"
          title="Find something you’ll love."
          description="Browse the latest products from the Shoplyn store."
        >
          <div className="flex flex-wrap gap-3">
            <Link
              to="/products"
              className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-500"
            >
              Browse products
            </Link>
            <Link
              to="/carts"
              className="rounded-lg border border-slate-700 px-5 py-3 font-semibold hover:bg-slate-900"
            >
              View cart
            </Link>
            <Link
              to="/login"
              className="rounded-lg border border-slate-700 px-5 py-3 font-semibold hover:bg-slate-900"
            >
              Sign in
            </Link>
          </div>
        </PageSection>
      </div>
    </main>
  );
}

export default Home;