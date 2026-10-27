function ProductForm({ initialProduct, submitLabel, onSubmit, error }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    onSubmit({
      ...initialProduct,
      name: String(formData.get("name")).trim(),
      price: Number(formData.get("price")),
      description: String(formData.get("description")).trim(),
      id: initialProduct?.id ?? String(Date.now()),
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl space-y-5 rounded-xl border border-slate-800 bg-slate-900 p-6"
    >
      {error && (
        <p role="alert" className="rounded-lg bg-red-950 p-3 text-red-300">
          {error}
        </p>
      )}
      <label className="block space-y-2">
        <span className="text-sm font-medium text-slate-200">Product name</span>
        <input
          required
          name="name"
          defaultValue={initialProduct?.name ?? ""}
          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100"
        />
      </label>
      <label className="block space-y-2">
        <span className="text-sm font-medium text-slate-200">Price</span>
        <input
          required
          min="0.01"
          step="0.01"
          type="number"
          name="price"
          defaultValue={initialProduct?.price ?? ""}
          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100"
        />
      </label>
      <label className="block space-y-2">
        <span className="text-sm font-medium text-slate-200">Description</span>
        <textarea
          name="description"
          rows="4"
          defaultValue={initialProduct?.description ?? ""}
          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100"
        />
      </label>
      <button
        type="submit"
        className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-500"
      >
        {submitLabel}
      </button>
    </form>
  );
}

export default ProductForm;
