import { useState } from "react";
import PageSection from "../components/PageSection";

function Settings() {
  const [saved, setSaved] = useState(false);

  return (
    <PageSection
      eyebrow="Preferences"
      title="Settings"
      description="Configure basic preferences for your Shoplyn workspace."
    >
      <form
        className="max-w-2xl space-y-5 rounded-xl border border-slate-800 bg-slate-900 p-6"
        onSubmit={(event) => {
          event.preventDefault();
          setSaved(true);
        }}
      >
        <label className="block space-y-2">
          <span className="text-sm font-medium text-slate-200">Store name</span>
          <input
            defaultValue="Shoplyn Store"
            className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100"
          />
        </label>
        <label className="flex items-center gap-3 text-slate-200">
          <input type="checkbox" defaultChecked className="size-4 accent-blue-500" />
          Enable email notifications
        </label>
        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-500"
        >
          Save settings
        </button>
        {saved && <p role="status" className="text-sm text-emerald-300">Settings saved for this session.</p>}
      </form>
    </PageSection>
  );
}

export default Settings;