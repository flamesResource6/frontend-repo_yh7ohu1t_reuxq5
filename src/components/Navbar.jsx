import { ShoppingCart, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar({ cartCount = 0 }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-slate-900/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/flame-icon.svg" alt="logo" className="h-8 w-8" />
            <span className="text-white font-semibold">BlueShop</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-blue-100/80">
            <a href="#" className="hover:text-white transition">Home</a>
            <a href="#products" className="hover:text-white transition">Products</a>
            <a href="#about" className="hover:text-white transition">About</a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="relative inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-white hover:bg-blue-500 transition">
              <ShoppingCart className="h-4 w-4" />
              <span className="hidden sm:inline">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 h-5 min-w-[1.25rem] rounded-full bg-pink-500 text-xs grid place-items-center px-1">
                  {cartCount}
                </span>
              )}
            </button>
            <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
              <Menu />
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden border-t border-white/10 py-2 text-blue-100/80">
            <a href="#" className="block py-2">Home</a>
            <a href="#products" className="block py-2">Products</a>
            <a href="#about" className="block py-2">About</a>
          </div>
        )}
      </div>
    </header>
  );
}
