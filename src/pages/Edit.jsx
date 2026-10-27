import { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import PageSection from "../components/PageSection";
import ProductForm from "../components/products/ProductForm";
import { getProducts, saveProducts } from "../utils/products";

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [saveError, setSaveError] = useState("");
  const result = useMemo(() => {
    try {
      return {
        product: getProducts().find((item) => String(item.id) === id) ?? null,
        error: "",
      };
    } catch (error) {
      return { product: null, error: error.message };
    }
  }, [id]);

  function handleSubmit(updatedProduct) {
    try {
      const products = getProducts().map((product) =>
        String(product.id) === id ? updatedProduct : product
      );
      saveProducts(products);
      navigate("/admin/products");
    } catch (error) {
      setSaveError(error.message);
    }
  }

  return (
    <PageSection
      eyebrow="Catalog management"
      title="Edit product"
      description="Update product information in your catalog."
    >
      {(result.error || saveError) && (
        <p role="alert" className="rounded-lg bg-red-950 p-4 text-red-300">
          Could not load or save this product: {result.error || saveError}
        </p>
      )}
      {!result.error && result.product && (
        <ProductForm
          initialProduct={result.product}
          submitLabel="Save changes"
          onSubmit={handleSubmit}
          error={saveError}
        />
      )}
      {!result.error && !result.product && (
        <div className="space-y-4">
          <p className="text-slate-400">This product could not be found.</p>
          <Link to="/admin/products" className="text-blue-300 hover:underline">
            Back to products
          </Link>
        </div>
      )}
    </PageSection>
  );
}

export default Edit;