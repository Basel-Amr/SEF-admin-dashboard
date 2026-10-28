import { useState } from "react";
import PageSection from "./PageSection";

function AuthenticationForm({
  title,
  description,
  fields,
  submitLabel,
  confirmation,
  footer,
}) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-slate-100">
      <div className="mx-auto max-w-xl">
        <PageSection eyebrow="NexCart account" title={title} description={description}>
          <form
            className="space-y-5 rounded-xl border border-slate-800 bg-slate-900 p-6"
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
          >
            {fields.map((field) => (
              <label key={field.name} className="block space-y-2">
                <span className="text-sm font-medium text-slate-200">{field.label}</span>
                <input
                  required
                  name={field.name}
                  type={field.type}
                  autoComplete={field.autoComplete}
                  minLength={field.minLength}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100"
                />
              </label>
            ))}
            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-500"
            >
              {submitLabel}
            </button>
            {submitted && (
              <p role="status" className="text-sm text-amber-300">
                {confirmation}
              </p>
            )}
          </form>
        </PageSection>
        {footer && (
          <p className="mt-5 text-sm text-slate-400">
            {footer}
          </p>
        )}
      </div>
    </main>
  );
}

export default AuthenticationForm;
