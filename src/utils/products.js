
const STORAGE_KEY = "shoplyn_products";

export function getProducts() {
  try {
    const products = localStorage.getItem(STORAGE_KEY);
    return products ? JSON.parse(products) : [];
  } catch (error) {
    console.error("Failed to load products:", error);
    return [];
  }
}

export function saveProducts(products) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
}
