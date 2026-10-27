import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PageSection from "../components/PageSection";
import { getProducts, saveProducts } from "../utils/products";

function Products() {
  const location = useLocation();
  const standalone = !location.pathname.startsWith("/admin/");
  const [products, setProducts] = useState(() => {
    try {
      return { list: getProducts(), error: "" };
    } catch (error) {
      return { list: [], error: error.message };
    }
  });

  function removeProduct(id) {
    try {
      const updatedProducts = products.list.filter((product) => product.id !== id);
      saveProducts(updatedProducts);
      setProducts({ list: updatedProducts, error: "" });
    } catch (error) {
      setProducts((current) => ({ ...current, error: error.message }));
    }
  }

  return (
    <PageSection
      eyebrow="Catalog"
      title="Products"
      description="Browse the catalog or manage products in your store."
      standalone={standalone}
    >
      <div className="flex flex-wrap gap-3">
        <Link
          to="/admin/products/new"
          className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-500"
        >
          Add product
        </Link>
        <Link
          to="/carts"
          className="rounded-lg border border-slate-700 px-4 py-2 font-semibold hover:bg-slate-900"
        >
          View cart
        </Link>
      </div>

      {products.error && (
        <p role="alert" className="rounded-lg bg-red-950 p-4 text-red-300">
          Could not load products: {products.error}
        </p>
      )}

      {!products.error && products.list.length === 0 && (
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-8 text-center text-slate-400">
          No products have been added yet.
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {products.list.map((product) => (
          <article
            key={product.id}
            className="rounded-xl border border-slate-800 bg-slate-900 p-5"
          >
            <Link to={`/products/${encodeURIComponent(product.id)}`}>
              <h3 className="text-lg font-semibold text-slate-100">{product.name}</h3>
            </Link>
            <p className="mt-2 font-medium text-blue-300">
              ${Number(product.price).toFixed(2)}
            </p>
            {product.description && (
              <p className="mt-3 text-sm text-slate-400">{product.description}</p>
            )}
            <div className="mt-5 flex gap-3 text-sm">
              <Link
                to={`/admin/products/${encodeURIComponent(product.id)}/edit`}
                className="text-blue-300 hover:underline"
              >
                Edit
              </Link>
              <button
                type="button"
                onClick={() => removeProduct(product.id)}
                className="text-red-300 hover:underline"
              >
                Delete
              </button>
            </div>
          </article>
        ))}
      </div>
    </PageSection>
  );
}

export default Products;