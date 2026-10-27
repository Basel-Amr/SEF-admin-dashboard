import { Link, useLocation } from "react-router-dom";
import PageSection from "../components/PageSection";

function Carts() {
  const location = useLocation();

  return (
    <PageSection
      eyebrow="Shopping"
      title="Your cart"
      description="Products you choose will appear here."
      standalone={!location.pathname.startsWith("/admin/")}
    >
      <div className="rounded-xl border border-slate-800 bg-slate-900 p-8">
        <p className="text-slate-400">Your cart is currently empty.</p>
        <Link
          to="/products"
          className="mt-4 inline-block font-semibold text-blue-300 hover:underline"
        >
          Continue shopping
        </Link>
      </div>
    </PageSection>
  );
}

export default Carts;