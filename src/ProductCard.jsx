export default function ProductCard({ product, qty, onAdd, onRemove }) {
  const { name, price, color, category } = product;
  return (
    <div className="item">
      <div className="dot" style={{ background: color }} />
      <h3>{name}</h3>
      <small>{category} chikki, 250 g</small>
      <div className="row">
        <span className="price">₹{price}</span>
        <div className="qty">
          {qty ? (
            <>
              <button onClick={onRemove} aria-label={`Remove one ${name}`}>−</button>
              <span>{qty}</span>
              <button onClick={onAdd} aria-label={`Add one ${name}`}>+</button>
            </>
          ) : (
            <button className="add" onClick={onAdd}>Add</button>
          )}
        </div>
      </div>
    </div>
  );
}
