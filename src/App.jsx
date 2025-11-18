import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";

const API_BASE = import.meta.env.VITE_BACKEND_URL || "";

function App() {
  const [cart, setCart] = useState([]);
  const [seeded, setSeeded] = useState(false);

  useEffect(() => {
    async function seed() {
      try {
        const res = await fetch(`${API_BASE}/api/seed`, { method: "POST" });
        if (res.ok) setSeeded(true);
      } catch {}
    }
    seed();
  }, []);

  function addToCart(product) {
    setCart(prev => {
      const exists = prev.find(p => p.id === product.id);
      if (exists) {
        return prev.map(p => p.id === product.id ? { ...p, qty: p.qty + 1 } : p);
      }
      return [...prev, { ...product, qty: 1 }];
    });
  }

  async function checkout() {
    if (cart.length === 0) return;
    const items = cart.map(c => ({ product_id: c.id, quantity: c.qty }));
    const total = cart.reduce((s, c) => s + c.price * c.qty, 0);
    const payload = {
      customer_name: "Demo Customer",
      email: "demo@example.com",
      address: "123 Demo Street",
      items,
      total,
    };
    const res = await fetch(`${API_BASE}/api/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (res.ok) {
      setCart([]);
      alert("Order placed successfully!");
    } else {
      const err = await res.json().catch(() => ({ detail: "Error" }));
      alert(`Checkout failed: ${err.detail}`);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-blue-50">
      <Navbar cartCount={cart.reduce((s,c)=>s+c.qty,0)} />
      <Hero />
      <div className="mx-auto max-w-6xl px-4">
        {cart.length > 0 && (
          <div className="my-6 rounded-2xl border border-white/10 bg-slate-800/60 p-4">
            <div className="flex items-center justify-between">
              <div className="text-sm text-blue-200/90">
                {cart.length} item(s) in cart — Total ${cart.reduce((s,c)=>s+c.price*c.qty,0).toFixed(2)}
              </div>
              <div className="flex gap-2">
                <button onClick={()=>setCart([])} className="rounded-full border border-white/20 px-4 py-2 text-white/90 hover:bg-white/10 transition">Clear</button>
                <button onClick={checkout} className="rounded-full bg-blue-600 px-4 py-2 text-white hover:bg-blue-500 transition">Checkout</button>
              </div>
            </div>
          </div>
        )}
      </div>
      <ProductGrid onAdd={addToCart} />
      <Footer />
    </div>
  );
}

export default App
