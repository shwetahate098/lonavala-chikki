import { useState } from "react";
import { MENU, PRODUCTS } from "./menu.js";
import { ADDRESS } from "./config.js";
import Header from "./Header.jsx";
import ProductCard from "./ProductCard.jsx";
import Cart from "./Cart.jsx";

const CATEGORIES = ["All", ...Object.keys(MENU)];

export default function App() {
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState({}); // { name: { qty, price } }
  const [open, setOpen] = useState(false);

  const change = (p, d) =>
    setCart((c) => {
      const qty = (c[p.name]?.qty || 0) + d;
      const next = { ...c };
      if (qty <= 0) delete next[p.name];
      else next[p.name] = { qty, price: p.price };
      return next;
    });

  const count = Object.values(cart).reduce((s, v) => s + v.qty, 0);
  const shown = PRODUCTS.filter((p) => category === "All" || p.category === category);

  return (
    <div className="wrap">
      <Header count={count} onOpenCart={() => setOpen(true)} />
      <main id="menu">
        <nav className="tabs" aria-label="Flavour categories">
          {CATEGORIES.map((c) => (
            <button key={c} aria-pressed={c === category} onClick={() => setCategory(c)}>{c}</button>
          ))}
        </nav>
        <div className="grid">
          {shown.map((p) => (
            <ProductCard key={p.name} product={p} qty={cart[p.name]?.qty} onAdd={() => change(p, 1)} onRemove={() => change(p, -1)} />
          ))}
        </div>
      </main>
      <footer>Prices are per 250 g pack. Order on WhatsApp. {ADDRESS}.</footer>
      <Cart open={open} cart={cart} onClose={() => setOpen(false)} />
    </div>
  );
}
