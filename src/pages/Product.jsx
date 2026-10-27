import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import PageSection from "../components/PageSection";
import { getProducts } from "../utils/products";

function Product() {
  const { id } = useParams();
  const result = useMemo(() => {
    try {
      const product = getProducts().find((item) => String(item.id) === id);
      return { product, error: "" };
    } catch (error) {
      return { product: null, error: error.message };
    }
  }, [id]);

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-slate-100">
      <div className="mx-auto max-w-4xl">
        <PageSection
          eyebrow="Product"
          title={result.product?.name ?? "Product details"}
          description={
            result.product?.description || "Product information from the Shoplyn catalog."
          }
        >
          {result.error && (
            <p role="alert" className="rounded-lg bg-red-950 p-4 text-red-300">
              Could not load this product: {result.error}
            </p>
          )}
          {!result.error && result.product && (
            <p className="text-2xl font-semibold text-blue-300">
              ${Number(result.product.price).toFixed(2)}
            </p>
          )}
          {!result.error && !result.product && (
            <p className="text-slate-400">This product could not be found.</p>
          )}
          <Link to="/products" className="inline-block text-blue-300 hover:underline">
            Back to products
          </Link>
        </PageSection>
      </div>
    </main>
  );
}

export default Product;