import PageSection from "../components/PageSection";

function Orders() {
  return (
    <PageSection
      eyebrow="Store management"
      title="Orders"
      description="Review customer orders and their fulfillment status."
    >
      <div className="rounded-xl border border-slate-800 bg-slate-900 p-8 text-slate-400">
        No orders are available yet.
      </div>
    </PageSection>
  );
}

export default Orders;
