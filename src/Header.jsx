import { SHOP_NAME } from "./config.js";

export default function Header({ count, onOpenCart }) {
  return (
    <>
      <header>
        <div className="logo">{SHOP_NAME}</div>
        <button className="cartbtn" onClick={onOpenCart}>Cart ({count})</button>
      </header>
      <section className="hero">
        <h1>Fresh chikki from the hills of Lonavala</h1>
        <p>Jaggery chikki, chocolate chikki, dry fruit chikki and spicy snap crunch. Packed fresh and sent to your door.</p>
        <a href="#menu">See all flavours</a>
      </section>
    </>
  );
}
