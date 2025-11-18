import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const API_BASE = import.meta.env.VITE_BACKEND_URL || "";

export default function ProductGrid({ onAdd }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        setError("");
        const res = await fetch(`${API_BASE}/api/products`);
        if (!res.ok) throw new Error("Failed to load products");
        const data = await res.json();
        setProducts(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) return <div className="text-center text-blue-200">Loading products…</div>;
  if (error) return <div className="text-center text-red-300">{error}</div>;

  return (
    <section id="products" className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-semibold text-white mb-6">Featured products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(p => (
          <ProductCard key={p.id} product={p} onAdd={onAdd} />
        ))}
      </div>
    </section>
  );
}
