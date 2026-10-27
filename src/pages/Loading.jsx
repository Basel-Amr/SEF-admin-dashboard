function Loading() {
  return (
    <main
      className="flex min-h-screen items-center justify-center bg-slate-950 text-slate-100"
      role="status"
      aria-live="polite"
    >
      <span className="mr-3 size-5 animate-spin rounded-full border-2 border-slate-600 border-t-blue-400" />
      Loading…
    </main>
  );
}

export default Loading;