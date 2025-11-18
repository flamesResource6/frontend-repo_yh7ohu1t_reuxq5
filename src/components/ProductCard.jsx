import { ShoppingCart } from "lucide-react";

export default function ProductCard({ product, onAdd }) {
  return (
    <div className="group rounded-2xl bg-slate-800/60 border border-white/10 overflow-hidden hover:border-blue-500/30 transition shadow-lg">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={product.image} alt={product.title} className="h-full w-full object-cover transform group-hover:scale-105 transition duration-300" />
      </div>
      <div className="p-4">
        <h3 className="text-white font-semibold line-clamp-1">{product.title}</h3>
        <p className="mt-1 text-blue-200/80 text-sm line-clamp-2 min-h-[2.5rem]">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-white font-semibold">${product.price.toFixed(2)}</span>
          <button onClick={() => onAdd(product)} className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-white hover:bg-blue-500 transition">
            <ShoppingCart className="h-4 w-4" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
