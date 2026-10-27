import PageSection from "../components/PageSection";

function Customers() {
  return (
    <PageSection
      eyebrow="Store management"
      title="Customers"
      description="Customer records will appear here when connected to your store data."
    >
      <div className="rounded-xl border border-slate-800 bg-slate-900 p-8 text-slate-400">
        No customer records are available yet.
      </div>
    </PageSection>
  );
}

export default Customers;