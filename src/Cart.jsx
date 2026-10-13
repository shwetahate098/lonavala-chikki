import { useState } from "react";
import { PHONE } from "./config.js";

export default function Cart({ open, cart, onClose }) {
  const [name, setName] = useState("");
  const [addr, setAddr] = useState("");
  const lines = Object.entries(cart);
  const total = lines.reduce((s, [, v]) => s + v.qty * v.price, 0);

  function send() {
    if (!lines.length) return alert("Add at least one flavour first.");
    const text = [
      "New order",
      ...lines.map(([n, v]) => `${n} x ${v.qty} (250 g) = ₹${v.qty * v.price}`),
      `Total: ₹${total}`,
      `Name: ${name || "-"}`,
      `Address: ${addr || "-"}`,
    ].join("\n");
    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`, "_blank");
  }

  if (!open) return null;
  return (
    <div id="cart" className="open" role="dialog" aria-label="Your cart">
      <div className="panel">
        <button className="close" onClick={onClose}>Close</button>
        <h2>Your order</h2>
        {lines.length === 0 && <p>Your cart is empty. Add a flavour to start.</p>}
        {lines.map(([n, v]) => (
          <div className="line" key={n}>
            <span>{n} × {v.qty}</span>
            <span>₹{v.qty * v.price}</span>
          </div>
        ))}
        <div className="line"><strong>Total</strong><strong>₹{total}</strong></div>
        <input placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
        <input placeholder="Delivery address and pincode" value={addr} onChange={(e) => setAddr(e.target.value)} autoComplete="street-address" />
        <button className="send" onClick={send}>Send order on WhatsApp</button>
      </div>
    </div>
  );
}
