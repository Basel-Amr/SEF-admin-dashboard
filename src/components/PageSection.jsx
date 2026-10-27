function PageSection({ eyebrow, title, description, children, standalone = false }) {
  const content = (
    <>
      <header>
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-400">
            {eyebrow}
          </p>
        )}
        <h2 className="mt-2 text-3xl font-bold text-slate-100">{title}</h2>
        {description && (
          <p className="mt-2 max-w-2xl text-slate-400">{description}</p>
        )}
      </header>
      {children}
    </>
  );

  if (standalone) {
    return (
      <main className="min-h-screen bg-slate-950 px-6 py-12 text-slate-100">
        <div className="mx-auto max-w-5xl space-y-6">{content}</div>
      </main>
    );
  }

  return <section className="space-y-6">{content}</section>;
}

export default PageSection;
