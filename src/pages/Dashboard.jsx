import { Link } from "react-router-dom";
import PageSection from "../components/PageSection";

const dashboardLinks = [
  { title: "Products", description: "Manage your product catalog.", to: "/admin/products" },
  { title: "Orders", description: "Review incoming orders.", to: "/admin/orders" },
  { title: "Customers", description: "View customer information.", to: "/admin/customers" },
  { title: "Analytics", description: "Explore store performance.", to: "/admin/analytics" },
];

function Dashboard() {
  return (
    <PageSection
      eyebrow="Overview"
      title="Dashboard"
      description="Welcome to your Shoplyn commerce control center."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {dashboardLinks.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="rounded-xl border border-slate-800 bg-slate-900 p-5 transition hover:border-blue-500"
          >
            <h3 className="text-lg font-semibold text-slate-100">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-400">{item.description}</p>
            <span className="mt-4 inline-block text-sm font-medium text-blue-400">
              Open section →
            </span>
          </Link>
        ))}
      </div>
    </PageSection>
  );
}

export default Dashboard;