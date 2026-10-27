import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageSection from "../components/PageSection";
import ProductForm from "../components/products/ProductForm";
import { getProducts, saveProducts } from "../utils/products";

function AddProduct() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  function handleSubmit(product) {
    try {
      saveProducts([...getProducts(), product]);
      navigate("/admin/products");
    } catch (saveError) {
      setError(saveError.message);
    }
  }

  return (
    <PageSection
      eyebrow="Catalog management"
      title="Add product"
      description="Create a product for the Shoplyn catalog."
    >
      <ProductForm
        submitLabel="Save product"
        onSubmit={handleSubmit}
        error={error}
      />
    </PageSection>
  );
}

export default AddProduct;