import PageSection from "../components/PageSection";

function Analytics() {
  return (
    <PageSection
      eyebrow="Overview"
      title="Analytics"
      description="Store performance metrics will be available when analytics data is connected."
    >
      <div className="rounded-xl border border-slate-800 bg-slate-900 p-8 text-slate-400">
        There is no analytics data to display yet.
      </div>
    </PageSection>
  );
}

export default Analytics;
