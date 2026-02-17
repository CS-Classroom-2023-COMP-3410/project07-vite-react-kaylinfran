function ShoppingCart({ items = [], removeFromCart }) {

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{
      position: 'fixed',
      right: '20px',
      top: '80px',
      width: '250px',
      padding: '15px',
      backgroundColor: '#f8f9fa',
      border: '1px solid #ccc',
      borderRadius: '8px'
    }}>
      <h3>Shopping Cart</h3>

      {items.map(item => (
        <div key={item.id} style={{ marginBottom: '10px' }}>
          <strong>{item.title}</strong><br />
          {item.quantity} × ${item.price}
          <br />
          <button onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}

      <hr />
      <strong>Total: ${total}</strong>
    </div>
  );
}

export default ShoppingCart;
