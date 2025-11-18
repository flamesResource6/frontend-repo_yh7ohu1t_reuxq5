export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(147,51,234,0.15),transparent_40%)]" />
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              Modern products for everyday life
            </h1>
            <p className="mt-4 text-blue-200/90 text-lg">
              Discover quality essentials designed with care. Free shipping on orders over $50.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#products" className="inline-flex items-center rounded-full bg-blue-600 px-6 py-3 text-white hover:bg-blue-500 transition">Shop now</a>
              <a href="#about" className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-white/90 hover:bg-white/10 transition">Learn more</a>
            </div>
          </div>
          <div className="relative">
            <img className="rounded-2xl border border-white/10 shadow-2xl" src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1200&auto=format&fit=crop" alt="hero" />
            <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-2xl bg-blue-500/20 blur-2xl"/>
          </div>
        </div>
      </div>
    </section>
  );
}
